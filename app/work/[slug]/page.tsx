import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import GalleriStageMotion from "./GalleriStageMotion";
import CaseStudyLogo from "./CaseStudyLogo";
import CaseHeaderScroll from "./CaseHeaderScroll";

type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  hero: "galleri" | "firedrops" | "monkey" | "minigames";
  structure: "editorial" | "notebook" | "overlay";
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
    structure: "overlay",
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
    structure: "overlay",
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
    structure: "overlay",
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
    structure: "overlay",
    accent: "#4f2371",
  },
];

const firedropsOverview =
  "FireDrops enables users to engage with their favorite brands by completing engaging challenges to earn exclusive rewards. What makes FireDrops unique is it's marketplace where users can trade their earned rewards. They can either sell the ones they don't plan to use and can buy the ones they couldn't earn or win, from other users";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

function CaseHeader({ project }: { project: Project }) {
  const isGalleri = project.slug === "galleri5-studio";
  const isFireDrops = project.slug === "firedrops";
  const isMonkey = project.slug === "monkey-play";
  const isMinigames = project.slug === "custom-minigames";
  const usesCaseHeaderScroll = isFireDrops || isMonkey || isMinigames;

  return (
    <>
      <CaseStudyLogo />
      {isFireDrops && <CaseHeaderScroll />}
      {isMonkey && <CaseHeaderScroll pageSelector=".monkey-page" />}
      {isMinigames && <CaseHeaderScroll pageSelector=".minigames-page" scrub />}

      <header
        className={`case-hero case-hero--${project.hero}`}
        data-case-header-scroll={usesCaseHeaderScroll ? project.slug : undefined}
      >
      {isFireDrops && <div className="case-hero-bg case-hero-bg--firedrops" aria-hidden="true" />}
      {isMonkey && <div className="case-hero-bg case-hero-bg--monkey" aria-hidden="true" />}
      {isMinigames && <div className="case-hero-bg case-hero-bg--minigames" aria-hidden="true" />}
      <div className="case-hero-rays" aria-hidden="true" />
      <div className="case-hero-halo" aria-hidden="true" />
      {project.hero === "monkey" && (
        <div className="case-confetti" aria-hidden="true">
          <i /><i /><i /><i /><i /><i />
        </div>
      )}

      <div className="case-hero-panel">
        {isGalleri ? (
          <>
            <div className="case-hero-meta" aria-label="Project details">
              <span>Galleri5</span>
              <span>June 2026</span>
            </div>
            <h1>Making AI video creation easier to follow</h1>
            <p>
              Reimagined Agentic Canvas, an AI-powered video workspace, helping creators understand the generation journey, iterate with confidence, and stay in control throughout the creative process.
            </p>
          </>
        ) : isFireDrops ? (
          <>
            <div className="case-hero-panel-surface" aria-hidden="true" />
            <div className="case-hero-panel-content">
              <h1>Building a scalable rewards experience</h1>
              <div className="case-hero-project-meta" aria-label="Project details">
                <span>Flipkart · FireDrops</span>
                <span>E-commerce, Brand Loyalty</span>
                <span>January 2024</span>
              </div>
            </div>
          </>
        ) : isMonkey ? (
          <>
            <div className="case-hero-panel-surface" aria-hidden="true" />
            <div className="case-hero-panel-content">
              <h1>Growing a gaming platform through social play</h1>
              <div className="case-hero-monkey-meta" aria-label="Project details">
                <span>MPL</span>
                <span>Gaming</span>
                <span>July 2025</span>
              </div>
            </div>
          </>
        ) : isMinigames ? (
          <>
            <div className="case-hero-panel-surface" aria-hidden="true" />
            <div className="case-hero-panel-content">
              <h1>Introducing Custom Minigames, In Flipkart - Spin The wheel</h1>
              <div className="case-hero-minigames-meta" aria-label="Project details">
                <span>Flipkart - Firedrop</span>
                <span>E-commerce, Brand Loyalty</span>
                <span>Aug 2024</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <p className="case-eyebrow">{project.eyebrow}</p>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </>
        )}
      </div>
      </header>
    </>
  );
}

