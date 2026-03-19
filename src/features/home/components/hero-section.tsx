import Link from "next/link";
import { Badge } from "@/shared/components/ui/badge";

export function HeroSection() {
  return (
    <section className="space-y-6">
      <Badge>Next.js 16 + React 19</Badge>
      <div className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Scalable Next.js starter with modular architecture
        </h1>
        <p className="max-w-2xl text-base text-black/70 dark:text-white/75 sm:text-lg">
          This project is organized for growth: routes are thin, feature modules
          are self-contained, and shared building blocks stay reusable.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black"
        >
          Read Next.js docs
        </Link>
        <Link
          href="https://tailwindcss.com/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium transition hover:bg-black/[0.04] dark:border-white/20 dark:hover:bg-white/10"
        >
          Tailwind reference
        </Link>
      </div>
    </section>
  );
}

