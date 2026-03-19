import type { Metadata } from "next";
import { DesignStrategyPage } from "@/features/services/design-strategy/design-strategy-page";
import { SiteHeader } from "@/shared/components/site-header";

export const metadata: Metadata = {
  title: "Design & Strategy",
  description:
    "Tekspot's Design & Strategy service — UX/UI design, design systems, brand strategy, and conversion optimisation. Design-led thinking with business-first execution.",
};

export default function DesignStrategyRoute() {
  return (
    <>
      <SiteHeader />
      <DesignStrategyPage />
    </>
  );
}
