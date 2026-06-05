document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname.replace(/\\/g, "/");
  const segments = path.split("/").filter(Boolean);
  const currentFile = segments.pop() || "index.html";
  const parentDir = segments.pop() || "";
  let normalizedFile = currentFile === "" ? "index.html" : currentFile;

  if (currentFile === "assets.html") {
    normalizedFile = "downloads.html";
  } else if (parentDir === "templates") {
    normalizedFile = "templates.html";
  } else if (parentDir === "workflows") {
    normalizedFile = "workflows.html";
  }

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
