import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  hero: "galleri" | "firedrops" | "monkey" | "minigames";
  structure: "editorial" | "notebook";
  accent: string;
};

const projects: Project[] = [
  {
    slug: "galleri5-studio",
    title: "Galleri5 Studio",
    eyebrow: "AI creative tools · 2026",
    description:
      "Galleri5 Studio helps creators turn ideas into ads, microdramas, and movies using AI. Whether starting with a simple prompt or a detailed production plan, creators collaborate with AI through the Agentic Canvas: a workspace that generates and assembles every stage of video production.",
    image: "/assets/project-ai-video-visual.png",
    imageAlt: "Galleri5 AI video creation workflow screens",
    hero: "galleri",
    structure: "editorial",
    accent: "#212121",
  },
  {
    slug: "firedrops",
    title: "FireDrops",
    eyebrow: "Rewards & loyalty · Flipkart",
    description:
      "FireDrops, a platform by Flipkart, helps brands connect with users and incentivize customer loyalty through interactive challenges and rewards. Users engage with their favourite brands, earn exclusive rewards, and trade them in a peer-to-peer marketplace.",
    image: "/assets/project-firedrops-visual.png",
    imageAlt: "FireDrops rewards and marketplace experience screens",
    hero: "firedrops",
    structure: "editorial",
    accent: "#3581ff",
  },
  {
    slug: "monkey-play",
    title: "Monkey Play",
    eyebrow: "Gaming platform · MPL",
    description:
      "Monkey Play is a one-stop platform for mobile gamers. Players discover games, take on daily challenges and quests, climb the leaderboard, and get rewarded for how they play.",
    image: "/assets/project-monkey-play-visual.png",
    imageAlt: "Monkey Play gaming and referral experience screens",
    hero: "monkey",
    structure: "notebook",
    accent: "#006865",
  },
  {
    slug: "custom-minigames",
    title: "Custom Minigames",
    eyebrow: "Game systems · FireDrops",
    description:
      "A flexible minigame system designed to make brand rewards feel playful. This case study begins with Spin the Wheel and follows the design language created for future games.",
    image: "/assets/project-minigames-visual.png",
    imageAlt: "Spin the Wheel custom minigame screens",
    hero: "minigames",
    structure: "notebook",
    accent: "#4f2371",
  },
];

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

function CaseHeader({ project }: { project: Project }) {
  return (
    <header className={`case-hero case-hero--${project.hero}`}>
      <nav className="case-nav" aria-label="Case study navigation">
        <a className="case-wordmark" href="/">Divya</a>
        <a className="case-back" href="/#projects-title">
          <ArrowLeft size={18} weight="regular" aria-hidden="true" />
          Back to work
        </a>
      </nav>

      <div className="case-hero-rays" aria-hidden="true" />
      <div className="case-hero-halo" aria-hidden="true" />
      {project.hero === "monkey" && (
        <div className="case-confetti" aria-hidden="true">
          <i /><i /><i /><i /><i /><i />
        </div>
      )}

      <div className="case-hero-panel">
        <p className="case-eyebrow">{project.eyebrow}</p>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
    </header>
  );
}

function EditorialCase({ project }: { project: Project }) {
  return (
    <main className="case-body case-body--editorial">
      <section className="editorial-intro case-shell">
        <p className="case-section-label">Overview / 01</p>
        <div>
          <h2>Turning a complex product into a clear, confident experience.</h2>
          <p>This placeholder chapter will introduce the product, the customer problem, and the moment that made the redesign necessary. It is designed for a concise, story-first opening.</p>
        </div>
      </section>

      <dl className="case-facts case-shell">
        <div><dt>Role</dt><dd>Product Designer</dd></div>
        <div><dt>Focus</dt><dd>Strategy, UX, visual design</dd></div>
        <div><dt>Timeline</dt><dd>12 weeks · Placeholder</dd></div>
        <div><dt>Team</dt><dd>Design, product, engineering</dd></div>
      </dl>

      <figure className="editorial-hero-media case-shell-wide">
        <img src={project.image} alt={project.imageAlt} />
        <figcaption>Final interface direction · Replace with case study media</figcaption>
      </figure>

      <section className="editorial-chapter case-shell">
        <p className="case-section-label">The challenge / 02</p>
        <div>
          <h2>The experience had grown, but the mental model had not.</h2>
          <p>Use this space to explain what users were trying to do, where the existing experience broke down, and why the problem mattered to the business.</p>
          <p>A second paragraph can hold research signals, constraints, edge cases, or the key insight that reframed the project.</p>
        </div>
      </section>

      <blockquote className="editorial-quote case-shell-wide">
        <span>“</span>
        The best direction made the product feel simpler without making the system less capable.
      </blockquote>

      <section className="editorial-split case-shell-wide">
        <figure className="case-media-card case-media-card--accent" style={{ "--case-accent": project.accent } as React.CSSProperties}>
          <span>01</span><p>Research synthesis and opportunity map</p>
        </figure>
        <figure className="case-media-card case-media-card--paper">
          <span>02</span><p>Early system explorations and product principles</p>
        </figure>
      </section>

      <section className="editorial-chapter case-shell">
        <p className="case-section-label">The approach / 03</p>
        <div>
          <h2>A system built around clear decisions, useful feedback, and momentum.</h2>
          <p>This placeholder chapter is ready for your process: the alternatives you explored, the design principles you set, and the moments where testing changed the direction.</p>
        </div>
      </section>

      <section className="editorial-impact">
        <div className="case-shell-wide">
          <p className="case-section-label">Impact / 04</p>
          <h2>What changed after launch</h2>
          <div className="impact-grid">
            <article><strong>+24%</strong><h3>Completion</h3><p>Placeholder result for a key user behaviour.</p></article>
            <article><strong>1.8×</strong><h3>Engagement</h3><p>Placeholder result for product adoption.</p></article>
            <article><strong>−31%</strong><h3>Drop-off</h3><p>Placeholder result for friction reduction.</p></article>
          </div>
        </div>
      </section>
    </main>
  );
}

