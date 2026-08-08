// ICT — shared site behavior (mobile nav, header shadow on scroll)
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.querySelector(".mobile-nav");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      mobileNav.classList.toggle("is-open");
      var expanded = mobileNav.classList.contains("is-open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
      document.body.style.overflow = expanded ? "hidden" : "";
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("is-open");
        document.body.style.overflow = "";
      });
    });
  }

  // Remember last chosen language across visits (site root index.html uses this)
  document.querySelectorAll("[data-lang-link]").forEach(function (link) {
    link.addEventListener("click", function () {
      try {
        localStorage.setItem("ict-lang", link.getAttribute("data-lang-link"));
      } catch (e) {}
    });
  });
});
