import type { ServicePageData } from "../shared/types";

export const digitalMarketingContent: ServicePageData = {
  label: "Digital Marketing & Growth",

  hero: {
    eyebrow: "Data-driven. Growth-obsessed. Results-accountable.",
    heading: (
      <>
        Marketing That Moves Metrics.<br />Not Just Impressions.
      </>
    ),
    videoSrc: "/videos/video-7.webm",
    body: "Performance campaigns, SEO, content, and lifecycle marketing — all coordinated to drive qualified pipeline and measurable revenue growth.",
    ctaPrimary:   { label: "Grow with us",   href: "#contact" },
    ctaSecondary: { label: "Our approach",   href: "#approach" },
    testimonial: {
      icon:          "/assets/asset-014.png",
      badgeLabel:    "Client Story",
      quote:         "SEO traffic doubled in 6 months and our paid ROAS improved from 2.1x to 4.3x. Tekspot combines strategy and hands-on execution in a way that makes a real difference for internal teams.",
      authorRole:    "Growth Lead",
      authorCompany: "E-commerce scale-up",
    },
  },

  deliverables: {
    heading: "What High-Performance Marketing Looks Like",
    items: [
      {
        eyebrow: "01 · PERFORMANCE MARKETING",
        title:   "Performance Ad Campaigns",
        desc:    "We run data-driven paid campaigns across Google, Meta, LinkedIn, and programmatic channels — optimised for ROAS, CAC, and pipeline growth, not just impressions.",
        icon: (
          <svg viewBox="0 0 48 48" fill="none" className="size-full">
            <rect width="48" height="48" rx="8" fill="#f3edf7" />
            <rect x="10" y="28" width="6" height="10" rx="2" fill="#ae7cb6" />
            <rect x="21" y="20" width="6" height="18" rx="2" fill="#340c3b" />
            <rect x="32" y="12" width="6" height="26" rx="2" fill="#ae7cb6" />
            <path d="M13 24l10-10 8 6 8-12" stroke="#340c3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        eyebrow: "02 · SEO & CONTENT",
        title:   "SEO & Content Growth",
        desc:    "From technical SEO audits to content strategy and execution — we build organic channels that compound over time, driving qualified traffic and reducing dependence on paid.",
        icon: (
          <svg viewBox="0 0 48 48" fill="none" className="size-full">
            <rect width="48" height="48" rx="8" fill="#f3edf7" />
            <circle cx="22" cy="22" r="9" stroke="#340c3b" strokeWidth="2" />
            <path d="m29 29 7 7" stroke="#340c3b" strokeWidth="2" strokeLinecap="round" />
            <path d="M19 22h6M22 19v6" stroke="#ae7cb6" strokeWidth="2" strokeLinecap="round" />
            <path d="M22 10v3M22 31v3M10 22h3M31 22h3" stroke="#ae7cb6" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        eyebrow: "03 · LIFECYCLE & RETENTION",
        title:   "Lead Funnel Optimisation",
        desc:    "We map, test, and optimise every stage of your funnel — from awareness to activation to retention — using analytics, A/B testing, and lifecycle automation to maximise LTV.",
        icon: (
          <svg viewBox="0 0 48 48" fill="none" className="size-full">
            <rect width="48" height="48" rx="8" fill="#f3edf7" />
            <path d="M10 14h28l-8 12v10l-4 2v-12z" stroke="#340c3b" strokeWidth="2" strokeLinejoin="round" fill="none" />
            <circle cx="24" cy="32" r="3" fill="#ae7cb6" />
          </svg>
        ),
      },
    ],
  },

  approach: {
    eyebrow:  "OUR APPROACH",
    heading: (
      <>
        Spend less.<br />Earn more.<br />Measure everything.
      </>
    ),
    backgroundClassName: "bg-[#340c3b]",
    useLightText: true,
    body: "We don't run campaigns in isolation. Every channel, every creative, every landing page is part of a connected growth system — measured at the level of pipeline contribution and revenue, not traffic and clicks.",
    cards: [
      {
        heading: "Audit → Strategy → Execute → Optimise",
        body:    "We start with a full marketing audit, build a channel strategy tied to your revenue goals, then execute and optimise in weekly sprints with full reporting transparency.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="size-full">
            <path d="M4 12h16M12 4l8 8-8 8" stroke="#340c3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        heading: "Full-funnel accountability",
        body:    "We don't just optimise top-of-funnel. We own the full journey from first click to closed deal — coordinating messaging, retargeting, and CRM lifecycle in one integrated programme.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="size-full">
            <path d="M20 6 9 17l-5-5" stroke="#340c3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        heading: "Data-driven, not gut-driven",
        body:    "Every budget allocation, channel mix, and creative decision is backed by attribution data. We build dashboards your leadership team can read, not just your marketing team.",
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
        One Brief.<br />Full Growth Engine.
      </>
    ),
    body:     "Share your revenue targets and current marketing state. We handle channel strategy, campaign execution, content, SEO, and lifecycle automation — coordinated in one growth programme you can see working.",
    ctaLabel: "Get started",
    panelBackgroundClassName: "bg-[#faf7fb]",
    steps: [
      { step: "01", label: "Marketing audit",        desc: "Analyse current channels, attribution, spend efficiency, and competitive position." },
      { step: "02", label: "Strategy & roadmap",     desc: "Channel mix, budget allocation, messaging framework, and quarterly OKRs." },
      { step: "03", label: "Campaign execution",     desc: "Paid media, SEO, content, email, and social — launched and optimised weekly." },
      { step: "04", label: "Reporting & iteration",  desc: "Weekly performance reviews, monthly strategy alignment, and continuous A/B testing." },
    ],
    tags: ["Google Ads", "Meta Ads", "LinkedIn Ads", "SEO", "Content Marketing", "Email Lifecycle", "CRO", "Attribution Analytics"],
  },

  trust: {
    body:  "Delivering marketing programmes that compound — trusted by businesses across B2B, B2C, fintech, retail, and healthcare to drive sustainable, measurable growth.",
    image: "/assets/asset-040.png",
  },

  team: {
    heading:    "Digital Marketing Team",
    subheading: "Growth Strategists · Paid Media · SEO · Content · Lifecycle",
    body:       "Our digital marketing practice brings together performance marketers, SEO specialists, content strategists, and lifecycle automation experts — all working from a shared revenue objective. We're channel-agnostic but outcome-obsessed. Every programme is designed to compound: building traffic, pipeline, and brand equity that grows over time.",
    photo:      "/assets/asset-061.jpg",
    stats: [
      { label: "Growth Strategists",    n: "6+" },
      { label: "Campaigns Launched",    n: "200+" },
      { label: "Avg ROAS Improvement",  n: "2.1x" },
      { label: "Industries Served",     n: "25+" },
    ],
  },

  cta: {
    heading:  "Proven teams. Reliable execution. Real business impact.",
    body:     "From demand generation to revenue — we deliver marketing with the discipline of a growth team and the accountability of a business partner.",
    ctaLabel: "Talk to a marketing expert",
  },

  testimonials: {
    subheading:       "Marketing that delivers pipeline and revenue — not just traffic and impressions.",
    mobileSubheading: "Marketing that delivers pipeline, not just impressions.",
    items: [
      {
        name:            "Aarav Mehta",
        role:            "VP Marketing · NovaFin",
        feedback:        "Tekspot helped us launch campaigns faster without compromising quality. Their team aligned with ours in days and delivered measurable pipeline growth week after week. CAC dropped 28% in Q2.",
        mobileFeedback:  "Campaigns launched faster, quality maintained. CAC dropped 28% in Q2.",
      },
      {
        name:            "Isabella Kim",
        role:            "Growth Lead · SwiftCart",
        feedback:        "We saw measurable growth in a short time. Tekspot combined strategy and hands-on execution — our SEO traffic doubled in 6 months and paid ROAS improved from 2.1x to 4.3x.",
        mobileFeedback:  "SEO traffic doubled in 6 months. Paid ROAS improved from 2.1x to 4.3x.",
      },
      {
        name:            "Rohan Nair",
        role:            "Director Operations · RetailNest",
        feedback:        "The marketing and design team worked as one unit. Communication was clear, timelines were realistic, and output quality stayed consistently high — the integrated model genuinely changes what's possible.",
        mobileFeedback:  "Marketing and design as one unit. Clear comms, high quality, integrated model.",
      },
    ],
  },

  contact: {
    heading:  "Let's grow your revenue together",
    body:     "Tell us your growth goals and we'll set up a 30-minute marketing discovery call.",
    formId:   "dm",
    ctaLabel: "Submit",
  },
};
