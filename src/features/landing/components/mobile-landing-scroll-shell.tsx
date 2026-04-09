"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

/** Top offset of the “How we work and trust” column in the mobile layout (px). */
export const MOBILE_LANDING_STACK_TOP = 3082;

type MobileLandingScrollShellProps = {
  children: ReactNode;
};

/**
 * Absolute layers do not expand the document height. Measure the real stacked column
 * (`#mobile-landing-stack`) and set this wrapper’s min-height so content below the
 * canvas (e.g. engagement sections) remains reachable when scrolling.
 */
export function MobileLandingScrollShell({
  children,
}: MobileLandingScrollShellProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [minHeightPx, setMinHeightPx] = useState<number | null>(null);

  useLayoutEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const stack = root.querySelector<HTMLElement>("#mobile-landing-stack");
    if (!stack) return;

    const update = () => {
      setMinHeightPx(MOBILE_LANDING_STACK_TOP + stack.offsetHeight + 24);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(stack);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-white"
      style={{
        minHeight:
          minHeightPx ?? MOBILE_LANDING_STACK_TOP + 1200,
      }}
    >
      {children}
    </div>
  );
}
