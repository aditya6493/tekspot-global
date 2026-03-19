import { highlights } from "@/features/home/data/highlights";
import { Section } from "@/shared/components/ui/section";

export function HighlightsSection() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {highlights.map((item) => (
        <Section key={item.title} className="space-y-2">
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p className="text-sm text-black/70 dark:text-white/75">
            {item.description}
          </p>
        </Section>
      ))}
    </div>
  );
}

