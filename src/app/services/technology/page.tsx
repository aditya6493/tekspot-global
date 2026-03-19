import type { Metadata } from "next";
import { TechnologyPage } from "@/features/services/technology/technology-page";
import { SiteHeader } from "@/shared/components/site-header";

export const metadata: Metadata = {
  title: "Web & App Development",
  description:
    "Tekspot's Web & App Development service — responsive web platforms, mobile app engineering, API design, and backend integration. Production-grade technology delivered in agile sprints.",
};

export default function TechnologyRoute() {
  return (
    <>
      <SiteHeader />
      <TechnologyPage />
    </>
  );
}
