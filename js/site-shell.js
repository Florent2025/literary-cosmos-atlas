/* Site shell: reduced-motion setting, scroll-spy navigation, hero pause, offline cache. */
(() => {
  function syncMotionButton() {
    const button = document.querySelector("#motionToggle");
    if (!button) return;
    const reduced = LC.reducedMotion();
    button.setAttribute("aria-pressed", String(reduced));
    button.classList.toggle("is-on", reduced);
  }

  function toggleMotion() {
    const next = !LC.reducedMotion();
    LC.setReducedMotion(next);
    syncMotionButton();
    LC.toast(t(next ? "toastMotionOn" : "toastMotionOff"));
  }

  function scrollSpy() {
    const links = Array.from(document.querySelectorAll(".nav-links a[href^='#']"));
    const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
    if (!("IntersectionObserver" in window) || !sections.length) return;
    const visible = new Map();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => visible.set(entry.target.id, entry.intersectionRatio));
      let best = null;
      visible.forEach((ratio, id) => {
        if (ratio > 0 && (!best || ratio > visible.get(best))) best = id;
      });
      links.forEach((link) => {
        const current = best && link.getAttribute("href") === `#${best}`;
        link.classList.toggle("is-current", Boolean(current));
        if (current) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }, { threshold: [0, 0.15, 0.35, 0.6] });
    sections.forEach((section) => observer.observe(section));
  }

  // Pause the hero WebGL scene while it is off screen.
  function heroPause() {
    const hero = document.querySelector("#hero");
    if (!hero || !("IntersectionObserver" in window)) return;
    new IntersectionObserver((entries) => {
      const onScreen = entries.some((entry) => entry.isIntersecting);
      document.body.classList.toggle("lc-hero-offscreen", !onScreen);
    }).observe(hero);
  }

  function registerWorker() {
    if (!("serviceWorker" in navigator) || location.protocol === "file:" || ["localhost", "127.0.0.1"].includes(location.hostname)) return;
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
  }

  function init() {
    document.querySelector("#motionToggle")?.addEventListener("click", toggleMotion);
    document.querySelector("#footerYear")?.replaceChildren(String(new Date().getFullYear()));
    syncMotionButton();
    scrollSpy();
    heroPause();
    registerWorker();
  }

  window.LCShell = { toggleMotion };
  document.addEventListener("DOMContentLoaded", init);
})();
