(function () {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const toggle = header.querySelector(".nav-toggle");
  const nav = header.querySelector("#paanav");
  const desktopNav = window.matchMedia("(min-width: 721px)");

  const setMenuOpen = (open) => {
    header.classList.toggle("is-open", open);
    if (!toggle) return;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Sulje valikko" : "Avaa valikko");
  };

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      setMenuOpen(!header.classList.contains("is-open"));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        const href = link.getAttribute("href") || "";
        if (href.startsWith("#") || href.includes(".html#")) {
          setMenuOpen(false);
        }
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape" || !header.classList.contains("is-open")) return;
      setMenuOpen(false);
      toggle.focus();
    });

    desktopNav.addEventListener("change", (event) => {
      if (event.matches) setMenuOpen(false);
    });
  }

  if (reduce) {
    document.documentElement.style.scrollBehavior = "auto";
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href");
      if (!id || !/^#[A-Za-z][\w-]*$/.test(id)) return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      if (typeof target.focus === "function") {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    });
  });
})();
