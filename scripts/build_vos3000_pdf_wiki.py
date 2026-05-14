from __future__ import annotations

import json
import re
from pathlib import Path

import fitz
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
PDF_PATH = ROOT / "VOS3000_webinterface.pdf"
SITE_DIR = ROOT / "vos3000-wiki"
PAGE_DIR = SITE_DIR / "assets" / "pages"
HTML_PAGE_DIR = SITE_DIR / "assets" / "html-pages"
VERSION = "20260514-1"

HEADER_PATTERNS = [
    re.compile(r"^VOS3000\s*$"),
    re.compile(r"^Web 接口说明书.*$"),
    re.compile(r"^文档版本 05.*$"),
    re.compile(r"^版权所有 © 昆石网络技术有限公司\s*$"),
    re.compile(r"^昆石专有和保密信息\s*$"),
]
SECTION_RE = re.compile(r"^(\d+(?:\.\d+)*)\s+(.+?)\s*$")
TOC_RE = re.compile(r"^(\d+(?:\.\d+)*)\s+(.+?)\s+\.{2,}\s*(\d+)\s*$")


def slugify(section_no: str) -> str:
    return f"s-{section_no.replace('.', '-')}"


def strip_page_noise(text: str) -> list[str]:
    lines: list[str] = []
    for raw in text.splitlines():
        line = raw.strip()
        if not line:
            continue
        if any(pattern.match(line) for pattern in HEADER_PATTERNS):
            continue
        if re.fullmatch(r"[ivxlcdm]+|\d+", line, flags=re.I):
            continue
        if line in {"目  录"}:
            continue
        lines.append(line)
    return lines


def extract_toc(reader: PdfReader) -> list[dict]:
    entries: list[dict] = []
    seen: set[tuple[str, str]] = set()
    for page_index in range(2, 5):
        for line in strip_page_noise(reader.pages[page_index].extract_text() or ""):
            match = TOC_RE.match(line)
            if not match:
                continue
            no, title, printed_page = match.groups()
            key = (no, title)
            if key in seen:
                continue
            seen.add(key)
            entries.append(
                {
                    "no": no,
                    "title": title.strip(),
                    "printedPage": int(printed_page),
                    "slug": slugify(no),
                    "level": no.count(".") + 1,
                }
            )
    return entries


def normalize_lines(lines: list[str]) -> list[str]:
    normalized: list[str] = []
    for line in lines:
        normalized.append(re.sub(r"\s+", " ", line).strip())
    return normalized


def extract_sections(reader: PdfReader, toc: list[dict]) -> list[dict]:
    toc_by_no = {entry["no"]: entry for entry in toc}
    sections: list[dict] = []
    current: dict | None = None

    for page_index in range(5, len(reader.pages)):
        lines = normalize_lines(strip_page_noise(reader.pages[page_index].extract_text() or ""))
        for line in lines:
            match = SECTION_RE.match(line)
            if match and match.group(1) in toc_by_no:
                if current:
                    sections.append(current)
                current = {**toc_by_no[match.group(1)], "sourcePage": page_index + 1, "text": []}
                continue
            if current:
                current["text"].append(line)

    if current:
        sections.append(current)

    existing = {section["no"] for section in sections}
    for entry in toc:
        if entry["no"] not in existing:
            sections.append({**entry, "sourcePage": entry["printedPage"] + 5, "text": []})

    sections.sort(key=lambda item: [int(part) for part in item["no"].split(".")])
    for index, section in enumerate(sections):
        next_start = None
        for next_section in sections[index + 1 :]:
            if next_section["sourcePage"] > section["sourcePage"]:
                next_start = next_section["sourcePage"]
                break
        section["endPage"] = max(section["sourcePage"], (next_start - 1) if next_start else len(reader.pages))
    return sections


def render_pdf_pages() -> None:
    from PIL import Image

    PAGE_DIR.mkdir(parents=True, exist_ok=True)
    pdf = fitz.open(PDF_PATH)
    matrix = fitz.Matrix(2, 2)
    for index, page in enumerate(pdf, start=1):
        target = PAGE_DIR / f"page-{index:03d}.jpg"
        if target.exists() and target.stat().st_size > 0:
            continue
        pixmap = page.get_pixmap(matrix=matrix, alpha=False, colorspace=fitz.csRGB)
        image = Image.frombytes("RGB", (pixmap.width, pixmap.height), pixmap.samples)
        image.save(target, "JPEG", quality=88, optimize=True)


