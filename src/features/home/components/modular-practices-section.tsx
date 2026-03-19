import { Section } from "@/shared/components/ui/section";

const practices = [
  "Keep route files (`app/*/page.tsx`) thin and compose from `features/*`.",
  "Export feature APIs through index files to avoid deep imports.",
  "Put cross-feature utilities in `shared/lib` and generic UI in `shared/components/ui`.",
  "Store static config in `config/*` and avoid magic strings across modules.",
] as const;

export function ModularPracticesSection() {
  return (
    <Section className="space-y-4">
      <h2 className="text-xl font-semibold">Modular code practices</h2>
      <ol className="list-decimal space-y-2 pl-5 text-sm text-black/75 dark:text-white/80">
        {practices.map((practice) => (
          <li key={practice}>{practice}</li>
        ))}
      </ol>
    </Section>
  );
}

