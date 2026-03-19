import { folderGuide } from "@/features/home/data/highlights";
import { Section } from "@/shared/components/ui/section";

export function FolderStructureSection() {
  return (
    <Section className="space-y-4">
      <h2 className="text-xl font-semibold">Recommended folder structure</h2>
      <ul className="space-y-2 text-sm text-black/75 dark:text-white/80">
        {folderGuide.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Section>
  );
}

