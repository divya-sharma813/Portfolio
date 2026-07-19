"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Eye } from "@phosphor-icons/react";

const EMAIL = "divysharma187@gmail.com";

const companies = [
  {
    name: "Flipkart",
    src: "/assets/company-1.png",
    activeSrc: "/assets/company-flipkart-active.png",
    className: "flipkart",
    summary: "Designed FireDrops, a Web3-powered brand loyalty platform that rewarded users for engaging with their favorite brands",
  },
  {
    name: "MPL",
    src: "/assets/company-2.png",
    activeSrc: "/assets/company-2.png",
    className: "mpl",
    summary: "Created the first-time user experience, referral system, and key gaming interactions for Monkey Pay, MPL's new gaming platform",
  },
  {
    name: "Galleri5",
    src: "/assets/company-gallerie-default.png",
    activeSrc: "/assets/company-gallerie-active.png",
    className: "gallerie",
    summary: "Redesigned an AI creative studio, making complex movie and microdrama creation easier for creators.",
  },
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
            force3D: true,
            transformOrigin: "50% 50%",
          });
          gsap.set(projects, {
            x: "-42vw",
            y: "108vh",
            z: 1,
            scale: 0.84,
            autoAlpha: 0.36,
            force3D: true,
          });
          gsap.set(hero, { force3D: true });
          gsap.set(ambient, { autoAlpha: 0.06 });

          const timeline = gsap.timeline({
            defaults: { ease: "power1.inOut" },
            scrollTrigger: {
              trigger: journey,
              pin: viewport,
              start: "top top",
              end: "+=220%",
              scrub: 1.05,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                journey.classList.toggle("is-settled", self.progress >= 0.94);
              },
            },
          });

          timeline
            .to(world, {
              rotationX: 5.5,
              rotationZ: -1.8,
              scale: 0.95,
              duration: 0.22,
              ease: "power1.inOut",
            })
            .to(
              ambient,
              { autoAlpha: 0.3, duration: 0.22 },
              0,
            )
            .to(world, {
              x: "42vw",
              y: "-108vh",
              rotationX: 3,
              rotationZ: 0.8,
              scale: 0.98,
              duration: 0.62,
              ease: "power1.inOut",
            })
            .to(hero, { autoAlpha: 0, duration: 0.4, ease: "power1.out" }, 0.24)
            .to(
              projects,
              { scale: 1, autoAlpha: 1, duration: 0.62, ease: "power1.inOut" },
              0.2,
            )
            .to(world, {
              x: 0,
              y: 0,
              rotationX: 0,
              rotationZ: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            })
            .to(
              projects,
              { x: 0, y: 0, scale: 1, autoAlpha: 1, duration: 0.3, ease: "power2.out" },
              "<",
            )
            .to(ambient, { autoAlpha: 0.08, duration: 0.3, ease: "power2.out" }, "<");

          return () => {
            journey.classList.remove("is-enhanced");
            journey.classList.remove("is-settled");
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
                    <Eye className="ui-icon" size={18} weight="regular" aria-hidden="true" />
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
                        <div
                          className={`company-card company-card--${company.className}`}
                          key={company.name}
                          role="group"
                          tabIndex={0}
                          aria-label={`${company.name} experience summary`}
                          aria-describedby={`${company.className}-experience`}
                        >
                          <img className={`company-logo company-logo--resting ${company.className}`} src={company.src} alt={company.name} />
                          <img className={`company-logo company-logo--active ${company.className}`} src={company.activeSrc} alt="" aria-hidden="true" />
                          <div className="company-tooltip" id={`${company.className}-experience`} role="tooltip">
                            <p className="company-tooltip-summary">{company.summary}</p>
                            <p className="company-tooltip-company">{company.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="projects journey-projects light-grid" ref={projectsRef} aria-labelledby="projects-title">
              <div className="projects-canvas">
                <div className="projects-title-box"><h2 id="projects-title">Selected Work</h2></div>

                <article className="project-card project-card--one">
                  <div className="project-visual project-visual--firedrops" aria-hidden="true">
                    <img src="/assets/project-firedrops-visual.png" alt="" />
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
                {copied
                  ? <Check className="ui-icon" size={20} weight="regular" aria-hidden="true" />
                  : <Copy className="ui-icon" size={20} weight="regular" aria-hidden="true" />}
                {copied ? "Email copied" : EMAIL}
              </button>
            </div>
            <nav className="socials" aria-label="Social links">
              <span>Linkedin <ArrowUpRight className="social-icon" size={18} weight="light" aria-hidden="true" /></span>
              <span>X <ArrowUpRight className="social-icon" size={18} weight="light" aria-hidden="true" /></span>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}
