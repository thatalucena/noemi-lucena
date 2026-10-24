/* ==========================================================================
   By Noemi Lucena — Interações principais
   CTAs, header, menu mobile, abas de serviços, acordeão e timeline.
   Funciona sem GSAP; quando ele está disponível, as transições ficam animadas.
   ========================================================================== */
(() => {
  "use strict";

  /* ------------------------------------------------------------------
     CONFIGURAÇÃO
     Número do WhatsApp comercial (DDI + DDD + número, só dígitos).
     Os botões gerais "Solicitar proposta" levam à seção #contratar; os
     links com data-cta (cards de serviço e de contratação, rodapé) abrem
     o WhatsApp com a mensagem definida no próprio atributo.
     ------------------------------------------------------------------ */
  const CONFIG = {
    whatsappNumber: "5585998021639",
    instagramUrl: "https://www.instagram.com/by.noemilucena/",
  };

  const NL = (window.NL = window.NL || {});
  NL.config = CONFIG;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canAnimate = () => !reduceMotion && typeof window.gsap !== "undefined";
  const refresh = () => NL.refresh && NL.refresh();

  /* ---------- CTAs: WhatsApp com mensagem pré-preenchida ---------- */
  function setupCtas() {
    const digits = CONFIG.whatsappNumber.replace(/\D/g, "");
    if (!digits) return;

    document.querySelectorAll("[data-cta]").forEach((link) => {
      link.href = `https://wa.me/${digits}?text=${encodeURIComponent(link.dataset.cta)}`;
    });
  }

  /* ---------- Header: borda ao rolar ---------- */
  function setupHeader() {
    const header = document.querySelector("[data-header]");
    if (!header) return;

    let ticking = false;
    const update = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }, { passive: true });
    update();
  }

  /* ---------- Link ativo da navegação ---------- */
  function setupActiveNav() {
    const links = [...document.querySelectorAll(".site-nav__list a")];
    if (!links.length || !("IntersectionObserver" in window)) return;

    const byId = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        // Seções sem link (hero, CTA final) limpam o estado ativo
        links.forEach((a) => a.removeAttribute("aria-current"));
        const link = byId.get(entry.target.id);
        if (link) link.setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    document.querySelectorAll("main > section").forEach((section) => observer.observe(section));
  }

  /* ---------- Menu mobile ---------- */
  function setupMenu() {
    const toggle = document.querySelector("[data-menu-toggle]");
    const menu = document.querySelector("[data-mobile-menu]");
    if (!toggle || !menu) return;

    const label = toggle.querySelector(".menu-toggle__label");
    const focusables = () => [toggle, ...menu.querySelectorAll("a, button")];
    let isOpen = false;

    const open = () => {
      isOpen = true;
      menu.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Fechar menu");
      if (label) label.textContent = "Fechar";
      document.body.classList.add("menu-open");
      if (NL.lenis) NL.lenis.stop();

      if (canAnimate()) {
        // Só opacidade: o menu precisa estar "visible" para receber foco imediatamente
        gsap.set(menu, { visibility: "visible" });
        gsap.fromTo(menu, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
        gsap.fromTo(
          menu.querySelectorAll(".mobile-menu__list li, .mobile-menu__footer"),
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: "expo.out", delay: 0.05 }
        );
      }
      const first = menu.querySelector("a");
      if (first) first.focus({ preventScroll: true });
    };

    const close = ({ returnFocus = true } = {}) => {
      if (!isOpen) return;
      isOpen = false;
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menu");
      if (label) label.textContent = "Menu";
      document.body.classList.remove("menu-open");
      if (NL.lenis) NL.lenis.start();

      const finish = () => { menu.hidden = true; };
      if (canAnimate()) {
        gsap.to(menu, { opacity: 0, duration: 0.2, ease: "power2.in", onComplete: finish });
      } else {
        finish();
      }
      if (returnFocus) toggle.focus({ preventScroll: true });
    };

    NL.closeMenu = () => close({ returnFocus: false });
    toggle.setAttribute("aria-label", "Abrir menu");
    toggle.addEventListener("click", () => (isOpen ? close() : open()));

    document.addEventListener("keydown", (event) => {
      if (!isOpen) return;
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key === "Tab") {
        const items = focusables();
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });

    window.matchMedia("(min-width: 1024px)").addEventListener("change", (mq) => {
      if (mq.matches) close({ returnFocus: false });
    });
  }

  /* ---------- Serviços: abas acessíveis (WAI-ARIA tabs) ---------- */
  function setupTabs() {
    document.querySelectorAll("[data-tabs]").forEach((root) => {
      const list = root.querySelector('[role="tablist"]');
      const tabs = [...root.querySelectorAll('[role="tab"]')];
      if (!list || !tabs.length) return;

      const panelOf = (tab) => document.getElementById(tab.getAttribute("aria-controls"));
      const vertical = () => window.matchMedia("(min-width: 1024px)").matches;

      const activate = (tab, { focus = false } = {}) => {
        if (focus) tab.focus({ preventScroll: true });
        const current = tabs.find((t) => t.classList.contains("is-active"));
        if (current === tab) return;

        tabs.forEach((t) => {
          const selected = t === tab;
          t.classList.toggle("is-active", selected);
          t.setAttribute("aria-selected", String(selected));
          t.tabIndex = selected ? 0 : -1;
          panelOf(t).classList.toggle("is-active", selected);
        });
        list.setAttribute("aria-orientation", vertical() ? "vertical" : "horizontal");

        // Mantém a aba visível no trilho horizontal (tablet/mobile) sem rolar a página
        if (!vertical()) {
          const left = tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2;
          list.scrollTo({ left, behavior: reduceMotion ? "auto" : "smooth" });
        }

        const panel = panelOf(tab);
        if (canAnimate()) {
          gsap.fromTo(panel.children, { autoAlpha: 0, y: 14 }, {
            autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.04, ease: "expo.out", clearProps: "transform,opacity,visibility",
          });
          const media = panel.querySelector(".svc__media img");
          if (media) gsap.fromTo(media, { scale: 1.06 }, { scale: 1, duration: 1, ease: "expo.out", clearProps: "transform" });
        }
        refresh();
      };

      tabs.forEach((tab) => tab.addEventListener("click", () => activate(tab)));

      list.addEventListener("keydown", (event) => {
        const index = tabs.indexOf(document.activeElement);
        if (index < 0) return;
        const keys = {
          ArrowDown: index + 1, ArrowRight: index + 1,
          ArrowUp: index - 1, ArrowLeft: index - 1,
          Home: 0, End: tabs.length - 1,
        };
        if (!(event.key in keys)) return;
        event.preventDefault();
        const next = tabs[(keys[event.key] + tabs.length) % tabs.length];
        activate(next, { focus: true });
      });

      list.setAttribute("aria-orientation", vertical() ? "vertical" : "horizontal");
    });
  }

  /* ---------- FAQ: acordeão ---------- */
  function setupAccordion() {
    document.querySelectorAll("[data-accordion] .acc__trigger").forEach((trigger) => {
      const panel = document.getElementById(trigger.getAttribute("aria-controls"));
      if (!panel) return;

      trigger.addEventListener("click", () => {
        const expanded = trigger.getAttribute("aria-expanded") === "true";
        trigger.setAttribute("aria-expanded", String(!expanded));

        if (!canAnimate()) {
          panel.hidden = expanded;
          refresh();
          return;
        }

        gsap.killTweensOf(panel);
        if (expanded) {
          gsap.to(panel, {
            height: 0, duration: 0.35, ease: "power3.inOut",
            onComplete: () => { panel.hidden = true; gsap.set(panel, { clearProps: "height" }); refresh(); },
          });
        } else {
          panel.hidden = false;
          gsap.fromTo(panel, { height: 0 }, {
            height: "auto", duration: 0.45, ease: "power3.out",
            onComplete: () => { gsap.set(panel, { clearProps: "height" }); refresh(); },
          });
          gsap.fromTo(panel.firstElementChild, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.4, delay: 0.08, ease: "power2.out", clearProps: "all" });
        }
      });
    });
  }

  /* ---------- Método: curva que conecta os círculos numerados ---------- */
  function setupTimelinePath() {
    const root = document.querySelector("[data-timeline]");
    if (!root) return;
    const svg = root.querySelector(".timeline__path");
    const path = root.querySelector("[data-timeline-path]");
    const nums = [...root.querySelectorAll(".step__num")];

    const build = () => {
      const box = root.getBoundingClientRect();
      if (!box.width) return;
      svg.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`);

      const points = nums.map((n) => {
        const r = n.getBoundingClientRect();
        return { x: r.left - box.left + r.width / 2, y: r.top - box.top + r.height / 2 };
      });

      // Curvas Bézier que oscilam levemente para os lados, como na referência
      const sway = Math.max(14, nums[0].offsetWidth * 0.32);
      let d = `M ${points[0].x} ${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        const a = points[i - 1];
        const b = points[i];
        const dir = i % 2 ? 1 : -1;
        const mid = (b.y - a.y) / 2;
        d += ` C ${a.x + sway * dir} ${a.y + mid}, ${b.x + sway * dir} ${b.y - mid}, ${b.x} ${b.y}`;
      }
      path.setAttribute("d", d);
      NL.timelinePathLength = path.getTotalLength();
      if (NL.onTimelineBuilt) NL.onTimelineBuilt();
    };

    NL.buildTimelinePath = build;
    build();
    if ("ResizeObserver" in window) new ResizeObserver(build).observe(root);
    document.fonts && document.fonts.ready.then(build);
  }

  /* ---------- Ano no rodapé ---------- */
  function setupYear() {
    const el = document.querySelector("[data-year]");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  setupCtas();
  setupHeader();
  setupActiveNav();
  setupMenu();
  setupTabs();
  setupAccordion();
  setupTimelinePath();
  setupYear();
})();
