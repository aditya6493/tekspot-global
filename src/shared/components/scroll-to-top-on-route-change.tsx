"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTopOnRouteChange() {
  const pathname = usePathname();

  useEffect(() => {
    // Preserve hash-based jumps like "/#what-we-do".
    if (window.location.hash) {
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
