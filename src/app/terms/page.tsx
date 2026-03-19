import type { Metadata } from "next";
import { TermsPage } from "@/features/legal/terms-page";
import { SiteHeader } from "@/shared/components/site-header";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read Tekspot terms and conditions for website use and service communication.",
};

export default function TermsRoute() {
  return (
    <>
      <SiteHeader />
      <TermsPage />
    </>
  );
}

