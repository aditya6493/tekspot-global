import type { Metadata } from "next";
import { CareersPage } from "@/features/careers/careers-page";
import { SiteHeader } from "@/shared/components/site-header";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore careers at Tekspot across staffing, design, engineering, and growth teams.",
};

export default function CareersRoute() {
  return (
    <>
      <SiteHeader />
      <CareersPage />
    </>
  );
}

