import type { ServicePageData } from "../shared/types";

export const designStrategyContent: ServicePageData = {
  label: "Design & Strategy",

  hero: {
    eyebrow: "Design-led. Strategy-driven.",
    heading: (
      <>
        Design That Converts.<br />Strategy That Grows.
      </>
    ),
    body: "We turn complex business challenges into clear, compelling experiences — from first research sprint to final pixel.",
    ctaPrimary:   { label: "Start a project", href: "#contact" },
    ctaSecondary: { label: "See our approach", href: "#approach" },
    testimonial: {
      icon:          "/assets/asset-036.png",
      badgeLabel:    "Client Story",
      quote:         "Within two sprints, Tekspot redesigned our onboarding flow and activation rates jumped 38%. They didn't just make it look better — they made it work better.",
      authorRole:    "Head of Product",
      authorCompany: "Mid-market SaaS platform",
    },
  },

  deliverables: {
    heading: "What Great Design & Strategy Looks Like",
    items: [
      {
        eyebrow: "01 · RESEARCH & DISCOVERY",
        title:   "Research-Driven UX",
        desc:    "We start with deep user research, competitive analysis, and stakeholder mapping — so every design decision is grounded in real insight, not guesswork.",
        icon: (
          <svg viewBox="0 0 48 48" fill="none" className="size-full">
            <rect width="48" height="48" rx="8" fill="#f3edf7" />
            <circle cx="22" cy="22" r="8" stroke="#340c3b" strokeWidth="2" />
            <path d="m28 28 6 6" stroke="#340c3b" strokeWidth="2" strokeLinecap="round" />
            <path d="M18 22h8M22 18v8" stroke="#ae7cb6" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        eyebrow: "02 · UX/UI & DESIGN SYSTEMS",
        title:   "Scalable Design Systems",
        desc:    "From wireframes to polished UI, we build design systems that scale — consistent tokens, reusable components, and living style guides your team can ship from.",
        icon: (
          <svg viewBox="0 0 48 48" fill="none" className="size-full">
            <rect width="48" height="48" rx="8" fill="#f3edf7" />
            <rect x="10" y="10" width="12" height="12" rx="2" stroke="#340c3b" strokeWidth="2" />
            <rect x="26" y="10" width="12" height="12" rx="2" stroke="#ae7cb6" strokeWidth="2" />
            <rect x="10" y="26" width="12" height="12" rx="2" stroke="#ae7cb6" strokeWidth="2" />
            <rect x="26" y="26" width="12" height="12" rx="2" stroke="#340c3b" strokeWidth="2" />
          </svg>
        ),
      },
      {
        eyebrow: "03 · GROWTH & CONVERSION",
        title:   "Conversion Optimization",
        desc:    "We map every touchpoint on your user journey and redesign friction into flow — increasing sign-ups, activation, and revenue through strategically crafted experiences.",
        icon: (
          <svg viewBox="0 0 48 48" fill="none" className="size-full">
            <rect width="48" height="48" rx="8" fill="#f3edf7" />
            <polyline points="10,34 20,22 28,28 38,14" stroke="#340c3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="38" cy="14" r="3" fill="#ae7cb6" />
            <path d="M10 38h28" stroke="#7d7d7d" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },

  approach: {
    eyebrow:  "OUR APPROACH",
    heading: (
      <>
        Design-led thinking.<br />Business-first execution.
      </>
    ),
    backgroundClassName: "bg-[#340c3b]",
    useLightText: true,
    body: "We don't design in isolation. Every wireframe, prototype, and design system we create is tied to measurable outcomes — user activation, conversion rates, and retention. If the design can't be justified with data, it doesn't ship.",
    cards: [
      {
        heading: "Insight → Wire → Build → Ship",
        body:    "Every engagement follows a validated path: research, wireframe, high-fidelity design, handoff — with client sign-off at each gate.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="size-full">
            <path d="M4 12h16M12 4l8 8-8 8" stroke="#340c3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        heading: "Validated at every stage",
        body:    "User testing, stakeholder reviews, and accessibility checks happen throughout — not just at the end. You see work in progress, not surprises.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="size-full">
            <path d="M20 6 9 17l-5-5" stroke="#340c3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        heading: "Aligned to business goals",
        body:    "Design is only as good as the outcomes it drives. We tie every decision to metrics: retention, conversion, NPS — so aesthetics and performance move together.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="size-full">
            <circle cx="12" cy="12" r="9" stroke="#340c3b" strokeWidth="2" />
            <circle cx="12" cy="12" r="4" stroke="#ae7cb6" strokeWidth="2" />
            <circle cx="12" cy="12" r="1" fill="#340c3b" />
          </svg>
        ),
      },
    ],
  },

  process: {
    heading: (
      <>
        One Brief.<br />Full Design Execution.
      </>
    ),
    body:     "Share your goals and constraints. We handle research, wireframes, prototyping, high-fidelity design, design systems, and growth strategy — fully coordinated in one engagement.",
    ctaLabel: "Get started",
    panelBackgroundClassName: "bg-[#340c3b]",
    useLightText: true,
    steps: [
      { step: "01", label: "Discovery call",   desc: "Align on goals, timelines, and success metrics." },
      { step: "02", label: "Research sprint",  desc: "User interviews, audits, competitive benchmarks." },
      { step: "03", label: "Design sprint",    desc: "Wireframes → prototypes → high-fidelity screens." },
      { step: "04", label: "Iterate & ship",   desc: "Test, refine, and hand off production-ready assets." },
    ],
    tags: ["UX Research", "UX/UI Design", "Design Systems", "Prototyping", "Brand Strategy", "Conversion CRO", "Journey Mapping", "Accessibility"],
  },

  trust: {
    sectionBackgroundClassName: "bg-[#340c3b]",
    body:  "Delivering design work that drives measurable outcomes across SaaS, fintech, healthcare, and retail — trusted by businesses to execute, scale, and grow with confidence.",
    image: "/assets/asset-040.png",
  },

  team: {
    heading:    "Design & Strategy Leadership",
    subheading: "Head of Design & Strategy\n12+ years in product, brand, and growth",
    body:       "Our design and strategy practice is led by a Head of Design & Strategy who has spent more than a decade building products and brands across SaaS, fintech, and consumer businesses. They work hands-on with every engagement — from framing the problem and setting the design direction, to reviewing key milestones and aligning stakeholders — so your team gets senior judgment, not just production capacity.",
    photo:      "/assets/company-founder.webp",
    stats: [
      { label: "Years in design leadership", n: "12+" },
      { label: "Products launched",          n: "40+" },
      { label: "Industries worked in",       n: "8+" },
      { label: "Cross‑functional teams led", n: "25+" },
    ],
  },

  cta: {
    heading:  "Beautiful designs. Strategic clarity. Real business impact.",
    body:     "From brand to product to conversion — we deliver design with the structure and discipline of a product team.",
    ctaLabel: "Talk to a design expert",
  },

  testimonials: {
    subheading:       "Design work that delivers real, measurable outcomes — clients that come back engagement after engagement.",
    mobileSubheading: "Design work that delivers real, measurable outcomes.",
    items: [
      {
        name:            "Sophia Carter",
        role:            "Head of Product · CloudAxis",
        feedback:        "Tekspot's design team transformed our product in two sprints. They didn't just make it look better — they made it perform better. Activation rates jumped 38% within 60 days of launch.",
        mobileFeedback:  "Two sprints, 38% activation lift. They made our product look and perform better.",
      },
      {
        name:            "Aarav Mehta",
        role:            "VP Marketing · NovaFin",
        feedback:        "The brand system they built has saved us weeks every quarter. Every designer, every platform, every campaign — all consistent. That's what a real design system should do.",
        mobileFeedback:  "The brand system saves us weeks every quarter. Fully consistent across every platform.",
      },
      {
        name:            "Isabella Kim",
        role:            "Growth Lead · SwiftCart",
        feedback:        "Their conversion strategy work was unlike anything we'd done before. They mapped the full journey, identified four major drop-off points, and redesigned each one. Revenue per session went up 22%.",
        mobileFeedback:  "Four drop-off points fixed. Revenue per session up 22% after their strategy work.",
      },
      {
        name:            "Rohan Nair",
        role:            "Director Operations · RetailNest",
        feedback:        "From brief to final handoff, the team was structured, transparent, and fast. We had a Figma-to-dev workflow that cut our build cycle by nearly a third.",
        mobileFeedback:  "Structured, transparent, fast — and our build cycle dropped by a third.",
      },
    ],
  },

  contact: {
    heading:  "Let's bring strategic clarity to your next design challenge",
    body:     "Tell us about your project and we'll set up a 30-minute discovery call.",
    formId:   "ds",
    ctaLabel: "Submit",
  },
};
