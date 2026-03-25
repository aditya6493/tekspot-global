import type { ServicePageData } from "../shared/types";

export const staffingContent: ServicePageData = {
  label: "Talent / Staffing",

  hero: {
    eyebrow: "Quality first. Speed second. Never both sacrificed.",
    heading: (
      <>
        Hire Faster.<br />Hire Better.<br />Hire With Confidence.
      </>
    ),
    body: "From single specialist roles to bulk workforce ramps — we source, screen, and place talent that performs from day one.",
    ctaPrimary:   { label: "Hire now",       href: "#contact" },
    ctaSecondary: { label: "Our approach",   href: "#approach" },
    testimonial: {
      icon:          "/assets/asset-057.png",
      badgeLabel:    "Client Story",
      quote:         "We needed 14 engineers in 8 weeks. Tekspot delivered 16 quality candidates — we hired 12 and 11 are still with us 18 months later. The screening quality is genuinely different.",
      authorRole:    "CTO",
      authorCompany: "Healthcare technology company",
    },
  },

  deliverables: {
    heading: "What High-Quality Staffing Looks Like",
    items: [
      {
        eyebrow: "01 · CONTRACT & PERMANENT",
        title:   "Contract & Permanent Hiring",
        desc:    "We source, screen, and deliver contract and full-time talent across tech, ops, and specialist functions — with speed that keeps your pipeline moving.",
        icon: (
          <svg viewBox="0 0 48 48" fill="none" className="size-full">
            <rect width="48" height="48" rx="8" fill="#f3edf7" />
            <circle cx="20" cy="18" r="6" stroke="#340c3b" strokeWidth="2" />
            <path d="M8 38c0-6.627 5.373-12 12-12h4" stroke="#340c3b" strokeWidth="2" strokeLinecap="round" />
            <path d="M30 28l3 3 7-7" stroke="#ae7cb6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        eyebrow: "02 · BULK WORKFORCE",
        title:   "Bulk Workforce Onboarding",
        desc:    "Ramp large teams fast — from 10 to 500 — with structured onboarding programmes, role-specific screening, and compliance-backed documentation.",
        icon: (
          <svg viewBox="0 0 48 48" fill="none" className="size-full">
            <rect width="48" height="48" rx="8" fill="#f3edf7" />
            <circle cx="14" cy="18" r="5" stroke="#ae7cb6" strokeWidth="2" />
            <circle cx="24" cy="14" r="5" stroke="#340c3b" strokeWidth="2" />
            <circle cx="34" cy="18" r="5" stroke="#ae7cb6" strokeWidth="2" />
            <path d="M4 38c0-4.418 4.477-8 10-8h20c5.523 0 10 3.582 10 8" stroke="#340c3b" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        eyebrow: "03 · ROLE-BASED SCREENING",
        title:   "Role-Based Talent Screening",
        desc:    "Our multi-stage screening combines skills assessments, behavioural interviews, and culture-fit evaluation — reducing time-to-hire and first-year attrition simultaneously.",
        icon: (
          <svg viewBox="0 0 48 48" fill="none" className="size-full">
            <rect width="48" height="48" rx="8" fill="#f3edf7" />
            <rect x="12" y="10" width="24" height="28" rx="3" stroke="#340c3b" strokeWidth="2" />
            <path d="M18 18h12M18 24h12M18 30h8" stroke="#ae7cb6" strokeWidth="2" strokeLinecap="round" />
            <circle cx="34" cy="34" r="6" fill="#f3edf7" stroke="#340c3b" strokeWidth="2" />
            <path d="M32 34l1.5 1.5L36 32" stroke="#340c3b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
    ],
  },

  approach: {
    eyebrow:  "OUR APPROACH",
    heading: (
      <>
        Quality first.<br />Every single role.
      </>
    ),
    body: "We don't spray CVs. Every candidate we present has been screened against your specific role brief, culture context, and growth trajectory. Our process takes more time upfront — and saves months of costly mis-hires.",
    cards: [
      {
        heading: "Brief → Source → Screen → Place",
        body:    "Every engagement follows a validated path: role brief, targeted sourcing, multi-stage screening, and structured placement — with weekly progress reporting.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="size-full">
            <path d="M4 12h16M12 4l8 8-8 8" stroke="#340c3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        heading: "Quality-guaranteed placements",
        body:    "Our 90-day replacement guarantee means you don't absorb the cost of a bad hire. We stand behind every placement with a structured quality commitment.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="size-full">
            <path d="M20 6 9 17l-5-5" stroke="#340c3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        heading: "Integrated with your business",
        body:    "We embed with your hiring managers, HR teams, and operations leads — aligning talent with headcount planning, not just filling requisitions.",
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
        One Brief.<br />End-to-End Delivery.
      </>
    ),
    body:     "Share your role requirements, team context, and timelines. We handle sourcing, screening, shortlisting, interview coordination, offer management, and onboarding support — one accountable partner, end to end.",
    ctaLabel: "Start hiring",
    steps: [
      { step: "01", label: "Role brief & intake",   desc: "Align on requirements, timelines, compensation bands, and culture fit." },
      { step: "02", label: "Targeted sourcing",     desc: "Active and passive candidate search across networks and databases." },
      { step: "03", label: "Multi-stage screening", desc: "Skills test, behavioural interview, reference and background checks." },
      { step: "04", label: "Placement & onboard",   desc: "Offer management, documentation, and structured first-90-days support." },
    ],
    tags: ["Contract Hiring", "Permanent Placement", "Executive Search", "Bulk Onboarding", "Tech Staffing", "Ops Staffing", "Specialist Roles", "Background Checks"],
  },

  trust: {
    body:  "Placing talent across technology, operations, marketing, and design — trusted by businesses that can't afford bad hires and won't accept slow ones.",
    image: "/assets/asset-040.png",
  },

  team: {
    heading:    "Talent Acquisition Team",
    subheading: "Talent Partners · Sourcing Specialists · Screening Leads",
    body:       "Our staffing practice combines experienced talent partners with structured sourcing technology and a role-specific screening framework built over nearly a decade. We've placed talent in over 40 industries, and every engagement is managed by a dedicated account lead who knows your business, not just your job description.",
    photo:      "/assets/asset-067.jpg",
    stats: [
      { label: "Talent Partners",  n: "8+" },
      { label: "Placements/Year",  n: "400+" },
      { label: "Retention Rate",   n: "91%" },
      { label: "Industries",       n: "40+" },
    ],
  },

  cta: {
    heading:  "Proven teams. Reliable execution. Real business impact.",
    body:     "From hiring to growth — we deliver with consistency, speed, and quality you can trust.",
    ctaLabel: "Talk to a talent expert",
  },

  testimonials: {
    subheading:       "Talent work that delivers retention, not just placements — clients that come back every time they need to grow.",
    mobileSubheading: "Talent that delivers retention, not just placements.",
    items: [
      {
        name:            "Nikhil Rao",
        role:            "CTO · MediBridge",
        feedback:        "We needed 14 engineers in 8 weeks for a major platform launch. Tekspot delivered 16 quality candidates, we hired 12, and 11 are still with us 18 months later. The screening quality is genuinely different.",
        mobileFeedback:  "16 candidates in 8 weeks. Hired 12, retained 11. The screening quality is genuinely different.",
      },
      {
        name:            "Rohan Nair",
        role:            "Director Operations · RetailNest",
        feedback:        "We needed bulk onboarding support for a seasonal peak. Tekspot ramped 80 temp staff in under 3 weeks with full compliance documentation. Zero hiring bottlenecks when we needed it most.",
        mobileFeedback:  "80 staff in 3 weeks, full compliance. Zero hiring bottlenecks at peak.",
      },
      {
        name:            "Aarav Mehta",
        role:            "VP Marketing · NovaFin",
        feedback:        "Our internal TA team was overwhelmed. Tekspot's embedded model gave us the capacity we needed without the overhead of building a larger internal function. The quality of shortlists was consistently high.",
        mobileFeedback:  "Embedded capacity with high shortlist quality. No internal overhead.",
      },
    ],
  },

  contact: {
    heading:  "Let's find the right talent for your team",
    body:     "Tell us your role requirements and we'll set up a 30-minute discovery call.",
    formId:   "st",
    ctaLabel: "Submit",
  },
};
