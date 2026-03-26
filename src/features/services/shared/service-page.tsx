"use client";

import { useRef, useState } from "react";
import type { ServicePageData, ServiceTestimonial } from "./types";
import { TrustBandSection } from "./trust-band-section";
import { LandingTestimonialSlider } from "@/features/landing/components/testimonial-slider";

/* ─── shared static assets ───────────────────────────────────── */
const imgAvatar      = "/assets/asset-069.png";
const imgChevronPrev = "/assets/asset-025.svg";
const imgChevronNext = "/assets/asset-031.svg";
// Trust-from-leaders logos (same as landing page)
const imgImage12 = "/assets/asset-015.png";
const imgImage8  = "/assets/asset-074.png";
const imgImage6  = "/assets/asset-064.png";
const imgImage7  = "/assets/asset-003.png";
const imgImage10 = "/assets/asset-048.png";
const imgImage11 = "/assets/asset-024.png";
const imgImage13 = "/assets/asset-056.png";
const imgImage14 = "/assets/asset-034.png";
const imgImage15 = "/assets/asset-059.png";

const trustLeaderCards = [
  { src: imgImage12, frameClass: "h-[28px] w-[216.468px]" },
  { src: imgImage8,  frameClass: "aspect-[300/200] w-full" },
  { src: imgImage6,  frameClass: "h-[72px] w-[134px]" },
  { src: imgImage7,  frameClass: "h-[74px] w-[180px]" },
  { src: imgImage10, frameClass: "h-[52px] w-[198px]" },
  { src: imgImage11, frameClass: "h-[42px] w-[166px]" },
  { src: imgImage13, frameClass: "h-[34.644px] w-[184px]" },
  { src: imgImage14, frameClass: "h-[61.278px] w-[188px]" },
  { src: imgImage15, frameClass: "h-[56px] w-[210px]" },
] as const;