def export_pdf_html_pages() -> None:
    HTML_PAGE_DIR.mkdir(parents=True, exist_ok=True)
    pdf = fitz.open(PDF_PATH)
    for index, page in enumerate(pdf, start=1):
        target = HTML_PAGE_DIR / f"page-{index:03d}.html"
        html = page.get_text("html")
        html = html.replace('id="page0"', f'data-pdf-page="{index}" class="pdf-html-inner"', 1)
        html = html.replace(">", f">\n{drawings_to_svg(page)}", 1)
        target.write_text(html, encoding="utf-8")


def color_to_css(color: tuple[float, float, float] | None) -> str:
    if color is None:
        return "none"
    r, g, b = [max(0, min(255, round(channel * 255))) for channel in color]
    return f"rgb({r},{g},{b})"


def drawings_to_svg(page: fitz.Page) -> str:
    width = page.rect.width
    height = page.rect.height
    shapes: list[str] = []
    for drawing in page.get_drawings():
        fill = color_to_css(drawing.get("fill"))
        stroke = color_to_css(drawing.get("color"))
        stroke_width = drawing.get("width") or 0
        opacity = drawing.get("fill_opacity")
        stroke_opacity = drawing.get("stroke_opacity")
        if opacity is None:
            opacity = 1
        if stroke_opacity is None:
            stroke_opacity = 1
        for item in drawing["items"]:
            if item[0] == "re":
                rect = item[1]
                shapes.append(
                    "<rect "
                    f'x="{rect.x0:.3f}" y="{rect.y0:.3f}" '
                    f'width="{rect.width:.3f}" height="{rect.height:.3f}" '
                    f'fill="{fill}" fill-opacity="{opacity:.3f}" '
                    f'stroke="{stroke}" stroke-width="{stroke_width:.3f}" stroke-opacity="{stroke_opacity:.3f}" />'
                )
            elif item[0] == "l":
                p1, p2 = item[1], item[2]
                shapes.append(
                    "<line "
                    f'x1="{p1.x:.3f}" y1="{p1.y:.3f}" x2="{p2.x:.3f}" y2="{p2.y:.3f}" '
                    f'stroke="{stroke}" stroke-width="{stroke_width:.3f}" stroke-opacity="{stroke_opacity:.3f}" />'
                )
    if not shapes:
        return ""
    return (
        f'<svg class="pdf-vector-layer" viewBox="0 0 {width:.3f} {height:.3f}" '
        f'width="{width:.3f}pt" height="{height:.3f}pt" aria-hidden="true">'
        + "".join(shapes)
        + "</svg>"
    )


def build_docs(sections: list[dict]) -> list[dict]:
    docs: list[dict] = []
    for section in sections:
        text = "\n".join(section["text"])
        endpoint_match = re.search(r"接口地址\s*(/\S+)", text)
        pages = [
            {
                "number": page_number,
                "src": f"./assets/pages/page-{page_number:03d}.jpg",
                "html": f"./assets/html-pages/page-{page_number:03d}.html",
                "label": f"PDF 第 {page_number} 页",
            }
            for page_number in range(section["sourcePage"], section["endPage"] + 1)
        ]
        docs.append(
            {
                "no": section["no"],
                "title": section["title"],
                "slug": section["slug"],
                "level": section["level"],
                "sourcePage": section["sourcePage"],
                "endPage": section["endPage"],
                "endpoint": endpoint_match.group(1) if endpoint_match else "",
                "pages": pages,
                "searchText": f'{section["no"]} {section["title"]} {text}',
            }
        )
    return docs


