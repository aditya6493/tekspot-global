import type { ComponentProps } from "react";
import { cn } from "@/shared/lib/cn";

type SectionProps = ComponentProps<"section">;

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/20",
        className
      )}
      {...props}
    />
  );
}

