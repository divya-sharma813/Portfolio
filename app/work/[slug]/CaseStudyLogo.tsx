"use client";

import { useEffect, useRef, useState } from "react";

export default function CaseStudyLogo() {
  const [isHidden, setIsHidden] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let frame = 0;

    const updateNavigation = () => {
      frame = 0;
      const currentScrollY = Math.max(window.scrollY, 0);
      const movement = currentScrollY - lastScrollY.current;
      const hero = document.querySelector<HTMLElement>(".case-hero");

      if (hero) {
        const expandingSurface = hero.querySelector<HTMLElement>(".case-hero-panel-surface");
        setIsOverHero(
          expandingSurface
            ? expandingSurface.getBoundingClientRect().top > 72
            : hero.getBoundingClientRect().bottom > 72,
        );
      }

      if (currentScrollY <= 16) {
        setIsHidden(false);
      } else if (movement > 1 && currentScrollY > 88) {
        setIsHidden(true);
      } else if (movement < -1) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateNavigation);
    };

    lastScrollY.current = Math.max(window.scrollY, 0);
    updateNavigation();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`case-nav${isOverHero ? " is-over-hero" : ""}${isHidden ? " is-hidden" : ""}`} aria-label="Case study navigation">
      <a className="case-wordmark" href="/" aria-label="Divya Sharma, home">
        Divya
      </a>
    </nav>
  );
}
