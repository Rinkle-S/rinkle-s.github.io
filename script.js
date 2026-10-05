/* ------------------------------------------------------------------
   Rinkle Sebastian - portfolio behaviour
   Theme toggle · mobile nav · sticky-nav shadow · reveal on scroll
   ------------------------------------------------------------------ */
(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Footer year ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Theme toggle ----------
     Light is always the default, regardless of the visitor's system
     setting. Dark only ever turns on when they click the toggle, and
     that choice is remembered in localStorage. */
  function currentTheme() {
    return root.dataset.theme === "dark" ? "dark" : "light";
  }

  var themeMeta = document.querySelector('meta[name="theme-color"]');

  function syncThemeMeta(theme) {
    if (themeMeta) themeMeta.setAttribute("content", theme === "dark" ? "#161411" : "#fbf8f3");
  }

  var toggle = document.getElementById("theme-toggle");
  syncThemeMeta(currentTheme());
  if (toggle) {
    toggle.setAttribute("aria-pressed", String(currentTheme() === "dark"));
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      toggle.setAttribute("aria-pressed", String(next === "dark"));
      syncThemeMeta(next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* ---------- Mobile nav ---------- */
  var burger = document.getElementById("burger");
  var links = document.getElementById("nav-links");

  function closeMenu() {
    if (!links) return;
    links.classList.remove("is-open");
    if (burger) {
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Open menu");
    }
  }

  if (burger && links) {
    burger.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = links.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });
    document.addEventListener("click", function (e) {
      if (links.classList.contains("is-open") && !e.target.closest(".nav__inner")) closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 720) closeMenu();
    });
  }

  /* ---------- Sticky-nav shadow ---------- */
  var nav = document.getElementById("nav");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("is-stuck", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Lightbox: click a .lightbox-trigger image to view full screen ---------- */
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  if (lightbox && lightboxImg) {
    var closeLightbox = function () {
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
    };
    document.querySelectorAll(".lightbox-trigger").forEach(function (img) {
      img.addEventListener("click", function () {
        lightboxImg.src = img.currentSrc || img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add("is-open");
        document.body.style.overflow = "hidden";
      });
    });
    lightbox.addEventListener("click", closeLightbox);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealables = document.querySelectorAll(".reveal");
  if (!revealables.length) return;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealables.forEach(function (el) { el.classList.add("is-in"); });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
  );
  revealables.forEach(function (el) { io.observe(el); });
})();
