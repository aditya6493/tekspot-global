"use client";

import { useMemo, useRef, useState } from "react";

const imgAvatar = "/assets/asset-069.png";
const imgChevronPrev = "/assets/asset-025.svg";
const imgChevronNext = "/assets/asset-031.svg";

type LandingTestimonial = {
  name: string;
  role: string;
  feedback: string;
  mobileFeedback: string;
};

const testimonials: LandingTestimonial[] = [
  {
    name: "Aarav Mehta",
    role: "VP Marketing. NovaFin",
    feedback:
      "Tekspot helped us launch campaigns faster without compromising quality. Their team aligned with ours in days and delivered results week after week.",
    mobileFeedback:
      "Tekspot helped us launch faster without compromising quality. Their team aligned with ours in days.",
  },
  {
    name: "Sophia Carter",
    role: "Head of Product. CloudAxis",
    feedback:
      "From design to development, execution was smooth and predictable. We reduced delivery bottlenecks and shipped our roadmap with more confidence.",
    mobileFeedback:
      "Execution stayed smooth from design to development. We shipped the roadmap with more confidence.",
  },
  {
    name: "Rohan Nair",
    role: "Director Operations. RetailNest",
    feedback:
      "Their staffing and digital team worked as one unit. Communication was clear, timelines were realistic, and the output quality stayed consistently high.",
    mobileFeedback:
      "Staffing and digital worked as one unit. Communication was clear and quality stayed consistently high.",
  },
  {
    name: "Isabella Kim",
    role: "Growth Lead. SwiftCart",
    feedback:
      "We saw measurable growth in a short time. Tekspot combined strategy and hands-on execution, which made a big difference for our internal teams.",
    mobileFeedback:
      "We saw measurable growth quickly. Strategy plus hands-on execution made a real difference.",
  },
  {
    name: "Nikhil Rao",
    role: "CTO. MediBridge",
    feedback:
      "Reliable execution and strong ownership across every sprint. They understood constraints quickly and delivered solutions that were practical and scalable.",
    mobileFeedback:
      "Reliable delivery in every sprint. They understood constraints fast and shipped practical solutions.",
  },
] as const;

type LandingTestimonialSliderProps = {
  variant?: "desktop" | "mobile";
  items?: LandingTestimonial[];
  layout?: "landing" | "section";
};

export function LandingTestimonialSlider({
  variant = "desktop",
  items,
  layout = "landing",
}: LandingTestimonialSliderProps) {
  const data = (items ?? testimonials) as readonly LandingTestimonial[];

  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);
  const total = data.length;

  const canGoPrev = useMemo(() => total > 1, [total]);
  const canGoNext = useMemo(() => total > 1, [total]);

  const goPrev = () => {
    if (!canGoPrev) return;
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const goNext = () => {
    if (!canGoNext) return;
    setIndex((prev) => (prev + 1) % total);
  };

  const isDesktop = variant === "desktop";

  const isLandingLayout = layout === "landing";
  const wrapperClass = isDesktop
    ? isLandingLayout
      ? "content-stretch flex flex-col gap-[32px] items-end left-[632px] absolute top-[118px] w-[685px]"
      : "content-stretch flex flex-col gap-[32px] items-center relative w-full"
    : "content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full";
  const cardClass = isDesktop
    ? "bg-white border border-[#ae7cb6] border-solid content-stretch flex h-[298px] items-center p-[24px] relative shadow-[-8px_10px_0px_0px_#ae7cb6] shrink-0 w-full"
    : "bg-white border border-[#ae7cb6] border-solid content-stretch flex min-h-[320px] items-start p-[16px] relative shadow-[-6px_12px_0px_0px_#ae7cb6] shrink-0 w-full";
  const slideClass = isDesktop
    ? "content-stretch flex gap-[8px] h-full items-start min-h-px min-w-px relative shrink-0 w-full"
    : "content-stretch flex gap-[10px] items-start min-h-px min-w-px relative shrink-0 w-full";
  const avatarClass = isDesktop
    ? "relative shrink-0 size-[80px]"
    : "relative shrink-0 size-[44.42px]";
  const textWrapClass = isDesktop
    ? "content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-start leading-[0] min-h-px min-w-px px-[16px] py-[8px] relative"
    : "content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[0] min-h-px min-w-px px-[8px] py-[2px] relative";
  const nameClass = isDesktop
    ? "flex flex-col font-sans font-medium justify-center relative shrink-0 text-[#202124] text-[24px] w-full"
    : "flex flex-col font-sans font-bold justify-center relative shrink-0 text-[#202124] text-[24px] w-full";
  const roleClass = isDesktop
    ? "flex flex-col font-sans font-normal justify-center relative shrink-0 text-[#202124] text-[20px] w-full"
    : "flex flex-col font-sans font-medium justify-center relative shrink-0 text-[#202124] text-[16px] w-full";
  const feedbackClass = isDesktop
    ? "flex flex-col font-sans font-light justify-center relative shrink-0 text-[#7d7d7d] text-[20px] w-full"
    : "flex flex-col font-sans font-normal justify-center relative shrink-0 text-[#7d7d7d] text-[16px] w-full";
  const controlsClass = isDesktop
    ? isLandingLayout
      ? "content-stretch flex gap-[24px] items-center relative shrink-0"
      : "content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full"
    : "content-stretch flex gap-[16px] items-center justify-end pb-[6px] relative shrink-0 w-full";

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (isDesktop) return;
    touchStartX.current = event.touches[0]?.clientX ?? null;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (isDesktop || touchStartX.current === null) return;
    const currentX = event.touches[0]?.clientX ?? touchStartX.current;
    touchDeltaX.current = currentX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (isDesktop) return;
    const threshold = 40;
    if (touchDeltaX.current > threshold) {
      goPrev();
    } else if (touchDeltaX.current < -threshold) {
      goNext();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <div className={wrapperClass}>
      <div className={cardClass}>
        <div
          className="h-full relative w-full overflow-hidden touch-pan-y select-none"
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
        >
          <div
            className="flex h-full transition-transform duration-400 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {data.map((item) => (
              <div
                key={`${item.name}-${item.role}`}
                className={slideClass}
              >
                <div className={avatarClass}>
                  <img
                    alt=""
                    className="absolute block max-w-none size-full"
                    height={isDesktop ? "80" : "44.42"}
                    src={imgAvatar}
                    width={isDesktop ? "80" : "44.42"}
                  />
                </div>
                <div className={textWrapClass}>
                  <div className={nameClass}>
                    <p className="leading-[1.4]">{item.name}</p>
                  </div>
                  <div className={roleClass}>
                    <p className="leading-[1.4]">{item.role}</p>
                  </div>
                  <div className={feedbackClass}>
                    <p className="leading-[1.4]">
                      {isDesktop ? item.feedback : item.mobileFeedback}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isDesktop ? (
        <div className={controlsClass}>
          <button
            aria-label="Previous testimonial"
            className="relative flex h-[32px] w-[32.667px] shrink-0 items-center justify-center"
            onClick={goPrev}
            type="button"
          >
            <img alt="" className="absolute block max-w-none size-full rotate-180" src={imgChevronPrev} />
          </button>
          <button
            aria-label="Next testimonial"
            className="relative flex h-[32px] w-[32.667px] shrink-0 items-center justify-center"
            onClick={goNext}
            type="button"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgChevronNext} />
          </button>
        </div>
      ) : null}
    </div>
  );
}
