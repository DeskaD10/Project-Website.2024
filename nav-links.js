const navLinkElements = document.querySelectorAll(".nav_link");
const windowPathname = window.location.pathname;

navLinkElements.forEach((navLinkEl) => {
  const navLinkPathname = new URL(navLinkEl.href).pathname;
  if (
    windowPathname === navLinkPathname ||
    (windowPathname === "./index.html" && navLinkPathname === "/")
  ) {
    navLinkEl.classList.add("active");
  }

  //   navLinkEl.addEventListener("click", (event) => {
  //     event.preventDefault();
  //     const targetPathname = new URL(event.currentTarget.href).pathname;
  //     window.location.href = targetPathname;
  //   });
});
