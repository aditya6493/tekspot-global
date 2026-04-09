"use client";

import { useEffect, useRef } from "react";

type AutoplayVideoProps = {
  src: string;
  className?: string;
  poster?: string;
};

/**
 * Mobile Safari can block muted autoplay in some device states
 * (e.g. low-power mode). We retry on visibility and first touch.
 */
export function AutoplayVideo({ src, className, poster }: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      const result = video.play();
      if (result && typeof result.catch === "function") {
        result.catch(() => {
          // best-effort autoplay only
        });
      }
    };

    tryPlay();

    const onVisibility = () => {
      if (!document.hidden) tryPlay();
    };

    const onFirstGesture = () => {
      tryPlay();
      window.removeEventListener("touchstart", onFirstGesture);
      window.removeEventListener("click", onFirstGesture);
    };

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pageshow", tryPlay);
    window.addEventListener("touchstart", onFirstGesture, { passive: true });
    window.addEventListener("click", onFirstGesture);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pageshow", tryPlay);
      window.removeEventListener("touchstart", onFirstGesture);
      window.removeEventListener("click", onFirstGesture);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      aria-hidden
      autoPlay
      className={className}
      disablePictureInPicture
      loop
      muted
      playsInline
      poster={poster}
      preload="auto"
      src={src}
      x-webkit-airplay="deny"
    />
  );
}
