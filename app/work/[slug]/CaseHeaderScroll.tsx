"use client";

import { useEffect } from "react";

type CaseHeaderScrollProps = {
  pageSelector?: string;
  scrub?: number | boolean;
};

export default function CaseHeaderScroll({
  pageSelector = ".firedrops-page",
  scrub = 1,
}: CaseHeaderScrollProps) {
  useEffect(() => {
    let cancelled = false;
    let cleanup = () => {};

    async function setupCaseHeaderScroll() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const header = document.querySelector<HTMLElement>("[data-case-header-scroll]");
      const background = header?.querySelector<HTMLElement>(".case-hero-bg");
      const panel = header?.querySelector<HTMLElement>(".case-hero-panel");
      const surface = panel?.querySelector<HTMLElement>(".case-hero-panel-surface");
      const content = panel?.querySelector<HTMLElement>(".case-hero-panel-content");
      const page = document.querySelector<HTMLElement>(pageSelector);
      if (!header || !background || !panel || !surface || !content || !page) return;

      const createTimeline = () => {
        const surfaceBleed = 2;
        const initialBackgroundScale = window.matchMedia("(max-width: 768px)").matches ? 1.04 : 1.08;

        header.classList.add("is-scroll-enhanced");
        page.classList.add("is-header-scroll-enhanced");

        gsap.set(background, {
          scale: initialBackgroundScale,
          yPercent: 0,
          force3D: true,
          transformOrigin: "50% 50%",
        });
        gsap.set(surface, {
          x: 0,
          y: 0,
          scaleX: 1,
          scaleY: 1,
          force3D: true,
          transformOrigin: "0 0",
        });
        gsap.set(content, { y: 0, force3D: true });

        const timeline = gsap.timeline({
          defaults: { overwrite: "auto" },
          scrollTrigger: {
            trigger: header,
            pin: true,
            pinSpacing: true,
            start: "top top",
            end: "+=72%",
            scrub,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .to(
            background,
            {
              scale: 1.02,
              yPercent: 7,
              ease: "power2.out",
              force3D: true,
              duration: 1,
            },
            0,
          )
          .to(
            surface,
            {
              x: () => -(header.clientWidth - panel.offsetWidth) / 2 - surfaceBleed,
              y: () => -panel.offsetTop - surfaceBleed,
              scaleX: () => (header.clientWidth + surfaceBleed * 2) / panel.offsetWidth,
              scaleY: () => (header.clientHeight + surfaceBleed * 2) / panel.offsetHeight,
              ease: "power2.inOut",
              force3D: true,
              duration: 0.72,
            },
            0,
          )
          .to(
            content,
            {
              y: () => {
                const contentCenter = panel.offsetTop + content.offsetTop + content.offsetHeight / 2;
                return header.clientHeight / 2 - contentCenter;
              },
              ease: "power2.inOut",
              force3D: true,
              duration: 0.72,
            },
            0,
          );

        return () => {
          header.classList.remove("is-scroll-enhanced");
          page.classList.remove("is-header-scroll-enhanced");
          timeline.scrollTrigger?.kill();
          timeline.kill();
        };
      };

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      cleanup = createTimeline();
      ScrollTrigger.refresh();
    }

    setupCaseHeaderScroll();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [pageSelector, scrub]);

  return null;
}
