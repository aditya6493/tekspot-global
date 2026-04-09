import type { ServicePageData } from "@/features/services/shared/types";

export type ServiceProcessSectionProps = {
  process: ServicePageData["process"];
};

/**
 * Shared “process / how it works” block for all service pages — fixed 160px vertical padding.
 */
export function ServiceProcessSection({ process }: ServiceProcessSectionProps) {
  const processPanelBgClass = process.panelBackgroundClassName ?? "bg-[#f7f7f7]";
  const stepBorderClass = process.useLightText ? "border-white/20" : "border-[#ddd]";
  const stepNumberClass = process.useLightText ? "text-[#d7b4e0]" : "text-[#ae7cb6]";
  const stepLabelClass = process.useLightText ? "text-white" : "text-[#1c1c1e]";
  const stepDescClass = process.useLightText ? "text-white/80" : "text-[#7d7d7d]";

  return (
    <section className="overflow-hidden bg-white py-20 md:py-[120px] lg:py-[160px]">
      <div className="mx-auto w-full max-w-[1374px] px-4 md:px-6">
        <div className="flex flex-col gap-[48px] lg:flex-row lg:items-center lg:gap-[80px]">
          <div className="flex flex-col items-start gap-[24px] lg:max-w-[480px]">
            <h2 className="font-sans text-[36px] font-medium leading-[1.18] tracking-[-0.48px] text-[#1c1c1e] lg:text-[48px]">
              {process.heading}
            </h2>
            <p className="font-sans text-[17px] leading-[27px] text-[#7d7d7d] lg:text-[18px]">
              {process.body}
            </p>
            <a
              className="flex h-[48px] items-center gap-2 border border-[#340c3b] bg-[#340c3b] px-[24px] font-sans text-[15px] font-medium text-white transition-opacity hover:opacity-90"
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

          <div className="flex flex-1 flex-col">
            <div className={`${processPanelBgClass} overflow-hidden rounded-[4px] border border-[#340c3b]/10`}>
              {process.steps.map((step, i) => (
                <div
                  key={step.step}
                  className={`flex items-start gap-[20px] px-[28px] py-[24px] ${
                    i < process.steps.length - 1 ? `border-b ${stepBorderClass}` : ""
                  }`}
                >
                  <span
                    className={`mt-0.5 shrink-0 font-sans text-[13px] font-semibold tracking-[1px] ${stepNumberClass}`}
                  >
                    {step.step}
                  </span>
                  <div className="flex flex-col gap-[4px]">
                    <p className={`font-sans text-[17px] font-medium leading-[1.3] ${stepLabelClass}`}>
                      {step.label}
                    </p>
                    <p className={`font-sans text-[14px] leading-[22px] ${stepDescClass}`}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-[20px] flex flex-wrap gap-[8px]">
              {process.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[2px] border border-[#340c3b]/20 bg-white px-[12px] py-[6px] font-sans text-[12px] font-medium tracking-[0.3px] text-[#340c3b]"
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
