"use client";

import { useEffect } from "react";

export function ScrollStateClass() {
  useEffect(() => {
    const root = document.documentElement;

    const onScroll = () => {
      root.classList.toggle("is-scrolled", window.scrollY > 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      root.classList.remove("is-scrolled");
    };
  }, []);

  return null;
}

