import type { ReactNode } from "react";

/* ─── atoms ──────────────────────────────────────────────────── */

export type ServiceIcon = ReactNode;

export type ServiceDeliverable = {
  eyebrow: string;
  title: string;
  desc: string;
  icon: ServiceIcon;
};

export type ServiceApproachCard = {
  heading: string;
  body: string;
  icon: ServiceIcon;
};

export type ServiceProcessStep = {
  step: string;
  label: string;
  desc: string;
};

export type ServiceTeamStat = {
  label: string;
  n: string;
};

export type ServiceTestimonial = {
  name: string;
  role: string;
  feedback: string;
  mobileFeedback: string;
};

/* ─── full page data shape ───────────────────────────────────── */

export type ServicePageData = {
  /** Short label shown in the breadcrumb eyebrow, e.g. "Design & Strategy" */
  label: string;

  hero: {
    /** Small all-caps sub-line above the H1 */
    eyebrow: string;
    /** H1 — can contain <br /> for line breaks */
    heading: ReactNode;
    body: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
    /** Looping background video path under /public */
    video: string;
    /** Poster image shown before video loads */
    poster: string;
    testimonial: {
      /** Small icon/image next to the badge label */
      icon: string;
      badgeLabel: string;
      quote: string;
      authorRole: string;
      authorCompany: string;
    };
  };

  deliverables: {
    heading: string;
    items: ServiceDeliverable[];
  };

  approach: {
    eyebrow: string;
    heading: ReactNode;
    body: string;
    cards: ServiceApproachCard[];
  };

  process: {
    heading: ReactNode;
    body: string;
    ctaLabel: string;
    steps: ServiceProcessStep[];
    /** Capability tags rendered as pills */
    tags: string[];
  };

  trust: {
    body: string;
    /** Image shown on the right side of the trust section */
    image: string;
  };

  team: {
    heading: string;
    subheading: string;
    body: string;
    photo: string;
    stats: ServiceTeamStat[];
  };

  cta: {
    heading: string;
    body: string;
    ctaLabel: string;
  };

  testimonials: {
    subheading: string;
    mobileSubheading: string;
    items: ServiceTestimonial[];
  };

  contact: {
    heading: string;
    body: string;
    /** Unique prefix for form input IDs to avoid collisions */
    formId: string;
    ctaLabel: string;
  };
};
