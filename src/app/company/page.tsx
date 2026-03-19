import type { Metadata } from "next";
import { CompanyPage } from "@/features/company/company-page";
import { SiteHeader } from "@/shared/components/site-header";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Learn about Tekspot's mission, service model, leadership principles, and delivery approach.",
};

export default function CompanyRoute() {
  return (
    <>
      <SiteHeader />
      <CompanyPage />
    </>
  );
}