def write_site(docs: list[dict]) -> None:
    SITE_DIR.mkdir(parents=True, exist_ok=True)
    (SITE_DIR / "data.js").write_text(
        "window.VOS3000_DOCS = " + json.dumps(docs, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    (SITE_DIR / "index.html").write_text(
        f"""<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>VOS3000 Web 接口 Wiki</title>
  <link rel="stylesheet" href="./styles.css?v={VERSION}">
</head>
<body>
  <aside class="sidebar">
    <div class="brand">
      <strong>VOS3000</strong>
      <span>PDF 版 Wiki</span>
    </div>
    <label class="search">
      <span>搜索章节、接口、字段</span>
      <input id="searchInput" type="search" placeholder="例如 CreateCustomer 或 创建账户">
    </label>
    <nav id="navList" class="nav-list" aria-label="章节目录"></nav>
  </aside>
  <main class="content">
    <header class="topbar">
      <button id="menuButton" class="icon-button" type="button" aria-label="打开目录">☰</button>
      <div>
        <p>文档版本 05 · 发布日期 2022-10-19 · HTML 版面复刻</p>
        <h1 id="pageTitle">VOS3000 Web 接口说明书</h1>
      </div>
      <a class="pdf-link" href="../VOS3000_webinterface.pdf">原始 PDF</a>
    </header>
    <section id="summary" class="summary"></section>
    <article id="article" class="article"></article>
  </main>
  <script src="./data.js?v={VERSION}"></script>
  <script src="./app.js?v={VERSION}"></script>
</body>
</html>
""",
        encoding="utf-8",
    )
    (SITE_DIR / "app.js").write_text(
        """const docs = window.VOS3000_DOCS || [];
const navList = document.querySelector("#navList");
const article = document.querySelector("#article");
const pageTitle = document.querySelector("#pageTitle");
const searchInput = document.querySelector("#searchInput");
const summary = document.querySelector("#summary");
const menuButton = document.querySelector("#menuButton");

function renderNav(items = docs) {
  navList.innerHTML = items.map((doc) => `
    <a href="#${doc.slug}" class="nav-item level-${doc.level}" data-slug="${doc.slug}">
      <span>${doc.no}</span>
      <strong>${doc.title}</strong>
      ${doc.endpoint ? `<small>${doc.endpoint}</small>` : ""}
    </a>
  `).join("");
}

function setActive(slug) {
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.slug === slug);
  });
}

function legacySlug(doc) {
  return `${doc.no.replaceAll(".", "-")}-${doc.title}`.toLowerCase();
}

function resolveDoc(slug = docs[0]?.slug) {
  const decodedSlug = decodeURIComponent(slug || "");
  return docs.find((item) => item.slug === decodedSlug)
    || docs.find((item) => legacySlug(item) === decodedSlug)
    || docs[0];
}

async function loadPageHtml(page) {
  try {
    const response = await fetch(page.html);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.text();
  } catch (error) {
    return `<img src="${page.src}" alt="${page.label}" loading="lazy">`;
  }
}

async function renderDoc(slug = docs[0]?.slug) {
  const doc = resolveDoc(slug);
  if (!doc) return;
  document.title = `${doc.no} ${doc.title} - VOS3000 Wiki`;
  pageTitle.textContent = `${doc.no} ${doc.title}`;
  const pageRange = doc.sourcePage === doc.endPage ? `${doc.sourcePage}` : `${doc.sourcePage}-${doc.endPage}`;
  summary.innerHTML = `
    <div><span>章节</span><strong>${doc.no}</strong></div>
    <div><span>PDF 页码</span><strong>${pageRange}</strong></div>
    <div><span>接口</span><strong>${doc.endpoint || "通用说明"}</strong></div>
  `;
  article.innerHTML = `
    <div class="page-stack">
      ${doc.pages.map((page) => `
        <figure class="pdf-page loading" id="page-${page.number}" data-html="${page.html}">
          <figcaption>${page.label}</figcaption>
          <div class="page-loading">正在加载 HTML 版面...</div>
        </figure>
      `).join("")}
    </div>
  `;
  await Promise.all(doc.pages.map(async (page) => {
    const figure = document.querySelector(`#page-${page.number}`);
    if (!figure) return;
    const html = await loadPageHtml(page);
    figure.classList.remove("loading");
    figure.querySelector(".page-loading")?.remove();
    figure.insertAdjacentHTML("beforeend", html);
  }));
  setActive(doc.slug);
  document.body.classList.remove("nav-open");
  article.scrollIntoView({ block: "start" });
}

function search(keyword) {
  const normalized = keyword.trim().toLowerCase();
  if (!normalized) {
    renderNav(docs);
    return;
  }
  renderNav(docs.filter((doc) => doc.searchText.toLowerCase().includes(normalized)));
}

navList.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-slug]");
  if (!link) return;
  event.preventDefault();
  const slug = link.dataset.slug;
  history.pushState(null, "", `#${slug}`);
  renderDoc(slug);
});
window.addEventListener("hashchange", () => renderDoc(location.hash.slice(1)));
window.addEventListener("popstate", () => renderDoc(location.hash.slice(1)));
searchInput.addEventListener("input", (event) => search(event.target.value));
menuButton.addEventListener("click", () => document.body.classList.toggle("nav-open"));

renderNav(docs);
renderDoc(location.hash.slice(1) || docs[0]?.slug);
""",
        encoding="utf-8",
    )
    (SITE_DIR / "styles.css").write_text(
        """* { box-sizing: border-box; }
:root {
  color-scheme: light;
  --ink: #1a242d;
  --muted: #66727d;
  --line: #d5dde3;
  --panel: #f5f7f9;
  --paper: #ffffff;
  --accent: #0f766e;
  --accent-soft: #e2f3ef;
}
body {
  margin: 0;
  color: var(--ink);
  background: #eef2f5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
}
.sidebar {
  position: fixed;
  inset: 0 auto 0 0;
  width: 330px;
  display: flex;
  flex-direction: column;
  background: #fbfcfd;
  border-right: 1px solid var(--line);
}
.brand {
  padding: 22px 20px 16px;
  border-bottom: 1px solid var(--line);
}
.brand strong {
  display: block;
  font-size: 24px;
  letter-spacing: 0;
}
.brand span {
  color: var(--muted);
  font-size: 14px;
}
.search {
  display: grid;
  gap: 8px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--line);
  color: var(--muted);
  font-size: 13px;
}
.search input {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 10px 12px;
  font: inherit;
  background: #fff;
}
.nav-list {
  overflow: auto;
  padding: 10px 10px 24px;
}
.nav-item {
  display: grid;
  grid-template-columns: 54px 1fr;
  gap: 4px 8px;
  padding: 9px 10px;
  color: var(--ink);
  text-decoration: none;
  border-radius: 6px;
}
.nav-item:hover,
.nav-item.active {
  background: var(--accent-soft);
}
.nav-item span {
  color: var(--accent);
  font-size: 13px;
  font-weight: 700;
}
.nav-item strong {
  font-size: 14px;
  font-weight: 600;
}
.nav-item small {
  grid-column: 2;
  color: var(--muted);
  overflow-wrap: anywhere;
}
.level-2 { padding-left: 22px; }
.content {
  margin-left: 330px;
  min-height: 100vh;
}
.topbar {
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 38px;
  border-bottom: 1px solid var(--line);
  background: rgba(255,255,255,0.96);
}
.topbar p {
  margin: 0 0 4px;
  color: var(--muted);
  font-size: 13px;
}
.topbar h1 {
  margin: 0;
  font-size: 23px;
  letter-spacing: 0;
}
.icon-button {
  display: none;
  border: 1px solid var(--line);
  background: #fff;
  border-radius: 6px;
  width: 40px;
  height: 40px;
  font-size: 20px;
}
.pdf-link {
  flex: 0 0 auto;
  color: #fff;
  background: var(--accent);
  text-decoration: none;
  border-radius: 6px;
  padding: 10px 14px;
  font-size: 14px;
}
.summary {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  margin: 24px auto 0;
  width: min(100% - 64px, 1120px);
  border: 1px solid var(--line);
  background: var(--line);
}
.summary div {
  background: #fff;
  padding: 13px 16px;
}
.summary span {
  display: block;
  color: var(--muted);
  font-size: 12px;
  margin-bottom: 6px;
}
.summary strong {
  overflow-wrap: anywhere;
}
.article {
  width: min(100% - 64px, 1120px);
  margin: 22px auto 72px;
}
.page-stack {
  display: grid;
  gap: 22px;
}
.pdf-page {
  margin: 0;
  padding: 12px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: var(--paper);
  box-shadow: 0 12px 28px rgba(26,36,45,0.10);
  overflow: auto;
}
.pdf-page figcaption {
  margin: 0 0 10px;
  color: var(--muted);
  font-size: 13px;
}
.pdf-page img {
  display: block;
  max-width: 100%;
  height: auto;
  background: #fff;
}
.page-loading {
  padding: 40px;
  color: var(--muted);
  text-align: center;
}
.pdf-html-inner {
  position: relative;
  margin: 0 auto;
  background: #fff;
  transform-origin: top left;
}
.pdf-html-inner p {
  position: absolute;
  margin: 0;
  white-space: nowrap;
}
.pdf-html-inner span {
  white-space: pre;
}
.pdf-html-inner img {
  position: absolute;
}
.pdf-vector-layer {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
@media (max-width: 900px) {
  .sidebar {
    transform: translateX(-100%);
    transition: transform .2s ease;
    z-index: 5;
  }
  body.nav-open .sidebar {
    transform: translateX(0);
  }
  .content {
    margin-left: 0;
  }
  .topbar {
    padding: 14px 18px;
  }
  .icon-button {
    display: inline-grid;
    place-items: center;
  }
  .summary,
  .article {
    width: calc(100% - 24px);
  }
  .summary {
    grid-template-columns: 1fr;
  }
  .pdf-page {
    padding: 8px;
  }
}
""",
        encoding="utf-8",
    )


def main() -> None:
    reader = PdfReader(str(PDF_PATH))
    toc = extract_toc(reader)
    sections = extract_sections(reader, toc)
    render_pdf_pages()
    export_pdf_html_pages()
    docs = build_docs(sections)
    write_site(docs)
    print(f"Generated {len(docs)} sections, {len(reader.pages)} page images, and HTML page replicas in {SITE_DIR}")


if __name__ == "__main__":
    main()
