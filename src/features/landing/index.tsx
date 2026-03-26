import FigmaDesktopLanding from "@/features/landing/components/figma-desktop";
import { FaqSection } from "@/features/landing/components/faq-section";
import { LandingEngagementSections } from "@/features/landing/components/landing-engagement-sections";
import FigmaMobileLanding from "@/features/landing/components/figma-mobile";
import { SiteHeader } from "@/shared/components/site-header";

export function LandingPage() {
  return (
    <>
      <SiteHeader />
      <div className="hidden md:block">
        <div className="mx-auto w-[1470px] max-w-full">
          <FigmaDesktopLanding />
        </div>
      </div>
      <div className="-mt-[136px] md:hidden">
        <div className="w-full">
          <FigmaMobileLanding />
        </div>
      </div>
      <LandingEngagementSections />
      <FaqSection />
    </>
  );
}

