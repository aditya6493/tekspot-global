const valuesBg = "/assets/company-values-bg.webp";

export function CompanyValuesSection() {
  return (
    <section className="overflow-hidden rounded-none bg-white p-6 md:p-8">
      <div className="relative overflow-hidden rounded-none bg-[#f0f0f0] px-6 py-8 md:px-[24px] md:py-[32px]">
        {/* Background gradient image */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-none">
          <img
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
            src={valuesBg}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-sans text-[16px] leading-[28.8px] text-[#1c1c1e] md:text-[24px]">
              What we value
            </p>
            <h2 className="font-sans text-[28px] font-semibold leading-tight tracking-[-0.02em] text-[#1c1c1e] md:text-[40px] md:leading-[1.2] lg:text-[48px] lg:leading-[57.6px] lg:tracking-[-0.48px]">
              Velocity. Precision. Design. Execution.
            </h2>
          </div>

          <a
            href="mailto:business@tekspotglobal.com"
            className="shrink-0 font-sans text-[14px] font-medium leading-[24px] text-[#1c1c1e] underline underline-offset-4 transition hover:opacity-70 md:text-[16px]"
          >
            business@tekspotglobal.com
          </a>
        </div>
      </div>
    </section>
  );
}