function GalleriCase({ project }: { project: Project }) {
  return (
    <main className="case-body case-body--overlay galleri-figma-page" aria-label="Galleri5 Studio case study">
      <article className="overlay-sheet galleri-overlay-sheet" aria-label="Galleri5 Studio case study">
        <CaseHeader project={project} />

        <div className="galleri-figma-surface">
          <div className="galleri-figma-column">
        <p className="galleri-overview">
          Galleri5 Studio helps creators turn ideas into ads, microdramas, and movies using AI. Whether starting with a simple prompt or a detailed production plan, creators collaborate with AI through the Agentic Canvas: a workspace that generates and assembles every stage of video production.
        </p>

        <p className="galleri-role">
          As the Product Designer on this project, I was responsible for redesigning the generation experience inside the Canvas. My goal was to make AI creation feel understandable, controllable, and aligned with how creators naturally think about making videos.
        </p>

        <section className="galleri-figma-copy galleri-journey">
          <h2>Helping creators understand the journey</h2>
          <p>
            After entering the prompt, as soon as the user landed on the canvas, the first thing they saw was a network of connected nodes. Each node represented one output generated by AI, but unless they already understood the workflow, it was not obvious where to start or what each one was doing.
          </p>
        </section>
          </div>

          <figure className="galleri-problem-figure">
        <img className="galleri-problem-image" src="/assets/case-galleri5-before.png" alt="The original Agentic Canvas showing a complex network of connected generation nodes" />
        <div className="galleri-annotation galleri-annotation--one">
          <img className="galleri-annotation-arrow" src="/assets/galleri-arrow-connection.svg" alt="" aria-hidden="true" />
          <h3>Complex node connections</h3>
          <p>Each node represented a stage in the video generation process, like script, shot, storyboard, or video, connected together to show how one output flowed into the next.</p>
        </div>
        <div className="galleri-annotation galleri-annotation--two">
          <img className="galleri-annotation-arrow" src="/assets/galleri-arrow-progress.svg" alt="" aria-hidden="true" />
          <p>No clear indication on what step the generation is at.</p>
        </div>
        <div className="galleri-annotation galleri-annotation--three">
          <img className="galleri-annotation-arrow" src="/assets/galleri-arrow-editing.svg" alt="" aria-hidden="true" />
          <p>When should a user start editing, and how?</p>
        </div>
          </figure>

          <div className="galleri-figma-column">
        <p className="galleri-stage-intro">
          Rather than showing the entire generation pipeline, the experience was reorganized into familiar stages like Script, Shots, Assets, Storyboard, Key Frames and Final Cut.
        </p>

        <figure className="galleri-figma-media galleri-stage-media">
          <GalleriStageMotion />
        </figure>

        <p className="galleri-node-caption">Simplified the structure for each asset (Node)</p>

        <figure className="galleri-figma-media galleri-node-media">
          <img src="/assets/case-galleri5-node.png" alt="A simplified asset node with its generated media, controls, and status grouped together" />
        </figure>

        <section className="galleri-figma-copy galleri-control">
          <h2>Giving creators control over generation</h2>
          <p>Creators rarely got the perfect result on the first try. They wanted to stop, review, tweak a few things, and then continue instead of regenerating everything from scratch.</p>
        </section>

        <figure className="galleri-figma-media galleri-generation-media">
          <img src="/assets/case-galleri5-generation.png" alt="Agentic Canvas generation controls shown alongside the connected production workflow" />
        </figure>

        <p className="galleri-generation-copy">
          The generation flow was redesigned so every stage could be reviewed before moving to the next. Users could regenerate a single output, understand how many credits it would cost, and decide when they were ready to continue. This way they can save their credits on regenerations as well.
        </p>

        <figure className="galleri-figma-media galleri-assets-media">
          <img src="/assets/case-galleri5-assets-keyframes.png" alt="Assets and keyframes displayed as reviewable stages in the generation flow" />
        </figure>

        <figure className="galleri-figma-media galleri-waiting-media">
          <img src="/assets/case-galleri5-waiting.png" alt="A clear waiting state explaining that previous generation stages are still in progress" />
        </figure>

        <section className="galleri-figma-copy galleri-editing">
          <h2>Simplifying Editing and iterating</h2>
          <p>Generating the first version video is only a start. Reaching the desired result often required multiple rounds of edits and regeneration, making this the most important, and most complex, part of the experience.</p>
          <p>Creators could make changes at different levels, from refining a single output to updating the entire project. The challenge was to make these interactions feel clear and predictable without overwhelming users.</p>
          <p>The redesigned workflow introduced clearer editing paths, communicated the impact of every change, and made it easier to iterate with confidence.</p>
        </section>

        <figure className="galleri-figma-media galleri-editing-media">
          <img src="/assets/case-galleri5-editing.png" alt="A focused editing prompt attached directly to the generated visual being refined" />
        </figure>

        <section className="galleri-figma-copy galleri-impact">
          <h2>Impact</h2>
          <ul>
            <li>Easier onboarding for creative teams using the platform.</li>
            <li>More confidence while generating and refining videos.</li>
            <li>Better visibility into credit usage and regeneration.</li>
            <li>A more structured workflow that improved consistency across final outputs.</li>
          </ul>
        </section>

        <section className="galleri-figma-copy galleri-closing">
          <h2>Moving towards a creator-first workflow</h2>
          <p>This redesign wasn&apos;t about changing a few screens. It was about shifting the product from exposing how AI works to supporting how creators work.</p>
          <p>Since then, the experience has continued to evolve with improvements across generation, editing, collaboration, and language. Every change follows the same direction: making AI video creation feel more understandable, flexible, and creator-friendly.</p>
        </section>

        <p className="galleri-thanks">Thank you</p>
          </div>
        </div>
      </article>
    </main>
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

const overlayStudies = [
  {
    number: "01",
    title: "Playful feedback",
    description:
      "A distinct response for every spin, win, and near miss keeps the game easy to read without losing its sense of anticipation.",
    caption: "Reward reveal and feedback states",
    tone: "soft",
  },
  {
    number: "02",
    title: "Familiar rules",
    description:
      "The interaction borrows from real-world prize wheels, so players understand what to do without instruction-heavy screens.",
    caption: "A recognisable interaction model",
    tone: "dark",
  },
  {
    number: "03",
    title: "Scalable system",
    description:
      "Reusable motion, reward, and result patterns create a foundation for future minigames without redesigning the experience each time.",
    caption: "One visual language across game formats",
    tone: "accent",
  },
] as const;

function FireDropsCase() {
  return (
    <main className="case-body case-body--overlay firedrops-page">
      <article className="overlay-sheet" aria-label="FireDrops case study">
        <div className="firedrops-surface">
          <div className="firedrops-column">
            <p className="firedrops-overview">{firedropsOverview}</p>

            <section className="firedrops-copy firedrops-about">
              <h2>About the project</h2>
              <p>The initial version of FireDrops&apos; homepage, while functional, wasn&apos;t optimized for scale or discovery. With brands rapidly joining the platform, we needed to transform the homepage from a simple challenge listing into an engaging discovery hub.</p>
            </section>

            <figure className="firedrops-product-preview">
              <img src="/assets/case-firedrops-home-2x.png" alt="The original FireDrops challenge discovery experience" />
            </figure>

            <section className="firedrops-copy firedrops-problems">
              <h2>Problems we identified</h2>
              <ul>
                <li>Non-scalable Challenge Discovery: The &quot;Explore Challenges&quot; section displayed challenges in a horizontal scroll with single-challenge visibility. This restrict the user to scan or even discover all the brand challenges the platform has.</li>
                <li>No clear distinction between active, completed, and expired challenges</li>
                <li>Users had no way to find challenges that matched their interests</li>
                <li>Lack of entry point for Reward Store</li>
                <li>Absence of adequate empty states in scenarios when the platform has no live challenges (edge case)</li>
              </ul>
            </section>

            <section className="firedrops-copy firedrops-solution">
              <h2>Design Solution</h2>
              <p>The first decision was adopting a widget-based layout architecture. Since FireDrops was in its early stages and actively experimenting with new concepts, this approach allow us to easily add or remove sections, and optimize performance for each section independently.</p>
            </section>

            <section className="firedrops-copy firedrops-discovery-copy">
              <h2>Challenge Discovery</h2>
              <p>Redesigned challenge discovery with a structured layout that highlights trending, ongoing, and category-based challenges. This made it easier for users to find relevant challenges and brands at a glance.</p>
            </section>
          </div>

          <figure className="firedrops-visual firedrops-visual--discovery">
            <img src="/assets/case-firedrops-discovery-2x.png" alt="FireDrops challenge discovery redesign and its three-tier structure" />
          </figure>

          <div className="firedrops-column">
            <section className="firedrops-copy firedrops-ongoing-copy">
              <h2>Ongoing Challenges</h2>
            </section>
          </div>

          <figure className="firedrops-visual firedrops-visual--wide firedrops-visual--ongoing-iterations">
            <img src="/assets/case-firedrops-ongoing-iterations-2x.png" alt="Iterations for improving recall and comprehension of ongoing FireDrops challenges" />
          </figure>

          <figure className="firedrops-visual firedrops-visual--wide firedrops-visual--ongoing-final">
            <img src="/assets/case-firedrops-ongoing-final-2x.png" alt="Final FireDrops design for ongoing challenges" />
          </figure>

          <div className="firedrops-column">
            <section className="firedrops-copy firedrops-store-copy">
              <h2>Introduced Reward Store Discovery</h2>
              <p>The Reward Store, though valuable, was tucked away in the bottom navigation—making it hard for users to discover that they could directly buy rewards or sell unused ones</p>
            </section>
          </div>

          <figure className="firedrops-visual firedrops-visual--wide firedrops-visual--store-iterations">
            <img src="/assets/case-firedrops-store-iterations-2x.png" alt="FireDrops Reward Store discovery and card information architecture iterations" />
          </figure>

          <figure className="firedrops-visual firedrops-visual--wide firedrops-visual--store-final">
            <img src="/assets/case-firedrops-store-final-2x.png" alt="Final FireDrops Reward Store discovery design" />
          </figure>

          <div className="firedrops-column">
            <section className="firedrops-copy firedrops-limited-copy">
              <h2>Handling Limited Content States</h2>
              <p>In the previous version, the homepage lacked proper handling of scenarios where challenges were limited or unavailable:</p>
              <ul>
                <li>Expired challenges remained visible, cluttering the interface.</li>
                <li>No guidance was provided when there were no challenges available.</li>
                <li>Users had no clear next steps when their preferred challenge types were not available.</li>
              </ul>
            </section>
          </div>

          <figure className="firedrops-visual firedrops-visual--limited">
            <img src="/assets/case-firedrops-limited-2x.png" alt="FireDrops designs for limited, expired, and unavailable challenge states" />
          </figure>

          <div className="firedrops-column">
            <section className="firedrops-copy firedrops-content-states">
              <h2>Handling Limited Content States</h2>
              <ul>
                <li>The redesigned FireDrops homepage evolved from a simple challenge listing into a dynamic, scalable discovery hub.</li>
                <li>Significant rise in users visiting the Reward Store.</li>
                <li>We have successfully leveraged the widget approach to add more sections on the page later on.</li>
                <li>Today, we&apos;re integrating FireDrops more deeply into the Flipkart ecosystem to unlock its full potential.</li>
              </ul>
              <p>This journey not only sharpened my skills in product thinking and experience design but also showed me the impact of blending scalability with delight. Most importantly, it laid the foundation for continuous evolution.</p>
            </section>

            <p className="firedrops-thanks">Thank you</p>
          </div>
        </div>
      </article>
    </main>
  );
}

function MonkeyCase() {
  return (
    <main className="case-body case-body--overlay monkey-page">
      <article className="overlay-sheet" aria-label="Monkey Play case study">
        <div className="monkey-surface">
          <div className="monkey-column">
            <p className="monkey-overview">
              Monkey Play is a one-stop platform for mobile gamers. Players can discover their favorite games and take on daily challenges and quests. Monkey tracks their game play and based on which players rank on the leaderboard and get rewarded
            </p>
          </div>

          <div className="monkey-overview-cards" role="group" aria-label="Monkey Play quests, leaderboard competition, and rewards">
            <img
              src="/assets/case-monkey-overview-play@2x.png"
              alt="Play quests in favorite mobile games"
            />
            <img
              src="/assets/case-monkey-overview-compete@2x.png"
              alt="Compete with other players on the leaderboard"
            />
            <img
              src="/assets/case-monkey-overview-rewards@2x.png"
              alt="Earn rewards through Monkey Play"
            />
          </div>

          <div className="monkey-column">
            <section className="monkey-copy monkey-invite-copy">
              <h2>Invite Friends to play</h2>
              <p>Designed a multi-tier referral flow where players earn rewards as their invited friends progress in the app, turning referrals into an engaging, competitive experience</p>
            </section>
          </div>

          <figure className="monkey-visual monkey-visual--referral-entry">
            <img src="/assets/case-monkey-referral-entry@2x.png" alt="Monkey Play referral entry point and reward progression" />
          </figure>

          <figure className="monkey-visual monkey-visual--player-screens">
            <img src="/assets/case-monkey-player-screens@2x.png" alt="A player claiming earned referral rewards in Monkey Play" />
          </figure>

          <figure className="monkey-visual monkey-visual--new-player">
            <img src="/assets/case-monkey-new-player-flow@2x.png" alt="Referral reward claim and referral unlock states for a new player" />
          </figure>

          <div className="monkey-column">
            <section className="monkey-copy monkey-share-copy">
              <h2>Created a set of shareable creatives to support the referral flow.</h2>
              <p>The goal was to keep visual and tonal consistency across screens, so players felt like they were on the same journey from invite to reward claim.</p>
            </section>
          </div>

          <figure className="monkey-visual monkey-visual--share-creatives">
            <img src="/assets/case-monkey-share-creatives@2x.png" alt="Monkey Play referral and challenge share creatives" />
          </figure>

          <p className="monkey-thanks">Thank you</p>
        </div>
      </article>
    </main>
  );
}

function MinigamesCase() {
  return (
    <main className="case-body case-body--overlay minigames-page">
      <article className="overlay-sheet" aria-label="Custom Minigames case study">
        <div className="minigames-surface">
          <div className="minigames-column">
            <p className="minigames-overview">
              Summer 2024, the FireDrops team was on a mission. We were focused on improving user engagement, brand loyalty, and meaningful interactions. We experimented with everything from innovative brand challenges to streak-based rewards and puzzles, and then we turned to something timeless—minigames. Those delightfully simple yet addictive experiences we&apos;ve all enjoyed at some point: slot machines, roulette wheels, Tetris. Games where luck meets anticipation, and where the moment before the reveal creates a surge of excitement.
            </p>

            <section className="minigames-copy minigames-challenge">
              <h2>The Challenge</h2>
              <p>Building a minigame isn&apos;t technically complex, but creating one that users genuinely enjoy, remember, and return to—within all the platform constraints—is where the real design challenge lies.</p>
              <p>Almost every platform has these minigames, but only a few deliver an experience that truly resonates and delights.</p>
            </section>
          </div>

          <figure className="minigames-visual minigames-visual--goals">
            <img src="/assets/case-minigames-goals@2x.png" alt="" />
          </figure>

          <div className="minigames-column">
            <section className="minigames-copy minigames-goals-copy">
              <h2>The Goals</h2>
              <p>Before diving into design, we established clear objectives for the Spin the Wheel minigame:</p>
              <p><strong>Brand Customization:</strong> Since FireDrops focuses on brand loyalty, we needed a UI framework that could be customized for different brands while maintaining usability and recognition.</p>
              <p><strong>Seamless User Experience:</strong> The entire journey needed to feel smooth and interactive, from discovery to reward claiming.</p>
              <p><strong>Flexible Reward Handling:</strong> The system needed to accommodate both tradable and non-tradable rewards, ensuring all possible reward scenarios were covered.</p>
            </section>

            <p className="minigames-benchmark-intro">I started by analyzing how other platforms implemented similar minigames.</p>
          </div>

          <figure className="minigames-visual minigames-visual--benchmark">
            <img src="/assets/case-minigames-benchmark@2x.png" alt="A competitive benchmark organized around discovery, game UI, animation, interaction, and reward distribution" />
          </figure>

          <div className="minigames-column">
            <section className="minigames-copy minigames-benchmark-focus">
              <h3>My benchmarking focused on four key areas:</h3>
              <p><strong>Discovery:</strong> How users find and access games within the larger platform.</p>
              <p><strong>Game UI:</strong> Visual design approaches and information presentation.</p>
              <p><strong>Animation &amp; Interactions:</strong> How movement and feedback enhance the experience.</p>
              <p><strong>Flow &amp; Reward Distribution:</strong> The complete user journey and reward mechanics.</p>
            </section>

            <h2 className="minigames-section-title">Design Evolution</h2>

            <section className="minigames-copy minigames-iteration-copy minigames-iteration-copy--one">
              <h3>The initial iteration:</h3>
              <p>While I wasn&apos;t initially planning to include this version, showing the complete journey reflects the honest design process. This first attempt helped identify key issues to address. I did not include customization at this stage because I was still figuring out the game UI.</p>
            </section>
          </div>

          <figure className="minigames-visual minigames-visual--iteration-one">
            <img src="/assets/case-minigames-iteration-one@2x.png" alt="The initial Spin to Win design iteration, from idle and spinning states to reward reveal" />
          </figure>

          <div className="minigames-column">
            <section className="minigames-copy minigames-iteration-copy minigames-iteration-copy--two">
              <h3>The Second Version</h3>
              <p>Version 2 was a big step up. Still not perfect, but good enough that we decided to put it to the test during the Big Billion Days sale. Nothing like a high-traffic event to see if your design holds up!</p>
            </section>
          </div>

          <figure className="minigames-visual minigames-visual--iteration-two">
            <img src="/assets/case-minigames-iteration-two@2x.png" alt="The second Spin to Win design with clearer game and reward states" />
          </figure>

          <div className="minigames-column">
            <p className="minigames-brand-note">We also tested a level of brand customization in this version.</p>
          </div>

          <figure className="minigames-visual minigames-visual--brand">
            <img src="/assets/case-minigames-brand-customization@2x.png" alt="Three branded versions of the Spin to Win game interface" />
          </figure>

          <div className="minigames-column">
            <section className="minigames-copy minigames-final-copy">
              <h3>The Final Version</h3>
              <p>After gathering insights from real users during Big Billion Days, we refined everything into this final version. This is where all the pieces came together—the visuals, interactions, and reward handling.</p>
            </section>
          </div>

          <figure className="minigames-visual minigames-visual--wide minigames-visual--final">
            <img src="/assets/case-minigames-final-version@2x.png" alt="The final customizable Spin to Win interface shown for two different brands" />
          </figure>

          <div className="minigames-column">
            <h3 className="minigames-journey-title">User Journey to winning a reward</h3>
          </div>

          <figure className="minigames-visual minigames-visual--journey minigames-visual--journey-first">
            <img src="/assets/case-minigames-journey-one@2x.png" alt="A user discovers the minigame through a targeted brand entry point and spins the wheel" />
          </figure>

          <figure className="minigames-visual minigames-visual--journey">
            <img src="/assets/case-minigames-journey-two@2x.png" alt="A user answers a qualifying question after the spin and wins the reward" />
          </figure>

          <figure className="minigames-visual minigames-visual--journey">
            <img src="/assets/case-minigames-journey-three@2x.png" alt="Reward details, reward trading, and the return state for the next spin" />
          </figure>

          <div className="minigames-column">
            <section className="minigames-copy minigames-next">
              <h3>What&apos;s Next</h3>
              <p>The project challenged my visual design skills in new ways—balancing excitement with usability, creating animations that felt satisfying, and ensuring the experience remained cohesive within the FireDrops ecosystem.</p>
              <p>This first minigame establishes a foundation for future gamification on the platform. The design system we&apos;ve created can now be extended to other games, maintaining a consistent feel while introducing new mechanics.</p>
            </section>

            <p className="minigames-thanks">Thank you</p>
          </div>
        </div>
      </article>
    </main>
  );
}

function OverlayCase({ project }: { project: Project }) {
  if (project.slug === "galleri5-studio") return <GalleriCase project={project} />;
  if (project.slug === "firedrops") return <FireDropsCase />;
  if (project.slug === "monkey-play") return <MonkeyCase />;
  if (project.slug === "custom-minigames") return <MinigamesCase />;

  return (
    <main className="case-body case-body--overlay">
      <article className="overlay-sheet" aria-labelledby="overlay-title">
        <div className="overlay-document">
          <header className="overlay-intro">
            <p className="case-section-label">A closer look</p>
            <h2 id="overlay-title">Design principles</h2>
            <p>
              This version treats the case study like a working design document. Each principle is paired with the product evidence that brings it to life.
            </p>
          </header>

          <div className="overlay-studies">
            {overlayStudies.map((study) => (
              <section className="overlay-study" key={study.number}>
                <div className="overlay-study-copy">
                  <p className="overlay-study-title">
                    <span>{study.number}</span>
                    {study.title}
                  </p>
                  <p>{study.description}</p>
                </div>
                <figure className={`overlay-visual overlay-visual--${study.tone}`} style={{ "--case-accent": project.accent } as React.CSSProperties}>
                  <div className="overlay-visual-frame">
                    <img src={project.image} alt={project.imageAlt} />
                  </div>
                  <figcaption>{study.caption}</figcaption>
                </figure>
              </section>
            ))}
          </div>

          <footer className="overlay-reflection">
            <p className="case-section-label">Reflection</p>
            <h2>A playful layer built on a dependable system.</h2>
            <p>
              This closing area is ready for the final outcome, launch learnings, and the decisions you would carry into the next game.
            </p>
          </footer>
        </div>
      </article>
    </main>
  );
}

function OtherWork({ current }: { current: Project }) {
  const isGalleri = current.slug === "galleri5-studio";
  const isFigmaCase = isGalleri || current.slug === "firedrops" || current.slug === "monkey-play" || current.slug === "custom-minigames";
  const figmaThumbnails: Record<string, string> = {
    "galleri5-studio": "/assets/other-work-galleri5@2x.png",
    "monkey-play": "/assets/other-work-monkey-play@2x.png",
    "custom-minigames": "/assets/other-work-custom-minigames@2x.png",
  };
  const galleriTitles: Record<string, string> = {
    "galleri5-studio": "Making AI video creation easier to follow",
    "monkey-play": "Growing a gaming platform through social play",
    firedrops: "Building a scalable rewards experience",
    "custom-minigames": "Introducing Custom Minigames",
  };
  const monkeyClosingOrder = ["custom-minigames", "galleri5-studio", "firedrops"];
  const minigamesClosingOrder = ["monkey-play", "galleri5-studio", "firedrops"];
  const others = current.slug === "monkey-play"
    ? monkeyClosingOrder
        .map((slug) => projects.find((project) => project.slug === slug))
        .filter((project): project is Project => Boolean(project))
    : current.slug === "custom-minigames"
      ? minigamesClosingOrder
          .map((slug) => projects.find((project) => project.slug === slug))
          .filter((project): project is Project => Boolean(project))
    : projects.filter((project) => project.slug !== current.slug).slice(0, 3);
  const heading = isFigmaCase ? "View Other Projects" : "Other work";
  return (
    <section className={`case-other-work light-grid${isFigmaCase ? " case-other-work--galleri" : ""}`} aria-labelledby="other-work-title">
      <div className="case-shell-wide">
        <div className="other-work-heading">
          <h2 id="other-work-title">{heading}</h2>
          {!isFigmaCase && <a href="/#projects-title">View all work <ArrowUpRight size={18} aria-hidden="true" /></a>}
        </div>
        <div className="other-work-grid">
          {others.map((project) => (
            <a href={`/work/${project.slug}`} key={project.slug}>
              <img src={figmaThumbnails[project.slug] ?? project.image} alt="" />
              <h3>{isFigmaCase ? galleriTitles[project.slug] : project.title}</h3>
              {!isFigmaCase && <p>{project.eyebrow}</p>}
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
  const isOverlay = project.structure === "overlay";

  return (
    <div className={`case-page case-page--${project.slug}${isOverlay ? " case-page--overlay" : ""}`}>
      {project.slug !== "galleri5-studio" && <CaseHeader project={project} />}
      {project.structure === "editorial" ? (
        <EditorialCase project={project} />
      ) : isOverlay ? (
        <OverlayCase project={project} />
      ) : (
        <NotebookCase project={project} />
      )}
      <OtherWork current={project} />
    </div>
  );
}
