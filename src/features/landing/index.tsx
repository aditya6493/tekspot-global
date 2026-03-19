import FigmaDesktopLanding from "@/features/landing/components/figma-desktop";
import FigmaMobileLanding from "@/features/landing/components/figma-mobile";
import { SiteHeader } from "@/shared/components/site-header";

export function LandingPage() {
  return (
    <>
      <SiteHeader />
      <div className="hidden overflow-x-clip md:block">
        <div className="mx-auto w-[1470px]">
          <FigmaDesktopLanding />
        </div>
      </div>
      <div className="-mt-[136px] overflow-x-clip md:hidden">
        <div className="w-full">
          <FigmaMobileLanding />
        </div>
      </div>
    </>
  );
}

