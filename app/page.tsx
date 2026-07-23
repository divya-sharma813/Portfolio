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

function SnippetsCanvas({ titleId, ariaHidden = false }: { titleId?: string; ariaHidden?: boolean }) {
  const alt = (description: string) => (ariaHidden ? "" : description);
  const frameId = (name: string) => `${ariaHidden ? "snippet-preview-frame" : "snippet-frame"}-${name}`;

  return (
    <div className="snippets-canvas" aria-hidden={ariaHidden || undefined}>
      <div className="snippets-title-box"><h2 id={titleId}>Built Along the Way</h2></div>
      <div className="snippet-columns" aria-label={ariaHidden ? undefined : "Selected interface design snippets"}>
        <div className="snippet-column snippet-column--a">
          <div id={frameId("1a")} data-snippet-frame="1a" className="snippet-tile snippet-frame--1a snippet-tile--cart">
            <div className="snippet-tile-media">
              <img
                className="snippet-tile-art"
                src="/assets/snippet-frame-1a@3x.png"
                alt={alt("Animated mystery-box shopping cart experience")}
              />
              <span className="snippet-cart-screen" aria-hidden="true">
                <img src="/assets/snippet-frame-1a.gif" alt="" loading="eager" />
              </span>
              <span className="snippet-cart-island" aria-hidden="true" />
            </div>
          </div>
          <div id={frameId("2a")} data-snippet-frame="2a" className="snippet-tile snippet-frame--2a snippet-tile--travel">
            <div className="snippet-tile-media">
              <img className="snippet-tile-art" src="/assets/snippet-frame-2a@3x.png" alt={alt("Travel planning mobile experience")} />
            </div>
          </div>
          <div id={frameId("3a")} data-snippet-frame="3a" className="snippet-tile snippet-frame--3a snippet-tile--curated">
            <div className="snippet-tile-media">
              <img className="snippet-tile-art" src="/assets/snippet-frame-3a@3x.png" alt={alt("Curated travel essentials mobile experience")} />
            </div>
          </div>
        </div>

        <div className="snippet-column snippet-column--b">
          <div id={frameId("1b")} data-snippet-frame="1b" className="snippet-tile snippet-frame--1b snippet-tile--lootboxes">
            <div className="snippet-tile-media">
              <img className="snippet-tile-art" src="/assets/snippet-frame-1b@3x.png" alt={alt("Reward loot-box visual system")} />
            </div>
          </div>
          <div id={frameId("2b")} data-snippet-frame="2b" className="snippet-tile snippet-frame--2b snippet-tile--learning">
            <div className="snippet-tile-media">
              <img className="snippet-tile-art" src="/assets/snippet-frame-2b@3x.png" alt={alt("Audio learning mobile experience")} />
            </div>
          </div>
          <div id={frameId("3b")} data-snippet-frame="3b" className="snippet-tile snippet-frame--3b snippet-tile--node-creation">
            <div className="snippet-tile-media">
              <img className="snippet-tile-art" src="/assets/snippet-frame-3b@3x.png" alt={alt("AI canvas node creation interaction")} />
              <span className="snippet-node-motion" aria-hidden="true">
                <img src="/assets/snippet-frame-3b.gif" alt="" loading="eager" />
              </span>
            </div>
          </div>
        </div>

        <div className="snippet-column snippet-column--c">
          <div id={frameId("1c")} data-snippet-frame="1c" className="snippet-tile snippet-frame--1c snippet-tile--referral">
            <div className="snippet-tile-media">
              <img className="snippet-tile-art" src="/assets/snippet-frame-1c@3x.png" alt={alt("Refer and win mobile experience")} />
            </div>
          </div>
          <div id={frameId("2c")} data-snippet-frame="2c" className="snippet-tile snippet-frame--2c snippet-tile--nike">
            <div className="snippet-tile-media">
              <img className="snippet-tile-art" src="/assets/snippet-frame-2c@3x.png" alt={alt("Nike campaign interface concept")} />
            </div>
          </div>
          <div id={frameId("3c")} data-snippet-frame="3c" className="snippet-tile snippet-frame--3c snippet-tile--for-today">
            <div className="snippet-tile-media">
              <img className="snippet-tile-art" src="/assets/snippet-frame-3c@3x.png" alt={alt("For Today personal discovery mobile experience")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const journeyRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const snippetsJourneyRef = useRef<HTMLElement>(null);
  const snippetsViewportRef = useRef<HTMLDivElement>(null);
  const snippetsWorldRef = useRef<HTMLDivElement>(null);
  const snippetsProjectRef = useRef<HTMLElement>(null);
  const snippetsIncomingRef = useRef<HTMLElement>(null);
  const snippetsAmbientRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
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
      const snippetsJourney = snippetsJourneyRef.current;
      const snippetsViewport = snippetsViewportRef.current;
      const snippetsWorld = snippetsWorldRef.current;
      const snippetsProject = snippetsProjectRef.current;
      const snippetsIncoming = snippetsIncomingRef.current;
      const snippetsAmbient = snippetsAmbientRef.current;
      const ambient = ambientRef.current;
      if (!journey || !viewport || !world || !hero || !projects || !ambient) return;

      const projectsCanvas = projects.querySelector<HTMLElement>(".projects-canvas");

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
            x: "-30vw",
            y: "104vh",
            z: 1,
            scale: 1.045,
            autoAlpha: 0.58,
            force3D: true,
          });
          if (projectsCanvas) {
            gsap.set(projectsCanvas, {
              scale: 1,
              transformOrigin: "50% 50%",
              force3D: true,
            });
          }
          gsap.set(hero, { force3D: true });
          gsap.set(ambient, { autoAlpha: 0.06 });

          const timeline = gsap.timeline({
            defaults: { ease: "power1.inOut" },
            scrollTrigger: {
              trigger: journey,
              pin: viewport,
              start: "top top",
              end: "+=220%",
              scrub: 1.35,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                journey.classList.toggle("is-settled", self.progress >= 0.94);
              },
            },
          });

          timeline
            .to(world, {
              rotationX: 3.2,
              rotationZ: -0.9,
              scale: 0.975,
              duration: 0.22,
              ease: "power1.inOut",
            })
            .to(
              ambient,
              { autoAlpha: 0.3, duration: 0.22 },
              0,
            )
            .to(world, {
              x: "30vw",
              y: "-104vh",
              rotationX: 0,
              rotationZ: 0,
              scale: 1,
              duration: 0.72,
              ease: "power1.inOut",
            })
            .to(hero, { autoAlpha: 0, duration: 0.4, ease: "power1.out" }, 0.24)
            .to(
              projects,
              { scale: 1, autoAlpha: 1, duration: 0.72, ease: "power1.inOut" },
              0.2,
            )
            .to(ambient, { autoAlpha: 0.08, duration: 0.24, ease: "power2.out" }, 0.68);

          gsap.utils
            .toArray<HTMLElement>(".projects-tail > .projects-tail-canvas > .project-step")
            .forEach((step) => {
              const card = step.querySelector<HTMLElement>(".project-card");
              if (!card) return;

              gsap.fromTo(
                card,
                { y: 16, scale: 1.025, autoAlpha: 0.97, force3D: true },
                {
                  y: 0,
                  scale: 1,
                  autoAlpha: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: step,
                    start: "top 88%",
                    end: "center 58%",
                    scrub: 0.5,
                    invalidateOnRefresh: true,
                  },
                },
              );
            });

          if (
            snippetsJourney
            && snippetsViewport
            && snippetsWorld
            && snippetsProject
            && snippetsIncoming
            && snippetsAmbient
          ) {
            snippetsJourney.classList.add("is-enhanced");

            gsap.set(snippetsWorld, {
              x: 0,
              y: 0,
              scale: 1,
              rotationX: 0,
              rotationZ: 0,
              force3D: true,
              transformOrigin: "50% 50%",
            });
            gsap.set(snippetsIncoming, {
              x: "34vw",
              y: "108vh",
              z: 1,
              scale: 1.045,
              autoAlpha: 0.58,
              force3D: true,
            });
            gsap.set(snippetsProject, { force3D: true });
            gsap.set(snippetsAmbient, { autoAlpha: 0.06 });

            gsap.timeline({
              defaults: { ease: "power1.inOut" },
              scrollTrigger: {
                trigger: snippetsJourney,
                pin: snippetsViewport,
                start: "top top",
                end: "+=260%",
                scrub: 1.35,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                  snippetsJourney.classList.toggle("is-settled", self.progress >= 0.95);
                },
              },
            })
              .to(snippetsWorld, {
                rotationX: 3.2,
                rotationZ: 0.9,
                scale: 0.975,
                duration: 0.24,
                ease: "power1.inOut",
              })
              .to(
                snippetsAmbient,
                { autoAlpha: 0.3, duration: 0.24 },
                0,
              )
              .to(snippetsWorld, {
                x: "-34vw",
                y: "-108vh",
                rotationX: 1.8,
                rotationZ: -0.4,
                scale: 0.99,
                duration: 0.74,
                ease: "power1.inOut",
              })
              .to(snippetsProject, { autoAlpha: 0, duration: 0.48, ease: "power1.out" }, 0.28)
              .to(
                snippetsIncoming,
                { scale: 1.012, autoAlpha: 1, duration: 0.74, ease: "power1.inOut" },
                0.2,
              )
              .to(snippetsWorld, {
                x: 0,
                y: 0,
                rotationX: 0,
                rotationZ: 0,
                scale: 1,
                duration: 0.34,
                ease: "power2.out",
              })
              .to(
                snippetsIncoming,
                { x: 0, y: 0, scale: 1, autoAlpha: 1, duration: 0.34, ease: "power2.out" },
                "<",
              )
              .to(snippetsAmbient, { autoAlpha: 0.08, duration: 0.34, ease: "power2.out" }, "<");
          }

          return () => {
            journey.classList.remove("is-enhanced");
            journey.classList.remove("is-settled");
            snippetsJourney?.classList.remove("is-enhanced");
            snippetsJourney?.classList.remove("is-settled");
          };
        },
      );

      ScrollTrigger.refresh();

      media.add(
        "(max-width: 900px) and (prefers-reduced-motion: no-preference)",
        () => {
          const projectSections = [
            projects,
            ...gsap.utils.toArray<HTMLElement>(".project-step"),
          ];

          projectSections.forEach((section) => {
            gsap.fromTo(
              section,
              { scale: 1.025, autoAlpha: 0.94, force3D: true },
              {
                scale: 1,
                autoAlpha: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: section,
                  start: "top 94%",
                  end: "top 58%",
                  scrub: 1,
                  invalidateOnRefresh: true,
                },
              },
            );
          });

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

  useEffect(() => {
    const dot = cursorDotRef.current;
    const finePointer = window.matchMedia("(pointer: fine)");
    if (!dot || !finePointer.matches) return;

    const targetSelector = "a, button, [role='button'], [role='link'], .company-card";
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrame = 0;
    let hasPosition = false;

    const draw = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      dot.style.left = `${currentX}px`;
      dot.style.top = `${currentY}px`;

      if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
        animationFrame = window.requestAnimationFrame(draw);
      } else {
        animationFrame = 0;
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!hasPosition) {
        currentX = targetX;
        currentY = targetY;
        hasPosition = true;
      }
      const target = event.target instanceof Element ? event.target.closest(targetSelector) : null;
      const projectTarget = event.target instanceof Element ? event.target.closest(".project-card") : null;
      document.body.classList.toggle("is-dot-cursor-active", Boolean(target));
      document.body.classList.toggle("is-project-cursor-active", Boolean(projectTarget));
      if (!animationFrame) animationFrame = window.requestAnimationFrame(draw);
    };

    const hideDot = () => document.body.classList.remove("is-dot-cursor-active", "is-project-cursor-active");

    document.body.classList.add("has-dot-cursor");
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", hideDot);
    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", hideDot);
      document.body.classList.remove("has-dot-cursor", "is-dot-cursor-active", "is-project-cursor-active");
    };
  }, []);

  async function copyEmail() {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <main className="home-page">
      <div className="cursor-dot" ref={cursorDotRef} aria-hidden="true">
        <span className="cursor-dot-label">View project</span>
        <span className="cursor-dot-arrow">
          <img className="cursor-dot-arrow-image" src="/assets/cursor-arrow-up-right.svg" alt="" />
        </span>
      </div>
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

                <a className="project-card project-card--one" href="/work/galleri5-studio" aria-label="Open Galleri5 Studio case study">
                  <div className="project-visual">
                    <img src="/assets/project-ai-video-visual.png" alt="AI video creation workflow screens" />
                  </div>
                  <div className="project-copy">
                    <p className="project-company">GALLERI5</p>
                    <div className="project-copy-details">
                      <h3>Making AI video creation easier to follow</h3>
                      <p>Reimagined Agentic Canvas, an AI-powered video workspace, helping creators understand the generation journey, iterate with confidence, and stay in control throughout the creative process</p>
                    </div>
                  </div>
                </a>

              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="projects-tail light-grid" aria-label="More selected work">
        <div className="projects-tail-canvas">
          <div className="project-step">
            <a className="project-card project-card--two" href="/work/firedrops" aria-label="Open FireDrops case study">
              <div className="project-visual">
                <img src="/assets/project-firedrops-visual.png" alt="FireDrops rewards experience screens" />
              </div>
              <div className="project-copy">
                <p className="project-company">FLIPKART</p>
                <div className="project-copy-details">
                  <h3>Building a scalable rewards experience</h3>
                  <p>Reimagined FireDrops to improve challenge discovery, engagement, and long-term scalability</p>
                </div>
              </div>
            </a>
          </div>

          <div className="project-step">
            <a className="project-card project-card--three" href="/work/monkey-play" aria-label="Open Monkey Play case study">
              <div className="project-visual">
                <img src="/assets/project-monkey-play-visual.png" alt="Monkey Play gaming and referral experience screens" />
              </div>
              <div className="project-copy">
                <p className="project-company">MPL</p>
                <div className="project-copy-details">
                  <h3>Growing a gaming platform through social play</h3>
                  <p>Designed a referral experience that encouraged players to invite friends, compete together, and grow Monkey Play during its early launch.</p>
                </div>
              </div>
            </a>
          </div>

        </div>
      </section>

      <section className="snippets-journey light-grid" ref={snippetsJourneyRef} aria-label="Custom Minigames and Built Along the Way">
        <div className="snippets-journey-viewport" ref={snippetsViewportRef}>
          <div className="snippets-journey-ambient" ref={snippetsAmbientRef} aria-hidden="true" />
          <div className="snippets-journey-world" ref={snippetsWorldRef}>
            <section className="snippets-journey-project" ref={snippetsProjectRef} aria-label="Final selected project">
              <div className="projects-tail-canvas">
                <div className="project-step">
                  <a className="project-card project-card--four" href="/work/custom-minigames" aria-label="Open Custom Minigames case study">
                    <div className="project-visual">
                      <img src="/assets/project-minigames-visual.png" alt="Spin the Wheel custom minigame screens" />
                    </div>
                    <div className="project-copy">
                      <p className="project-company">FLIPKART</p>
                      <div className="project-copy-details">
                        <h3>Introducing Custom Minigames</h3>
                        <p>I&apos;ll take you through our journey of creating our first mini-game: Spin the Wheel. And set the design language for all the future mini games.</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </section>

            <section className="snippets-journey-incoming" ref={snippetsIncomingRef} aria-hidden="true">
              <SnippetsCanvas ariaHidden />
            </section>
          </div>
        </div>
      </section>

      <section className="snippets light-grid" aria-labelledby="snippets-title">
        <SnippetsCanvas titleId="snippets-title" />
      </section>

      <footer className="contact site-footer" id="contact">
        <section className="footer-meet" aria-labelledby="meet-me-title">
          <div className="footer-meet-grid">
            <div className="footer-meet-title-box">
              <h2 id="meet-me-title">Meet Me</h2>
            </div>

            <img
              className="footer-line-art footer-line-art--books"
              src="/assets/footer-line-books.png"
              alt=""
              aria-hidden="true"
            />
            <img
              className="footer-line-art footer-line-art--dog"
              src="/assets/footer-line-dog.png"
              alt=""
              aria-hidden="true"
            />

            <div className="footer-portrait-stage">
              <div className="footer-portrait-outline" aria-hidden="true" />
              <article className="footer-portrait-card">
                <div className="footer-portrait-frame">
                  <img
                    src="/assets/footer-divya-portrait.jpg"
                    alt="Divya Sharma smiling at the camera"
                  />
                </div>
                <div className="footer-portrait-copy">
                  <p>
                    I&apos;m a Sagittarius. When I&apos;m not designing, I&apos;m probably somewhere with a book and coffee
                    (the sweet kind with milk). Lately, I&apos;ve been fascinated by how people, power, and society shape
                    the world around us. And at the same time, I wish life would slow down just a little.
                  </p>
                  <time dateTime="2026-07">– July 2026</time>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="footer-contact" aria-labelledby="footer-contact-title">
          <div className="footer-contact-inner">
            <h2 id="footer-contact-title">Get in touch</h2>

            <div className="footer-contact-actions">
              <div className="footer-availability"><span aria-hidden="true" />Open for work</div>
              <div className="footer-email-row">
                <button className="email-button" type="button" onClick={copyEmail}>
                  {copied
                    ? <Check className="ui-icon" size={20} weight="regular" aria-hidden="true" />
                    : <Copy className="ui-icon" size={20} weight="regular" aria-hidden="true" />}
                  <span>{copied ? "Email copied" : EMAIL}</span>
                </button>
                <a className="footer-email-arrow" href={`mailto:${EMAIL}`} aria-label="Email Divya Sharma">
                  <ArrowUpRight size={22} weight="light" aria-hidden="true" />
                </a>
              </div>
            </div>

            <nav className="footer-socials" aria-label="Social links">
              <a
                href="https://www.linkedin.com/in/divya-sharma-2697a81ab/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Divya Sharma on LinkedIn"
              >
                Linkedin <ArrowUpRight className="social-icon" size={18} weight="light" aria-hidden="true" />
              </a>
              <a
                href="https://x.com/divya_sharma13"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Divya Sharma on X"
              >
                X <ArrowUpRight className="social-icon" size={18} weight="light" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </section>
      </footer>
    </main>
  );
}
