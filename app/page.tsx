"use client";

import { useEffect, useRef, useState } from "react";

const EMAIL = "divysharma187@gmail.com";

const companies = [
  { name: "Flipkart", src: "/assets/company-1.png", className: "flipkart" },
  { name: "MPL", src: "/assets/company-2.png", className: "mpl" },
  { name: "Gallerie5", src: "/assets/company-3.png", className: "gallerie" },
];

export default function Home() {
  const [copied, setCopied] = useState(false);
  const journeyRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const ambientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let cleanup = () => {};

    async function setupImmersiveScroll() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const journey = journeyRef.current;
      const viewport = viewportRef.current;
      const world = worldRef.current;
      const hero = heroRef.current;
      const projects = projectsRef.current;
      const ambient = ambientRef.current;
      if (!journey || !viewport || !world || !hero || !projects || !ambient) return;

      const media = gsap.matchMedia();
      media.add(
        "(min-width: 901px) and (prefers-reduced-motion: no-preference)",
        () => {
          journey.classList.add("is-enhanced");

          gsap.set(world, {
            x: 0,
            y: 0,
            scale: 1,
            rotationX: 0,
            rotationZ: 0,
            transformOrigin: "50% 50%",
          });
          gsap.set(projects, {
            x: "-42vw",
            y: "108vh",
            z: 1,
            scale: 0.78,
            autoAlpha: 0.42,
          });
          gsap.set(ambient, { autoAlpha: 0.08, xPercent: 0, yPercent: 0 });

          const timeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: journey,
              pin: viewport,
              start: "top top",
              end: "+=180%",
              scrub: 0.6,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          timeline
            .to(world, {
              rotationX: 7,
              rotationZ: -2.5,
              scale: 0.92,
              duration: 0.18,
              ease: "power1.inOut",
            })
            .to(
              ambient,
              { autoAlpha: 0.42, xPercent: 5, yPercent: -3, duration: 0.18 },
              0,
            )
            .to(world, {
              x: "42vw",
              y: "-108vh",
              rotationX: 4,
              rotationZ: 1.2,
              scale: 0.96,
              duration: 0.56,
            })
            .to(hero, { autoAlpha: 0.12, duration: 0.35, ease: "power1.out" }, 0.22)
            .to(
              projects,
              { scale: 1, autoAlpha: 1, duration: 0.56 },
              0.18,
            )
            .to(world, {
              rotationX: 0,
              rotationZ: 0,
              scale: 1,
              duration: 0.26,
              ease: "power2.out",
            })
            .to(ambient, { autoAlpha: 0.12, duration: 0.26 }, "<");

          return () => {
            journey.classList.remove("is-enhanced");
          };
        },
      );

      cleanup = () => media.revert();
    }

    setupImmersiveScroll();
    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  async function copyEmail() {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <main>
      <section className="immersive-journey" ref={journeyRef} aria-label="Introduction and selected projects">
        <div className="journey-viewport" ref={viewportRef}>
          <div className="journey-ambient" ref={ambientRef} aria-hidden="true" />
          <div className="notebook-world" ref={worldRef}>
            <section className="hero journey-hero light-grid" ref={heroRef} id="top" aria-labelledby="intro-title">
              <div className="hero-canvas">
                <header className="site-header">
                  <a className="wordmark" href="#top" aria-label="Divya Sharma, home">Divya</a>
                  <a className="resume-link" href={`mailto:${EMAIL}?subject=Resume request`} aria-label="Request Divya Sharma's resume">
                    <span className="eye-icon" aria-hidden="true" />
                    See Resume
                  </a>
                </header>

                <div className="hero-content">
                  <div className="intro-copy">
                    <h1 id="intro-title">Hi&nbsp; I’m Divya Sharma</h1>
                    <p>
                      I’m a Product Designer with 3+ years of experience, designing and launching products across e-commerce, gaming, and AI.
                      <br />
                      I enjoy shaping products from idea, to crafting polished interfaces and thoughtful interactions that make complex experiences feel intuitive
                    </p>
                  </div>

                  <div className="companies" aria-labelledby="companies-title">
                    <p id="companies-title">Previously Worked at</p>
                    <div className="company-tray">
                      {companies.map((company) => (
                        <div className="company-card" key={company.name}>
                          <img className={company.className} src={company.src} alt={company.name} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="projects journey-projects light-grid" ref={projectsRef} aria-labelledby="projects-title">
              <div className="projects-canvas">
                <div className="projects-title-box"><h2 id="projects-title">Selected Projects</h2></div>

                <article className="project-card project-card--one">
                  <div className="project-visual project-visual--firedrops" aria-hidden="true">
                    <img src="/assets/projects-reference.png" alt="" />
                  </div>
                  <div className="project-copy">
                    <h3>Redesigning FireDrops, from a simple</h3>
                    <p>Redesigning FireDrops, from a simple listing of brand quests to a more scalable&nbsp; platform. Redesigning FireDrops, from a simple listing of brand quests to a more scalable&nbsp; platform</p>
                  </div>
                </article>

                <div className="section-rail" aria-hidden="true"><span /></div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="projects-tail light-grid" aria-label="More selected projects">
        <div className="projects-tail-canvas">
          <article className="project-card project-card--two">
            <div className="project-visual project-visual--monkey" aria-hidden="true">
              <img src="/assets/projects-reference.png" alt="" />
            </div>
            <div className="project-copy">
              <h3>Designing Referral Experience</h3>
              <p>Redesigning FireDrops, from a simple listing of brand quests to a more scalable&nbsp; platform. Redesigning FireDrops, from a simple listing of brand quests to a more scalable&nbsp; platform</p>
            </div>
          </article>
        </div>
      </section>

      <section className="snippets light-grid" aria-labelledby="snippets-title">
        <div className="snippets-canvas">
          <div className="snippets-title-box"><h2 id="snippets-title">Some Snippets</h2></div>
          <div className="snippet-columns" aria-label="Selected interface design snippets">
            <div className="snippet-crop snippet-crop--one">
              <img src="/assets/snippets-reference.png" alt="Commerce, itinerary and travel interface explorations" />
            </div>
            <div className="snippet-crop snippet-crop--two">
              <img src="/assets/snippets-reference.png" alt="Reward box and audio learning interface explorations" />
            </div>
            <div className="snippet-crop snippet-crop--three">
              <img src="/assets/snippets-reference.png" alt="Referral and campaign interface explorations" />
            </div>
          </div>
        </div>
      </section>

      <footer className="contact dark-grid" id="contact">
        <div className="contact-canvas">
          <div className="contact-card">
            <h2>Get in touch</h2>
            <p className="contact-statement">
              I enjoy digging into how products work, from business goals to user behavior.<br />
              I&apos;m still early in my career, and that&apos;s what excites me the most. There are countless products,<br />
              technologies, and ideas I haven&apos;t explored yet and I hope the next team I join pushes me to<br />
              think bigger, build better, and keep learning.
            </p>
            <div className="contact-actions">
              <div className="availability"><span aria-hidden="true" />Open for work</div>
              <button className="email-button" type="button" onClick={copyEmail}>
                <span className="copy-icon" aria-hidden="true" />
                {copied ? "Email copied" : EMAIL}
              </button>
            </div>
            <nav className="socials" aria-label="Social links">
              <span>Linkedin <b aria-hidden="true">↗</b></span>
              <span>X <b aria-hidden="true">↗</b></span>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}
