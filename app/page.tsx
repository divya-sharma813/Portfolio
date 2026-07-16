"use client";

import { useState } from "react";

const EMAIL = "divysharma187@gmail.com";

const companies = [
  { name: "Flipkart", src: "/assets/company-1.png", className: "flipkart" },
  { name: "MPL", src: "/assets/company-2.png", className: "mpl" },
  { name: "Gallerie5", src: "/assets/company-3.png", className: "gallerie" },
];

export default function Home() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <main>
      <section className="hero light-grid" id="top" aria-labelledby="intro-title">
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

      <section className="projects light-grid" aria-labelledby="projects-title">
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

          <article className="project-card project-card--two">
            <div className="project-visual project-visual--monkey" aria-hidden="true">
              <img src="/assets/projects-reference.png" alt="" />
            </div>
            <div className="project-copy">
              <h3>Designing Referral Experience</h3>
              <p>Redesigning FireDrops, from a simple listing of brand quests to a more scalable&nbsp; platform. Redesigning FireDrops, from a simple listing of brand quests to a more scalable&nbsp; platform</p>
            </div>
          </article>

          <div className="section-rail" aria-hidden="true"><span /></div>
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