function NotebookCase({ project }: { project: Project }) {
  return (
    <main className="case-body case-body--notebook light-grid">
      <div className="notebook-case case-shell-wide">
        <aside className="notebook-index">
          <p>Case study index</p>
          <ol>
            <li><a href="#story">01 · Story</a></li>
            <li><a href="#process">02 · Process</a></li>
            <li><a href="#details">03 · Details</a></li>
            <li><a href="#reflection">04 · Reflection</a></li>
          </ol>
        </aside>

        <div className="notebook-flow">
          <section className="notebook-story" id="story">
            <p className="case-section-label">A note about the project</p>
            <h2>Designed through small, deliberate decisions.</h2>
            <p>This placeholder opening gives the case study a more personal rhythm. Use it later for the project context, what you noticed, and the question you decided to pursue.</p>
            <div className="pencil-note">idea worth exploring ↓</div>
          </section>

          <figure className="notebook-image notebook-image--hero">
            <span className="paper-tape" aria-hidden="true" />
            <img src={project.image} alt={project.imageAlt} />
            <figcaption>01 — Primary experience · replace with final case study media</figcaption>
          </figure>

          <section className="notebook-process" id="process">
            <p className="case-section-label">Process / 02</p>
            <h2>From rough questions to a working system.</h2>
            <div className="process-notes">
              <article><span>discover</span><h3>Understand the behaviour</h3><p>Placeholder note for research, signals, and constraints.</p></article>
              <article><span>shape</span><h3>Frame the opportunity</h3><p>Placeholder note for concepts and product principles.</p></article>
              <article><span>refine</span><h3>Test the interaction</h3><p>Placeholder note for prototypes, feedback, and iteration.</p></article>
            </div>
          </section>

          <section className="notebook-gallery" id="details">
            <figure className="notebook-placeholder notebook-placeholder--dark"><span>02</span><p>Interaction detail</p></figure>
            <figure className="notebook-placeholder notebook-placeholder--soft"><span>03</span><p>System detail</p></figure>
            <figure className="notebook-placeholder notebook-placeholder--wide" style={{ "--case-accent": project.accent } as React.CSSProperties}><span>04</span><p>Full-width product moment</p></figure>
          </section>

          <section className="notebook-reflection" id="reflection">
            <p className="case-section-label">Reflection / 04</p>
            <h2>What I would carry into the next version.</h2>
            <p>This closing area is ready for learnings, trade-offs, and what you would explore next. It keeps the tone thoughtful and gives the story a clear ending.</p>
            <span className="approved-note">✓ ready for your content</span>
          </section>
        </div>
      </div>
    </main>
  );
}

function OtherWork({ current }: { current: Project }) {
  const others = projects.filter((project) => project.slug !== current.slug).slice(0, 3);
  return (
    <section className="case-other-work light-grid" aria-labelledby="other-work-title">
      <div className="case-shell-wide">
        <div className="other-work-heading">
          <h2 id="other-work-title">Other work</h2>
          <a href="/#projects-title">View all work <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
        <div className="other-work-grid">
          {others.map((project) => (
            <a href={`/work/${project.slug}`} key={project.slug}>
              <img src={project.image} alt="" />
              <h3>{project.title}</h3>
              <p>{project.eyebrow}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug) ?? projects[0];

  return (
    <div className="case-page">
      <CaseHeader project={project} />
      {project.structure === "editorial" ? <EditorialCase project={project} /> : <NotebookCase project={project} />}
      <OtherWork current={project} />
      <footer className="case-footer">
        <p>Divya Sharma · Product Designer</p>
        <a href="mailto:divysharma187@gmail.com">Let&apos;s work together <ArrowUpRight size={18} aria-hidden="true" /></a>
      </footer>
    </div>
  );
}
