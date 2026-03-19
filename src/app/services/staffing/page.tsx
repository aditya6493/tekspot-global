import type { Metadata } from "next";
import { StaffingPage } from "@/features/services/staffing/staffing-page";
import { SiteHeader } from "@/shared/components/site-header";

export const metadata: Metadata = {
  title: "Talent / Staffing",
  description:
    "Tekspot's Talent & Staffing service — contract hiring, permanent placement, bulk workforce onboarding, and role-based screening. Quality-first talent delivered at speed.",
};

export default function StaffingRoute() {
  return (
    <>
      <SiteHeader />
      <StaffingPage />
    </>
  );
}
