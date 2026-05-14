from __future__ import annotations

import html
import json
import re
from pathlib import Path

from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
PDF_PATH = ROOT / "VOS3000_webinterface.pdf"
SITE_DIR = ROOT / "vos3000-wiki"


HEADER_PATTERNS = [
    re.compile(r"^VOS3000\s*$"),
    re.compile(r"^Web 接口说明书.*$"),
    re.compile(r"^文档版本 05.*$"),
    re.compile(r"^版权所有 © 昆石网络技术有限公司\s*$"),
    re.compile(r"^昆石专有和保密信息\s*$"),
]

SECTION_RE = re.compile(r"^(\d+(?:\.\d+)*)\s+(.+?)\s*$")
TOC_RE = re.compile(r"^(\d+(?:\.\d+)*)\s+(.+?)\s+\.{2,}\s*(\d+)\s*$")


def slugify(section_no: str, title: str) -> str:
    del title
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
            no, title, page = match.groups()
            key = (no, title)
            if key in seen:
                continue
            seen.add(key)
            entries.append(
                {
                    "no": no,
                    "title": title.strip(),
                    "page": int(page),
                    "slug": slugify(no, title),
                    "level": no.count(".") + 1,
                }
            )
    return entries


def normalize_lines(lines: list[str]) -> list[str]:
    normalized: list[str] = []
    for line in lines:
        line = re.sub(r"\s+", " ", line).strip()
        line = line.replace(" / ", "/")
        if normalized and should_join(normalized[-1], line):
            normalized[-1] = f"{normalized[-1]}{line}"
        else:
            normalized.append(line)
    return normalized


def should_join(previous: str, current: str) -> bool:
    if not previous or not current:
        return False
    if SECTION_RE.match(current):
        return False
    if previous.endswith(("。", "：", ":", "）", ")", "}", "]")):
        return False
    if current.startswith(("⚫", "◼", "-", "{", "}", "[", "]")):
        return False
    if re.match(r"^(参数名称|返回格式|请求格式|接口地址|Info|retCode|exception)\b", current):
        return False
    if re.match(r"^[A-Za-z0-9_]+\s+[MO]\s+", current):
        return False
    if len(previous) < 24 and re.search(r"(格式|说明|样例|定义|列表)$", previous):
        return False
    if re.search(r"[A-Za-z0-9_\u4e00-\u9fff]$", previous) and re.search(r"^[\u4e00-\u9fff]", current):
        return True
    return False


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
                meta = toc_by_no[match.group(1)]
                current = {
                    **meta,
                    "content": [],
                    "sourcePage": page_index + 1,
                }
                continue
            if current:
                current["content"].append(line)

    if current:
        sections.append(current)

    # If an operation was missed because it starts at a page boundary, keep a TOC placeholder.
    existing = {section["no"] for section in sections}
    for entry in toc:
        if entry["no"] not in existing:
            sections.append({**entry, "sourcePage": entry["page"] + 5, "content": ["本节内容可在原 PDF 对应页面查看。"]})

    sections.sort(key=lambda item: [int(part) for part in item["no"].split(".")])
    return sections


def line_to_html(line: str) -> str:
    escaped = html.escape(line)
    if escaped.startswith("接口地址"):
        path = escaped.replace("接口地址", "", 1).strip()
        return f'<p class="endpoint"><span>接口地址</span><code>{path}</code></p>'
    if escaped in {"请求格式", "返回格式"} or escaped.endswith("格式"):
        return f"<h3>{escaped}</h3>"
    if escaped.startswith(("⚫", "◼")):
        return f"<li>{escaped[1:].strip()}</li>"
    if escaped.startswith("{") or escaped.startswith("["):
        return f"<pre><code>{escaped}</code></pre>"
    if re.match(r"^[A-Za-z0-9_]+\s+[MO]\s+", line):
        parts = escaped.split(" ", 3)
        while len(parts) < 4:
            parts.append("")
        return (
            '<div class="param-row">'
            f"<code>{parts[0]}</code><span>{parts[1]}</span><span>{parts[2]}</span><p>{parts[3]}</p>"
            "</div>"
        )
    if escaped.startswith("参数名称 必须 类型 描述信息"):
        return '<div class="param-head"><span>参数</span><span>必须</span><span>类型</span><span>描述</span></div>'
    return f"<p>{escaped}</p>"


def section_body_html(lines: list[str]) -> str:
    chunks: list[str] = []
    in_list = False
    for line in lines:
        html_line = line_to_html(line)
        is_li = html_line.startswith("<li>")
        if is_li and not in_list:
            chunks.append("<ul>")
            in_list = True
        if not is_li and in_list:
            chunks.append("</ul>")
            in_list = False
        chunks.append(html_line)
    if in_list:
        chunks.append("</ul>")
    return "\n".join(chunks)


