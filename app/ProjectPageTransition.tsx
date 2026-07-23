"use client";

import { type MouseEvent as ReactMouseEvent, type ReactNode, useEffect, useRef, useState } from "react";

const TRANSITION_DURATION = 950;
const LOAD_FALLBACK_DELAY = 1200;

type TransitionState = {
  href: string;
  entering: boolean;
};

export default function ProjectPageTransition({ children }: { children: ReactNode }) {
  const [transition, setTransition] = useState<TransitionState | null>(null);
  const activeRef = useRef(false);
  const fallbackTimerRef = useRef<number | null>(null);
  const navigationTimerRef = useRef<number | null>(null);

  const handleClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      activeRef.current
    ) return;

    const eventTarget = event.target as Node;
    const targetElement = eventTarget instanceof Element ? eventTarget : eventTarget.parentElement;
    const target = targetElement?.closest<HTMLAnchorElement>('a[href^="/work/"]') ?? null;

    if (!target || target.target === "_blank" || target.hasAttribute("download")) return;

    const destination = new URL(target.href, window.location.href);
    if (destination.origin !== window.location.origin || destination.pathname === window.location.pathname) return;

    event.preventDefault();
    event.stopPropagation();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.location.assign(destination.href);
      return;
    }

    activeRef.current = true;
    setTransition({ href: destination.href, entering: false });

    fallbackTimerRef.current = window.setTimeout(() => {
      setTransition((current) => current ? { ...current, entering: true } : current);
    }, LOAD_FALLBACK_DELAY);
  };

  useEffect(() => {
    if (!transition?.entering) return;

    document.body.classList.add("is-project-page-transitioning");

    navigationTimerRef.current = window.setTimeout(() => {
      window.location.assign(transition.href);
    }, TRANSITION_DURATION);

    return () => {
      if (navigationTimerRef.current) window.clearTimeout(navigationTimerRef.current);
      document.body.classList.remove("is-project-page-transitioning");
    };
  }, [transition]);

  useEffect(() => () => {
    if (fallbackTimerRef.current) window.clearTimeout(fallbackTimerRef.current);
    if (navigationTimerRef.current) window.clearTimeout(navigationTimerRef.current);
    document.body.classList.remove("is-project-page-transitioning");
  }, []);

  const beginEntrance = () => {
    if (fallbackTimerRef.current) window.clearTimeout(fallbackTimerRef.current);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setTransition((current) => current ? { ...current, entering: true } : current);
      });
    });
  };

  return (
    <>
      <div className="project-page-transition-content" onClickCapture={handleClick}>
        {children}
      </div>
      {transition && (
        <div className={`project-page-transition${transition.entering ? " is-entering" : ""}`} aria-hidden="true">
          <div className="project-page-transition__surface">
            <iframe
              className="project-page-transition__frame"
              src={transition.href}
              title="Opening project"
              tabIndex={-1}
              onLoad={beginEntrance}
            />
          </div>
        </div>
      )}
    </>
  );
}
