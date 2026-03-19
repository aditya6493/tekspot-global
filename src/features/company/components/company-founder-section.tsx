const founderPhoto = "/assets/company-founder.webp";
const iconLinkedIn = "/assets/company-icon-linkedin-fill.svg";
const iconX = "/assets/company-icon-x.svg";

const gridStyle: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(to right,rgba(0,0,0,0.05) 1px,transparent 1px),linear-gradient(to bottom,rgba(0,0,0,0.05) 1px,transparent 1px)",
  backgroundSize: "3.57% 22.86%",
  backgroundPosition: "top",
  backgroundRepeat: "repeat-x",
};

export function CompanyFounderSection() {
  return (
    <section className="relative overflow-hidden rounded-[8px] bg-white">
      {/* Decorative grid at top */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-[128px]"
        style={gridStyle}
      />

      <div className="relative z-10 flex flex-col gap-8 p-8 md:flex-row md:items-start md:gap-[80px] md:p-14">
        {/* Founder photo */}
        <div className="relative aspect-[447/559] w-full shrink-0 overflow-hidden rounded-[8px] md:w-[40%] lg:w-[360px]">
          <div className="absolute inset-0 bg-[#ededed]" />
          <img
            alt="Tekspot Founder"
            className="absolute inset-0 h-full w-full object-cover"
            src={founderPhoto}
          />
        </div>

        {/* Bio */}
        <div className="flex flex-col justify-end gap-4 md:pt-32 md:pb-0">
          <h3 className="font-sans text-[22px] font-semibold leading-[28.8px] text-[#1c1c1e] md:text-[24px]">
            Krishna Samanth
          </h3>

          <div className="flex items-center justify-between gap-4">
            <p className="font-sans text-[16px] text-[#1c1c1e] md:text-[18px] md:leading-[27px]">
              Founder &amp; CEO
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[16px] w-[16px] items-center justify-center opacity-70 transition-opacity hover:opacity-100"
                aria-label="LinkedIn"
              >
                <img alt="LinkedIn" className="h-full w-full" src={iconLinkedIn} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[16px] w-[16px] items-center justify-center opacity-70 transition-opacity hover:opacity-100"
                aria-label="X (Twitter)"
              >
                <img alt="X" className="h-full w-full" src={iconX} />
              </a>
            </div>
          </div>

          <p className="font-sans text-[14px] leading-[22.4px] text-[#7d7d7d] md:text-[16px]">
            Built Tekspot as a single integrated model that combines staffing, strategy, digital marketing, and engineering into one delivery system. Started with talent operations and expanded to cover the full growth stack — serving clients across technology, BFSI, healthcare, and retail. Focused on building teams and systems that execute consistently and scale without breaking down.
          </p>
        </div>
      </div>
    </section>
  );
}