def write_site(sections: list[dict], toc: list[dict]) -> None:
    SITE_DIR.mkdir(parents=True, exist_ok=True)

    docs = []
    for section in sections:
        if not section["content"]:
            prefix = f'{section["no"]}.'
            children = [
                entry
                for entry in toc
                if entry["no"].startswith(prefix) and entry["no"].count(".") == section["no"].count(".") + 1
            ]
            section["content"] = [f'本章包含 {len(children)} 个子章节：'] + [
                f'{child["no"]} {child["title"]}' for child in children
            ]
        text = "\n".join(section["content"])
        endpoint_match = re.search(r"接口地址\s*(/\S+)", text)
        docs.append(
            {
                "no": section["no"],
                "title": section["title"],
                "slug": section["slug"],
                "level": section["level"],
                "sourcePage": section["sourcePage"],
                "endpoint": endpoint_match.group(1) if endpoint_match else "",
                "body": section_body_html(section["content"]),
                "searchText": f'{section["no"]} {section["title"]} {text}',
            }
        )

    (SITE_DIR / "data.js").write_text(
        "window.VOS3000_DOCS = " + json.dumps(docs, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )

    (SITE_DIR / "index.html").write_text(
        """<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>VOS3000 Web 接口 Wiki</title>
  <link rel="stylesheet" href="./styles.css?v=20260513-2">
</head>
<body>
  <aside class="sidebar">
    <div class="brand">
      <strong>VOS3000</strong>
      <span>Web 接口 Wiki</span>
    </div>
    <label class="search">
      <span>搜索</span>
      <input id="searchInput" type="search" placeholder="接口、字段、章节">
    </label>
    <nav id="navList" class="nav-list" aria-label="章节目录"></nav>
  </aside>
  <main class="content">
    <header class="topbar">
      <button id="menuButton" class="icon-button" type="button" aria-label="打开目录">☰</button>
      <div>
        <p>文档版本 05 · 发布日期 2022-10-19</p>
        <h1 id="pageTitle">VOS3000 Web 接口说明书</h1>
      </div>
      <a class="pdf-link" href="../VOS3000_webinterface.pdf">原始 PDF</a>
    </header>
    <section id="summary" class="summary"></section>
    <article id="article" class="article"></article>
  </main>
  <script src="./data.js?v=20260513-2"></script>
  <script src="./app.js?v=20260513-2"></script>
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
      <span>${doc.no}</span><strong>${doc.title}</strong>
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

function renderDoc(slug = docs[0]?.slug) {
  const doc = resolveDoc(slug);
  if (!doc) return;
  document.title = `${doc.no} ${doc.title} - VOS3000 Wiki`;
  pageTitle.textContent = `${doc.no} ${doc.title}`;
  summary.innerHTML = `
    <div><span>章节</span><strong>${doc.no}</strong></div>
    <div><span>PDF 页码</span><strong>${doc.sourcePage}</strong></div>
    <div><span>接口</span><strong>${doc.endpoint || "通用说明"}</strong></div>
  `;
  article.innerHTML = `
    <h2>${doc.no} ${doc.title}</h2>
    ${doc.body}
  `;
  setActive(doc.slug);
  document.body.classList.remove("nav-open");
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
  --ink: #172026;
  --muted: #64717c;
  --line: #d9e0e5;
  --panel: #f6f8fa;
  --accent: #0f766e;
  --accent-soft: #e2f3ef;
  --code: #10202b;
  --code-bg: #eef3f5;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
  color: var(--ink);
  background: #fff;
}
.sidebar {
  position: fixed;
  inset: 0 auto 0 0;
  width: 320px;
  border-right: 1px solid var(--line);
  background: #fbfcfd;
  display: flex;
  flex-direction: column;
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
  grid-template-columns: 52px 1fr;
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
  font-weight: 700;
  font-size: 13px;
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
  margin-left: 320px;
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
  padding: 18px 44px;
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
  font-size: 24px;
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
  margin: 28px 44px 0;
  border: 1px solid var(--line);
  background: var(--line);
}
.summary div {
  background: var(--panel);
  padding: 14px 16px;
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
  max-width: 980px;
  padding: 28px 44px 80px;
}
.article h2 {
  margin: 0 0 24px;
  font-size: 32px;
  letter-spacing: 0;
}
.article h3 {
  margin: 28px 0 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--line);
  font-size: 20px;
}
.article p,
.article li {
  line-height: 1.75;
}
.article code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}
.endpoint {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: var(--panel);
}
.endpoint span {
  color: var(--muted);
  white-space: nowrap;
}
.endpoint code,
pre code {
  color: var(--code);
  overflow-wrap: anywhere;
}
pre {
  padding: 14px;
  overflow: auto;
  background: var(--code-bg);
  border-radius: 6px;
}
.param-head,
.param-row {
  display: grid;
  grid-template-columns: minmax(150px, 1.1fr) 70px minmax(110px, .8fr) minmax(220px, 2fr);
  gap: 1px;
  background: var(--line);
  border-left: 1px solid var(--line);
  border-right: 1px solid var(--line);
}
.param-head {
  margin-top: 12px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 13px;
  font-weight: 700;
}
.param-head span,
.param-row > * {
  margin: 0;
  padding: 10px 12px;
  background: #fff;
  overflow-wrap: anywhere;
}
.param-row:last-of-type {
  border-bottom: 1px solid var(--line);
}
@media (max-width: 860px) {
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
  .summary {
    grid-template-columns: 1fr;
    margin: 18px 18px 0;
  }
  .article {
    padding: 24px 18px 60px;
  }
  .param-head {
    display: none;
  }
  .param-row {
    grid-template-columns: 1fr;
    border: 1px solid var(--line);
    margin: 10px 0;
  }
}
""",
        encoding="utf-8",
    )


def main() -> None:
    reader = PdfReader(str(PDF_PATH))
    toc = extract_toc(reader)
    sections = extract_sections(reader, toc)
    write_site(sections, toc)
    print(f"Generated {len(sections)} sections in {SITE_DIR}")


if __name__ == "__main__":
    main()