/* ═══════════════════════════════════════════════════════════════
   SECTION: Hero
═══════════════════════════════════════════════════════════════ */
function HeroSection({ data }: { data: ServicePageData }) {
  const { hero, label } = data;
  return (
    <section className="flex flex-col gap-[24px] overflow-hidden bg-white">
      {/* breadcrumb eyebrow */}
      <div className="px-6 pt-6 md:px-8 md:pt-8">
        <p className="font-sans text-[14px] font-medium tracking-[1.5px] uppercase text-[#340c3b]">
          {label}
        </p>
      </div>

      {/* dark panel */}
      <div className="relative mx-4 mb-6 overflow-hidden rounded-[8px] bg-[#1c1c1e] md:mx-8 md:mb-8">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#2a1a30] via-[#1c1c1e] to-[#0f0f10]" />

        {/* content row */}
        <div className="relative z-10 flex flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:gap-[48px] md:px-8 md:py-[56px] lg:gap-[80px]">
          {/* left: headline */}
          <div className="flex flex-1 flex-col gap-4 md:max-w-[550px]">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-white/80 md:text-[12px]">
              {hero.eyebrow}
            </p>
            <h1 className="font-sans text-[30px] font-semibold leading-[1.18] tracking-[-0.02em] text-white md:text-[40px] md:leading-[48px] lg:text-[48px] lg:leading-[57.6px]">
              {hero.heading}
            </h1>
            <p className="font-sans text-[15px] leading-[1.6] text-white/80 md:text-[18px] md:leading-[27px]">
              {hero.body}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                className="border border-white bg-white px-5 py-3 text-sm font-medium text-[#340c3b] transition hover:bg-white/90"
                href={hero.ctaPrimary.href}
              >
                {hero.ctaPrimary.label}
              </a>
              <a
                className="border border-white/40 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                href={hero.ctaSecondary.href}
              >
                {hero.ctaSecondary.label}
              </a>
            </div>
          </div>

          {/* right: testimonial card */}
          <div className="relative shrink-0 bg-white p-6 md:w-[420px] md:p-[32px] md:ml-auto lg:w-[480px] lg:ml-auto">
            <div className="mb-3 flex items-center gap-2">
              <div className="relative shrink-0 size-[36px]">
                <img alt="" className="absolute block max-w-none size-full" src={hero.testimonial.icon} />
              </div>
              <span className="font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-[#340c3b]">
                {hero.testimonial.badgeLabel}
              </span>
            </div>
            <blockquote className="font-sans text-[15px] leading-[28px] tracking-[-0.01em] text-[#1c1c1e] md:text-[17px] md:leading-[30px]">
              &ldquo;{hero.testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-5 border-t border-[#f0f0f0] pt-4">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-[#1c1c1e]/60">
                {hero.testimonial.authorRole}
              </p>
              <p className="mt-0.5 font-sans text-[13px] tracking-[-0.12px] text-[#1c1c1e]">
                {hero.testimonial.authorCompany}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: Deliverables (3-column feature cards)
═══════════════════════════════════════════════════════════════ */
function DeliverablesSection({ data }: { data: ServicePageData }) {
  const { deliverables } = data;
  return (
    <section className="bg-white py-[64px] md:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1374px] flex-col items-center gap-[48px] px-4 md:px-6">
        <h2 className="font-sans font-semibold text-[#1c1c1e] text-[36px] lg:text-[48px] tracking-[-0.48px] leading-[1.2] text-center max-w-[700px]">
          {deliverables.heading}
        </h2>
        <div className="flex w-full gap-[16px] overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-[24px] md:overflow-visible md:pb-0">
          {deliverables.items.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#eee] rounded-[8px] flex flex-col overflow-hidden min-w-[350px] md:min-w-0"
            >
              <div className="flex items-center justify-center bg-[#faf6fc] border-b border-[#eee] aspect-square max-h-[280px] p-8">
                <div className="relative size-[120px]">{item.icon}</div>
              </div>
              <div className="flex flex-col gap-[8px] p-[24px] pt-[20px]">
                <p className="font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-[#340c3b]">
                  {item.eyebrow}
                </p>
                <h3 className="font-sans font-medium text-[#1c1c1e] text-[20px] leading-[28px] tracking-[-0.2px]">
                  {item.title}
                </h3>
                <p className="font-sans text-[#7d7d7d] text-[15px] leading-[24px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: Our Approach
═══════════════════════════════════════════════════════════════ */
function ApproachSection({ data }: { data: ServicePageData }) {
  const { approach } = data;
  const sectionBgClass = approach.backgroundClassName ?? "bg-[#f7f7f7]";
  const eyebrowTextClass = approach.useLightText ? "text-white/70" : "text-[#7d7d7d]";
  const headingTextClass = approach.useLightText ? "text-white" : "text-[#1c1c1e]";
  const bodyTextClass = approach.useLightText ? "text-white/80" : "text-[#7d7d7d]";
  return (
    <section className={`${sectionBgClass} py-[64px] md:py-[80px]`} id="approach">
      <div className="mx-auto w-full max-w-[1374px] px-4 md:px-6">
        <div className="flex flex-col gap-[48px] lg:flex-row lg:gap-[80px] lg:items-start">
          {/* left */}
          <div className="flex flex-col gap-[16px] items-start lg:max-w-[490px] lg:sticky lg:top-[120px]">
            <p className={`font-sans text-[14px] uppercase tracking-[1px] leading-[27px] ${eyebrowTextClass}`}>
              {approach.eyebrow}
            </p>
            <h2 className={`font-sans text-[36px] lg:text-[46px] tracking-[-0.48px] leading-[1.18] ${headingTextClass}`}>
              {approach.heading}
            </h2>
            <div className="h-[16px]" />
            <p className={`font-sans text-[17px] lg:text-[18px] leading-[27px] ${bodyTextClass}`}>
              {approach.body}
            </p>
          </div>

          {/* right: cards */}
          <div className="flex flex-1 flex-col">
            <div className="flex w-full gap-[16px] overflow-x-auto pb-2 md:flex-col md:gap-[20px] md:overflow-visible md:pb-0">
              {approach.cards.map((card) => (
                <div
                  key={card.heading}
                  className="bg-white flex flex-col gap-[14px] items-start p-[24px] rounded-[4px] min-w-[320px] md:min-w-0"
                >
                  <div className="flex items-center justify-center size-[48px] border border-[#340c3b]/15 bg-[#f9f2fb] rounded-[8px]">
                    <div className="size-[22px]">{card.icon}</div>
                  </div>
                  <p className="font-sans font-medium text-[#1c1c1e] text-[18px] leading-[27px]">
                    {card.heading}
                  </p>
                  <p className="font-sans text-[#7d7d7d] text-[15px] leading-[24px]">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: Process
═══════════════════════════════════════════════════════════════ */
function ProcessSection({ data }: { data: ServicePageData }) {
  const { process } = data;
  const processPanelBgClass = process.panelBackgroundClassName ?? "bg-[#f7f7f7]";
  const stepBorderClass = process.useLightText ? "border-white/20" : "border-[#ddd]";
  const stepNumberClass = process.useLightText ? "text-[#d7b4e0]" : "text-[#ae7cb6]";
  const stepLabelClass = process.useLightText ? "text-white" : "text-[#1c1c1e]";
  const stepDescClass = process.useLightText ? "text-white/80" : "text-[#7d7d7d]";
  return (
    <section className="bg-white overflow-hidden py-[64px] md:py-[80px]">
      <div className="mx-auto w-full max-w-[1374px] px-4 md:px-6">
        <div className="flex flex-col gap-[48px] lg:flex-row lg:gap-[80px] lg:items-center">
          {/* left */}
          <div className="flex flex-col gap-[24px] items-start lg:max-w-[480px]">
            <h2 className="font-sans text-[#1c1c1e] text-[36px] lg:text-[48px] tracking-[-0.48px] leading-[1.18]">
              {process.heading}
            </h2>
            <p className="font-sans text-[#7d7d7d] text-[17px] lg:text-[18px] leading-[27px]">
              {process.body}
            </p>
            <a
              className="bg-[#340c3b] border border-[#340c3b] flex items-center gap-2 h-[48px] px-[24px] font-sans font-medium text-white text-[15px] hover:opacity-90 transition-opacity"
              href="#contact"
            >
              {process.ctaLabel}
              <svg className="size-[14px]" fill="none" viewBox="0 0 16 16">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </a>
          </div>

          {/* right */}
          <div className="flex flex-1 flex-col">
            <div className={`${processPanelBgClass} overflow-hidden`}>
              {process.steps.map((step, i) => (
                <div
                  key={step.step}
                  className={`flex items-start gap-[20px] px-[28px] py-[24px] ${
                    i < process.steps.length - 1 ? `border-b ${stepBorderClass}` : ""
                  }`}
                >
                  <span className={`font-sans font-semibold text-[13px] tracking-[1px] shrink-0 mt-0.5 ${stepNumberClass}`}>
                    {step.step}
                  </span>
                  <div className="flex flex-col gap-[4px]">
                    <p className={`font-sans font-medium text-[17px] leading-[1.3] ${stepLabelClass}`}>
                      {step.label}
                    </p>
                    <p className={`font-sans text-[14px] leading-[22px] ${stepDescClass}`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* capability tags */}
            <div className="mt-[20px] flex flex-wrap gap-[8px]">
              {process.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-[#340c3b]/20 bg-white font-sans text-[#340c3b] text-[12px] font-medium px-[12px] py-[6px] tracking-[0.3px] rounded-[2px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: Trust / Stats
═══════════════════════════════════════════════════════════════ */
function TrustSection({ data }: { data: ServicePageData }) {
  const { trust } = data;
  return (
    <TrustBandSection
      body={trust.body}
      image={trust.image}
      sectionBackgroundClassName={trust.sectionBackgroundClassName}
    />
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: Team
═══════════════════════════════════════════════════════════════ */
function TeamSection({ data }: { data: ServicePageData }) {
  const { team } = data;
  return (
    <section className="bg-white py-[64px] md:py-[64px] overflow-hidden">
      <div className="mx-auto w-full max-w-[1374px]">
        <div className="flex flex-col lg:flex-row lg:min-h-[520px]">
          {/* photo */}
          <div className="relative h-[320px] lg:h-auto lg:w-[420px] shrink-0 overflow-hidden bg-[#ededed]">
            <img
              alt={team.heading}
              className="absolute h-[120%] left-0 max-w-none top-[-10%] w-full object-cover"
              src={team.photo}
            />
          </div>

          {/* content */}
          <div className="flex flex-col items-start justify-end px-6 py-8 lg:px-[56px] lg:py-[56px] flex-1">
            <h3 className="font-sans font-bold text-[#1c1c1e] text-[22px] lg:text-[24px] leading-[1.2] mb-2">
              {team.heading}
            </h3>
            <p className="font-sans text-[#1c1c1e] text-[16px] lg:text-[18px] leading-[27px] mb-4 whitespace-pre-line">
              {team.subheading}
            </p>
            <p className="font-sans text-[#7d7d7d] text-[15px] lg:text-[16px] leading-[22px] max-w-[640px]">
              {team.body}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {team.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border border-[#340c3b]/10 p-4 rounded-[4px]"
                >
                  <p className="font-sans font-bold text-[#340c3b] text-[24px] leading-[1]">
                    {stat.n}
                  </p>
                  <p className="font-sans text-[#7d7d7d] text-[12px] leading-[18px] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: Dark CTA
═══════════════════════════════════════════════════════════════ */
function CtaSection({ data }: { data: ServicePageData }) {
  const { cta } = data;
  return (
    <section className="mx-auto mt-[80px] w-full max-w-[1374px] px-4 pt-[24px] pb-0 md:px-6">
      <div className="bg-[#1c1c1e] overflow-hidden relative rounded-[8px] px-[32px] py-[56px] lg:px-[56px]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#2a1a30] via-[#1c1c1e] to-[#0f0f10] opacity-60" />

        <div className="relative z-10 flex flex-col gap-[16px] items-start">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-white/70">
            TRUST CENTER
          </p>
          <h2 className="font-sans font-medium text-white text-[32px] lg:text-[48px] tracking-[-0.48px] leading-[1.18] max-w-[700px]">
            {cta.heading}
          </h2>
          <p className="font-sans text-white/80 text-[18px] lg:text-[24px] leading-[1.4] max-w-[640px]">
            {cta.body}
          </p>
          <div className="h-[32px]" />
          <a
            className="bg-white border border-[#340c3b] flex h-[56px] items-center justify-center px-[32px] shadow-[0px_8px_0px_0px_#626262] font-sans font-medium text-[#202124] text-[16px] hover:opacity-90 transition-opacity"
            href="#contact"
          >
            {cta.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: Client logos marquee
═══════════════════════════════════════════════════════════════ */
function ClientLogosSection() {
  return (
    <section className="mx-auto w-full max-w-[1374px] px-4 pt-[8px] pb-[24px] md:px-6">
      <div className="flex flex-col gap-[28px] items-center overflow-hidden py-[40px]">
        <p className="font-sans font-bold text-[#1c1c1e] text-[18px] lg:text-[20px] leading-[27px]">
          Trusted by leaders
        </p>
        <div className="clients-marquee w-full">
          <div className="clients-marquee-track">
            {[...trustLeaderCards, ...trustLeaderCards].map((item, index) => (
              <div
                key={`${item.src}-${index}`}
                className="bg-white border-[#bababa] border-[0.5px] border-solid flex h-[96px] w-[240px] shrink-0 items-center justify-center px-[48px] py-[24px]"
              >
                <div className={`${item.frameClass} relative shrink-0`}>
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                    src={item.src}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({ data }: { data: ServicePageData }) {
  const { testimonials } = data;
  return (
    <section className="bg-white relative overflow-hidden rounded-[8px] mx-auto max-w-[1374px] md:mx-4 lg:mx-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#340c3b 1px,transparent 1px),linear-gradient(90deg,#340c3b 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* desktop */}
      <div className="hidden lg:flex h-[560px] flex-col items-center justify-center px-[80px]">
        <div className="max-w-[1040px] w-full flex flex-col items-center gap-[32px]">
          <div className="flex flex-col items-center text-center max-w-[560px]">
            <h2 className="font-sans font-bold text-[#1c1c1e] text-[36px] tracking-[-0.48px] leading-[1.3]">
              What our clients say
            </h2>
            <p className="mt-3 font-sans text-[#7d7d7d] text-[18px] leading-[27px]">
              {testimonials.subheading}
            </p>
          </div>
          <div className="w-[620px]">
            <LandingTestimonialSlider variant="desktop" items={testimonials.items} layout="section" />
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="relative lg:hidden px-4 py-8 flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[12px]">
          <h2 className="font-sans font-bold text-[#1c1c1e] text-[28px] tracking-[-0.48px] leading-[1.3]">
            What our clients say
          </h2>
          <p className="font-sans text-[#7d7d7d] text-[16px] leading-[26px]">
            {testimonials.mobileSubheading}
          </p>
        </div>
        <LandingTestimonialSlider variant="mobile" items={testimonials.items} layout="section" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: Contact form
═══════════════════════════════════════════════════════════════ */
function ContactFormSection({ data }: { data: ServicePageData }) {
  const { contact } = data;
  const [subscribed, setSubscribed] = useState(false);
  const id = contact.formId;

  return (
    <section
      className="border border-[#ae7cb6] bg-white flex flex-col gap-[32px] items-start p-[32px] lg:p-[64px] w-full"
      id="contact"
    >
      <div className="flex flex-col gap-[24px] items-start w-full">
        <p className="font-sans text-[#340c3b] text-[13px] tracking-[2px] uppercase leading-[22px]">
          Ready to get started?
        </p>
        <div className="flex flex-col gap-[12px]">
          <h2 className="font-sans font-medium text-black text-[28px] lg:text-[32px] tracking-[-0.8px] leading-[1.3] max-w-[600px]">
            {contact.heading}
          </h2>
          <p className="font-sans font-light text-[#555] text-[18px] leading-[1.5] max-w-[560px]">
            {contact.body}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full">
          <div className="flex flex-col gap-[6px]">
            <label className="font-sans text-[15px] text-black" htmlFor={`${id}-name`}>
              Name <span className="text-[#340c3b] font-bold">*</span>
            </label>
            <input
              className="bg-white border border-[#7d7d7d] h-[48px] px-[14px] w-full font-sans text-[15px] text-[#1c1c1e] focus:outline-none focus:border-[#340c3b] transition-colors"
              id={`${id}-name`}
              placeholder="First name"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className="font-sans text-[15px] text-black" htmlFor={`${id}-company`}>
              Business name
            </label>
            <input
              className="bg-white border border-[#7d7d7d] h-[48px] px-[14px] w-full font-sans text-[15px] text-[#1c1c1e] focus:outline-none focus:border-[#340c3b] transition-colors"
              id={`${id}-company`}
              placeholder="Your company"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className="font-sans text-[15px] text-black" htmlFor={`${id}-email`}>
              Email <span className="text-[#340c3b] font-bold">*</span>
            </label>
            <input
              className="bg-white border border-[#7d7d7d] h-[48px] px-[14px] w-full font-sans text-[15px] text-[#1c1c1e] focus:outline-none focus:border-[#340c3b] transition-colors"
              id={`${id}-email`}
              placeholder="you@company.com"
              type="email"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className="font-sans text-[15px] text-black" htmlFor={`${id}-phone`}>
              Phone <span className="text-[#340c3b] font-bold">*</span>
            </label>
            <input
              className="bg-white border border-[#7d7d7d] h-[48px] px-[14px] w-full font-sans text-[15px] text-[#1c1c1e] focus:outline-none focus:border-[#340c3b] transition-colors"
              id={`${id}-phone`}
              placeholder="+1 (555) 000-0000"
              type="tel"
            />
          </div>
        </div>
      </div>

      <div className="h-px bg-[#e4e4e4] w-full" />

      <div className="flex flex-col gap-[14px] items-start">
        <p className="font-sans font-medium text-[18px] text-black leading-[1.4]">
          Sign up to our newsletter
        </p>
        <label className="flex gap-[10px] items-center cursor-pointer">
          <button
            aria-checked={subscribed}
            className={`shrink-0 size-[16px] border flex items-center justify-center transition-colors ${
              subscribed ? "bg-[#340c3b] border-[#340c3b]" : "bg-white border-[#340c3b]"
            }`}
            onClick={() => setSubscribed((v) => !v)}
            role="checkbox"
            type="button"
          >
            {subscribed && (
              <svg className="size-[10px]" fill="none" viewBox="0 0 10 8">
                <path
                  d="M1 4l3 3 5-6"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            )}
          </button>
          <span className="font-sans text-[#1d2939] text-[14px] leading-[1.4]">
            Send me insights, tools and tips to help my business grow smarter.
          </span>
        </label>
        <p className="font-sans text-[#667085] text-[13px] leading-[1.5]">
          For more information on how we process your data for marketing communication, check our{" "}
          <a className="text-[#340c3b] underline underline-offset-2" href="/privacy">
            Privacy Policy
          </a>
          .
        </p>
      </div>

      <button
        className="bg-white border border-[#ae7cb6] flex h-[48px] items-center justify-center px-[32px] shadow-[-4px_6px_0px_0px_#ae7cb6] font-sans font-medium text-[#202124] text-[16px] hover:bg-[#f9f2fb] transition-colors"
        type="submit"
      >
        {contact.ctaLabel}
      </button>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ROOT: ServicePage — composes all sections in order
   Change the layout here and every service page updates.
═══════════════════════════════════════════════════════════════ */
export function ServicePage({ data }: { data: ServicePageData }) {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#1c1c1e]">
      <HeroSection data={data} />
      <DeliverablesSection data={data} />
      <ApproachSection data={data} />
      <ProcessSection data={data} />
      <TrustSection data={data} />
      <TeamSection data={data} />
      <CtaSection data={data} />
      <ClientLogosSection />
      <TestimonialsSection data={data} />
      <section className="mx-auto w-full max-w-[1278px] px-4 py-[48px] md:px-6 md:py-[80px]">
        <ContactFormSection data={data} />
      </section>
    </div>
  );
}
