import type { ServicePageData } from "../shared/types";

export const technologyContent: ServicePageData = {
  label: "Web & App Development",

  hero: {
    eyebrow: "Engineered for scale. Built to last.",
    heading: (
      <>
        Technology That<br />Ships. And Scales.
      </>
    ),
    videoSrc: "http://15.206.123.194:8081/videos/video4.webm",
    body: "Web platforms, mobile apps, APIs, and backend systems — engineered with production-grade architecture, delivered in agile sprints, and built to outlast your next funding round.",
    ctaPrimary:   { label: "Start building", href: "#contact" },
    ctaSecondary: { label: "Our approach",   href: "#approach" },
    testimonial: {
      icon:          "/assets/asset-071.png",
      badgeLabel:    "Client Story",
      quote:         "They rebuilt our platform in 10 weeks. Page load times dropped 60%, Core Web Vitals went green, and our SEO rankings improved within the first month of relaunch. Real engineering.",
      authorRole:    "VP Marketing",
      authorCompany: "Fintech scale-up",
    },
  },

  deliverables: {
    heading: "What Production-Grade Technology Looks Like",
    items: [
      {
        eyebrow: "01 · WEB PLATFORMS",
        title:   "Responsive Web Platforms",
        desc:    "From marketing sites to complex web applications — we design, build, and ship production-ready web platforms using modern frontend frameworks, with performance and accessibility built in.",
        icon: (
          <svg viewBox="0 0 48 48" fill="none" className="size-full">
            <rect width="48" height="48" rx="8" fill="#f3edf7" />
            <rect x="8" y="12" width="32" height="22" rx="3" stroke="#340c3b" strokeWidth="2" />
            <path d="M16 38h16M24 34v4" stroke="#340c3b" strokeWidth="2" strokeLinecap="round" />
            <path d="M14 22l4 4-4 4M21 29h8" stroke="#ae7cb6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        eyebrow: "02 · MOBILE ENGINEERING",
        title:   "Mobile App Engineering",
        desc:    "Native iOS and Android, or cross-platform with React Native and Flutter — we build mobile experiences that perform on the device, integrate with your stack, and scale with your users.",
        icon: (
          <svg viewBox="0 0 48 48" fill="none" className="size-full">
            <rect width="48" height="48" rx="8" fill="#f3edf7" />
            <rect x="16" y="8" width="16" height="32" rx="3" stroke="#340c3b" strokeWidth="2" />
            <circle cx="24" cy="34" r="1.5" fill="#ae7cb6" />
            <path d="M20 14h8" stroke="#ae7cb6" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        eyebrow: "03 · API & BACKEND",
        title:   "API & Backend Integration",
        desc:    "We design and build APIs, microservices, and backend integrations that connect your platforms, third-party tools, and data systems — with reliability, security, and documentation at the core.",
        icon: (
          <svg viewBox="0 0 48 48" fill="none" className="size-full">
            <rect width="48" height="48" rx="8" fill="#f3edf7" />
            <rect x="8" y="16" width="14" height="8" rx="2" stroke="#340c3b" strokeWidth="2" />
            <rect x="26" y="10" width="14" height="8" rx="2" stroke="#ae7cb6" strokeWidth="2" />
            <rect x="26" y="30" width="14" height="8" rx="2" stroke="#ae7cb6" strokeWidth="2" />
            <path d="M22 20h4M22 20c0 0 0-6 4-6M22 20c0 0 0 14 4 14" stroke="#340c3b" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },

  approach: {
    eyebrow:  "OUR APPROACH",
    heading: (
      <>
        Engineering excellence.<br />Commercial accountability.
      </>
    ),
    backgroundClassName: "bg-[#340c3b]",
    useLightText: true,
    body: "We don't just write code. We own outcomes. Every sprint is tied to a milestone, every milestone to a business objective. If the architecture we design today creates problems in 18 months, that's our problem too.",
    cards: [
      {
        heading: "Discovery → Architecture → Build → Ship",
        body:    "Every engagement starts with technical discovery: understanding your stack, integrations, and constraints. We then design the architecture before a single line of production code is written.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="size-full">
            <path d="M4 12h16M12 4l8 8-8 8" stroke="#340c3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        heading: "Quality-gated delivery",
        body:    "Code review, automated testing, staging environments, and structured QA before every release. We don't ship fast at the cost of quality — we build processes that make both possible.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="size-full">
            <path d="M20 6 9 17l-5-5" stroke="#340c3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        heading: "Embedded, not outsourced",
        body:    "Our engineers join your team in your tools — Jira, Linear, Slack, GitHub. You get the flexibility of a delivery partner with the ownership culture of an in-house team.",
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
        One Brief.<br />Full Stack Delivery.
      </>
    ),
    body:     "Share your product vision, technical requirements, and timeline. We handle architecture design, frontend, backend, mobile, APIs, QA, and deployment — fully owned in one engagement.",
    ctaLabel: "Start building",
    panelBackgroundClassName: "bg-[#faf7fb]",
    steps: [
      { step: "01", label: "Technical discovery",  desc: "Understand your stack, requirements, integrations, and non-functional requirements." },
      { step: "02", label: "Architecture & planning", desc: "System design, tech stack decisions, sprint planning, and milestone mapping." },
      { step: "03", label: "Agile build",           desc: "Two-week sprints with demos, code review, and continuous integration from day one." },
      { step: "04", label: "QA, release & support", desc: "Structured QA, staged rollout, post-launch monitoring, and documentation handoff." },
    ],
    tags: ["React / Next.js", "React Native", "Flutter", "Node.js", "REST APIs", "GraphQL", "PostgreSQL", "AWS / GCP"],
  },

  trust: {
    body:  "Delivering technology products for SaaS, fintech, healthcare, and retail businesses — trusted by engineering teams that need quality delivery and CTOs who need predictable timelines.",
    image: "/assets/asset-040.png",
  },

  team: {
    heading:    "Engineering Team",
    subheading: "Frontend · Backend · Mobile · DevOps · QA",
    body:       "Our engineering team brings together senior full-stack developers, mobile engineers, DevOps specialists, and QA leads — all working within a structured delivery framework. We're technology-pragmatic: we recommend the right tool for the job, not the most trendy. And we stay engaged after launch — monitoring, iterating, and supporting as your product grows.",
    photo:      "/assets/asset-063.jpg",
    stats: [
      { label: "Engineers",          n: "20+" },
      { label: "Projects Shipped",   n: "150+" },
      { label: "Avg Sprint Cadence", n: "2 wks" },
      { label: "Tech Stacks",        n: "12+" },
    ],
  },

  cta: {
    heading:  "Proven teams. Reliable execution. Real business impact.",
    body:     "From architecture to deployment — we deliver technology with the discipline of a product team and the accountability of a business partner.",
    ctaLabel: "Talk to an engineer",
  },

  testimonials: {
    subheading:       "Technology delivery that ships on time, scales reliably, and outlasts the engagement.",
    mobileSubheading: "Technology that ships on time and scales reliably.",
    items: [
      {
        name:            "Sophia Carter",
        role:            "Head of Product · CloudAxis",
        feedback:        "From design to development, execution was smooth and predictable. We reduced delivery bottlenecks by 40% and shipped our entire product roadmap with more confidence than we'd had in two years.",
        mobileFeedback:  "Delivery bottlenecks down 40%. Entire roadmap shipped with confidence.",
      },
      {
        name:            "Nikhil Rao",
        role:            "CTO · MediBridge",
        feedback:        "Reliable execution and strong ownership across every sprint. They understood our technical constraints quickly, proposed practical solutions, and delivered scalable architecture we're still building on.",
        mobileFeedback:  "Understood constraints fast. Scalable architecture we're still building on.",
      },
      {
        name:            "Aarav Mehta",
        role:            "VP Marketing · NovaFin",
        feedback:        "Tekspot rebuilt our web platform and the results were immediate — page load times dropped by 60%, Core Web Vitals went green, and our SEO rankings improved within weeks of the relaunch.",
        mobileFeedback:  "60% faster load times, green Core Web Vitals, and SEO rankings improved immediately.",
      },
    ],
  },

  contact: {
    heading:  "Let's build something great together",
    body:     "Tell us about your project and we'll set up a 30-minute technical discovery call.",
    formId:   "te",
    ctaLabel: "Submit",
  },
};
