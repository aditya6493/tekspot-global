import type { Metadata } from "next";
import { PrivacyPage } from "@/features/legal/privacy-page";
import { SiteHeader } from "@/shared/components/site-header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Tekspot privacy policy and data handling practices.",
};

export default function PrivacyRoute() {
  return (
    <>
      <SiteHeader />
      <PrivacyPage />
    </>
  );
}

