document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname.replace(/\\/g, "/");
  const currentFile = path.split("/").pop() || "index.html";
  const normalizedFile = currentFile === "assets.html" ? "downloads.html" : (currentFile === "" ? "index.html" : currentFile);

  document.querySelectorAll("[data-nav]").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const linkFile = href.split("?")[0].split("#")[0].split("/").pop() || "index.html";
    const isActive = linkFile === normalizedFile;
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  const year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
});
