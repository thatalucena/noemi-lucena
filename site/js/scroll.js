/* ==========================================================================
   By Noemi Lucena — Scroll suave (Lenis) integrado ao GSAP ScrollTrigger
   Com prefers-reduced-motion ou sem Lenis, usa o scroll nativo.
   ========================================================================== */
(() => {
  "use strict";

  const NL = (window.NL = window.NL || {});
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = document.querySelector("[data-header]");
  const headerOffset = () => (header ? header.offsetHeight : 0);

  if (!reduceMotion && typeof window.Lenis !== "undefined") {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    NL.lenis = lenis;

    if (window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    }
  }

  /* Rolagem para âncoras com compensação do header fixo */
  NL.scrollTo = (target) => {
    if (NL.lenis) {
      NL.lenis.scrollTo(target, { offset: target === 0 ? 0 : -headerOffset(), duration: 1.3 });
      return;
    }
    const top = target === 0 ? 0 : target.getBoundingClientRect().top + window.scrollY - headerOffset();
    window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
  };

  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const hash = link.getAttribute("href");
    if (hash.length < 2) return;
    const target = document.querySelector(hash);
    if (!target) return;

    event.preventDefault();
    if (NL.closeMenu) NL.closeMenu();
    if (NL.lenis) NL.lenis.start();

    const isTop = hash === "#topo";
    NL.scrollTo(isTop ? 0 : target);
    history.replaceState(null, "", isTop ? window.location.pathname : hash);

    // Leva o foco ao destino para leitores de tela e navegação por teclado
    const focusTarget = hash === "#conteudo" ? target : target.querySelector("h1, h2") || target;
    if (!focusTarget.hasAttribute("tabindex")) focusTarget.setAttribute("tabindex", "-1");
    focusTarget.focus({ preventScroll: true });
  });
})();
