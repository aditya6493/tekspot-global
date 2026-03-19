import type { Metadata } from "next";
import { DigitalMarketingPage } from "@/features/services/digital-marketing/digital-marketing-page";
import { SiteHeader } from "@/shared/components/site-header";

export const metadata: Metadata = {
  title: "Digital Marketing & Growth",
  description:
    "Tekspot's Digital Marketing & Growth service — performance ad campaigns, SEO, content marketing, and lifecycle automation. Data-driven, full-funnel, revenue-accountable.",
};

export default function DigitalMarketingRoute() {
  return (
    <>
      <SiteHeader />
      <DigitalMarketingPage />
    </>
  );
}
