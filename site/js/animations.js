/* ==========================================================================
   By Noemi Lucena — Animações (GSAP + ScrollTrigger)
   Só roda quando html.has-anim está ativo. Se o GSAP falhar, o conteúdo
   permanece visível (o estado oculto inicial depende dessa classe).
   ========================================================================== */
(() => {
  "use strict";

  const root = document.documentElement;
  if (!root.classList.contains("has-anim")) return;
  if (typeof window.gsap === "undefined" || typeof window.ScrollTrigger === "undefined") {
    root.classList.remove("has-anim");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  const NL = (window.NL = window.NL || {});
  NL.refresh = () => ScrollTrigger.refresh();

  const EASE = "expo.out";

  /* Ao terminar, marca o elemento como revelado e devolve o controle ao CSS */
  const settle = (targets) => () => {
    gsap.utils.toArray(targets).forEach((el) => el.classList.add("is-in"));
    gsap.set(targets, { clearProps: "opacity,transform" });
  };

  /* Executa uma vez quando o elemento entra na viewport (ou já foi ultrapassado) */
  function onceInView(el, start, fn) {
    let done = false;
    const st = ScrollTrigger.create({
      trigger: el,
      start,
      end: "max",
      onEnter: run,
      onEnterBack: run,
      onLeave: run,
    });
    function run() {
      if (done) return;
      done = true;
      fn();
      st.kill();
    }
  }

  /* Estado inicial controlado pelo GSAP (substitui o transform do CSS) */
  const lineInners = gsap.utils.toArray("[data-lines] .line__inner");
  gsap.set(lineInners, { y: 0, yPercent: 110 });

  /* ---------- Marquees: faixa de mídia e faixa de serviços ---------- */
  function setupMarquee(container, seconds) {
    const track = container.querySelector("[data-marquee-track]");
    if (!track) return;

    // Duplica o conteúdo para o loop contínuo; a cópia é invisível para leitores de tela
    [...track.children].forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.querySelectorAll("img").forEach((img) => {
        img.alt = "";
        img.loading = "lazy";
        img.removeAttribute("fetchpriority");
      });
      track.appendChild(clone);
    });

    const tween = gsap.to(track, { xPercent: -50, duration: seconds, ease: "none", repeat: -1 });

    // Acelera levemente com a velocidade do scroll e pausa fora da tela
    let boost = gsap.quickTo(tween, "timeScale", { duration: 0.6, ease: "power2.out" });
    ScrollTrigger.create({
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      onToggle: (self) => (self.isActive ? tween.play() : tween.pause()),
      onUpdate: (self) => {
        const v = Math.min(Math.abs(self.getVelocity()) / 400, 3);
        boost(1 + v);
        clearTimeout(container._nlIdle);
        container._nlIdle = setTimeout(() => boost(1), 120);
      },
    });
  }
  const reel = document.querySelector('[data-marquee="reel"]');
  const ticker = document.querySelector('[data-marquee="ticker"]');
  if (reel) setupMarquee(reel, 70);
  if (ticker) setupMarquee(ticker, 45);

  /* ---------- HERO: entrada ---------- */
  const hero = document.querySelector(".hero");
  const heroTl = gsap.timeline({ defaults: { ease: EASE } });
  heroTl
    .to(hero.querySelectorAll(".hero__title .line__inner"), { yPercent: 0, duration: 1.3, stagger: 0.12 }, 0)
    .to(hero.querySelector(".eyebrow"), { opacity: 1, y: 0, duration: 0.9, onComplete: settle(hero.querySelector(".eyebrow")) }, 0.15)
    .to(hero.querySelector(".hero__lead"), { opacity: 1, y: 0, duration: 1, onComplete: settle(hero.querySelector(".hero__lead")) }, "-=0.9")
    .to(hero.querySelector(".hero__actions"), { opacity: 1, y: 0, duration: 1, onComplete: settle(hero.querySelector(".hero__actions")) }, "-=0.85")
    .fromTo(hero.querySelectorAll(".reel__card"),
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.06, clearProps: "transform" }, "-=0.8");

  /* ---------- Títulos de seção: linhas sobem ---------- */
  gsap.utils.toArray("[data-lines]").forEach((heading) => {
    if (heading.closest(".hero")) return;
    onceInView(heading, "top 85%", () => {
      gsap.to(heading.querySelectorAll(".line__inner"), { yPercent: 0, duration: 1.2, stagger: 0.1, ease: EASE });
    });
  });

  /* ---------- Reveal simples ---------- */
  gsap.utils.toArray("[data-reveal]").forEach((el) => {
    if (el.closest(".hero")) return;
    onceInView(el, "top 88%", () => {
      gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: EASE, onComplete: settle(el) });
    });
  });

  /* ---------- Grupos escalonados ---------- */
  gsap.utils.toArray("[data-stagger]").forEach((group) => {
    onceInView(group, "top 85%", () => {
      gsap.to(group.children, { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: EASE, onComplete: settle(group.children) });
    });
  });

  /* ---------- Cards de pilares: ponto magenta pulsa ao entrar ---------- */
  gsap.utils.toArray(".pillar__dot").forEach((dot) => {
    onceInView(dot, "top 90%", () => {
      gsap.fromTo(dot, { scale: 0 }, { scale: 1, duration: 0.8, ease: "back.out(3)", delay: 0.4 });
    });
  });

  /* ---------- Método: linha desenhada com o scroll e etapas ativas ---------- */
  const timeline = document.querySelector("[data-timeline]");
  if (timeline) {
    const path = timeline.querySelector("[data-timeline-path]");
    const steps = [...timeline.querySelectorAll(".step")];

    const prepare = () => {
      const length = NL.timelinePathLength || path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length * (1 - (timelineST ? timelineST.progress : 0)) });
    };

    let timelineST = null;
    timelineST = ScrollTrigger.create({
      trigger: timeline,
      start: "top 70%",
      end: "bottom 55%",
      scrub: 0.6,
      onUpdate: (self) => {
        const length = NL.timelinePathLength || path.getTotalLength();
        gsap.set(path, { strokeDashoffset: length * (1 - self.progress) });
        steps.forEach((step, i) => {
          step.classList.toggle("is-active", self.progress >= i / Math.max(1, steps.length - 1) - 0.02);
        });
      },
    });

    NL.onTimelineBuilt = prepare;
    prepare();
  }

  /* ---------- Parallax suave na imagem do método ---------- */
  gsap.utils.toArray("[data-parallax]").forEach((img) => {
    gsap.fromTo(img, { yPercent: -5 }, {
      yPercent: 5,
      ease: "none",
      scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true },
    });
  });

  /* ---------- CTA final: linha de performance desenhada ---------- */
  const growth = document.querySelector(".cta__growth");
  if (growth) {
    onceInView(growth.closest(".cta__card"), "top 75%", () => {
      gsap.fromTo(growth, { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 1.8, ease: "power3.inOut", delay: 0.3 });
    });
  }

  /* Recalcula posições quando fontes e imagens terminam de carregar */
  window.addEventListener("load", () => ScrollTrigger.refresh());
  if (document.fonts) document.fonts.ready.then(() => ScrollTrigger.refresh());
})();
