import type { ComponentProps } from "react";
import { cn } from "@/shared/lib/cn";

type BadgeProps = ComponentProps<"span">;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs font-medium tracking-wide text-black/70",
        "dark:border-white/20 dark:bg-white/10 dark:text-white/80",
        className
      )}
      {...props}
    />
  );
}

