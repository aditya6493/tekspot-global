const companyHeroVideoSrc = "/videos/video-8.webm";

export function CompanyHeroSection() {
  return (
    <section className="flex flex-col gap-[16px] overflow-hidden bg-transparent md:gap-[24px] md:rounded-[8px] md:bg-white">

      {/* ── Label ─────────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-[7.4px] px-0 pt-4 md:px-[32px] md:pt-[32px]">
        <p className="font-sans text-[15px] leading-[27px] text-[#7d7d7d] md:text-[18px]">
          COMPANY
        </p>
      </div>

      {/* ── Dark gradient panel ──────────────────────────────────────── */}
      <div className="relative mx-0 mb-4 overflow-hidden rounded-[8px] bg-[#1c1c1e] md:mx-[32px] md:mb-[32px]">
        <video
          aria-hidden
          autoPlay
          className="pointer-events-none absolute inset-0 z-0 size-full object-cover"
          loop
          muted
          playsInline
          src={companyHeroVideoSrc}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-[#2a1a30]/22 via-[#1c1c1e]/18 to-[#0f0f10]/25"
        />

        {/* Panel content */}
        <div className="relative z-10 flex flex-col gap-8 px-4 py-8 md:flex-row md:items-center md:gap-[48px] md:px-[32px] md:py-[56px] lg:gap-[80px]">

          {/* Left: eyebrow + heading + body */}
          <div className="flex flex-1 flex-col gap-4 md:max-w-[550px]">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-white/80 md:text-[12px] md:tracking-[-0.12px]">
              YOUR GOALS. OUR EXECUTION.
            </p>
            <h2 className="font-sans text-[32px] font-semibold leading-[1.2] tracking-[-0.02em] text-white md:text-[40px] md:leading-[48px] md:tracking-[-0.48px] lg:text-[48px] lg:leading-[57.6px]">
              We help teams move faster.
            </h2>
            <p className="font-sans text-[15px] leading-[1.6] text-white/80 md:text-[18px] md:leading-[27px]">
              One partner for hiring, design, marketing, and development.
            </p>
          </div>

          {/* Right: testimonial card */}
          <div className="relative shrink-0 rounded-[16px] bg-white p-4 md:w-[420px] md:p-[32px] lg:w-[486px]">
            <blockquote className="font-sans text-[16px] leading-[30px] tracking-[-0.02em] text-[#1c1c1e] md:text-[18px] md:tracking-[-0.2px]">
              "Tekspot became an extension of our team almost immediately. We got hiring, design, and marketing running in parallel — without managing three vendors."
            </blockquote>
            <div className="mt-6">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-[#1c1c1e]/60 md:text-[12px] md:tracking-[-0.12px]">
                VP of Operations
              </p>
              <p className="mt-0.5 font-sans text-[12px] tracking-[-0.12px] text-[#1c1c1e]">
                Mid-market Technology Company
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
