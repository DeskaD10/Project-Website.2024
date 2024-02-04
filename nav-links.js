document.addEventListener("DOMContentLoaded", function () {
  const navLinkElements = document.querySelectorAll(".nav_link");
  const windowPathname = window.location.pathname;

  navLinkElements.forEach((navLinkEl) => {
    const navLinkPathname = new URL(navLinkEl.href).pathname;
    if (
      windowPathname === navLinkPathname ||
      (windowPathname === "/" && navLinkPathname === "/index.html")
    ) {
      navLinkEl.classList.add("active");
    }
  });
});
