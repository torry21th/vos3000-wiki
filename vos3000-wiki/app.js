const docs = window.VOS3000_DOCS || [];
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
