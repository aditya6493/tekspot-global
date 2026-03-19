import { FolderStructureSection } from "@/features/home/components/folder-structure-section";
import { HeroSection } from "@/features/home/components/hero-section";
import { HighlightsSection } from "@/features/home/components/highlights-section";
import { ModularPracticesSection } from "@/features/home/components/modular-practices-section";

export function HomePageView() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-100">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 sm:px-10 sm:py-16">
        <HeroSection />
        <HighlightsSection />
        <FolderStructureSection />
        <ModularPracticesSection />
      </main>
    </div>
  );
}

