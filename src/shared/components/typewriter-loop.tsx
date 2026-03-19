"use client";

import { useEffect, useMemo, useState } from "react";

type TypewriterLoopProps = {
  words: string[];
  className?: string;
};

export function TypewriterLoop({ words, className }: TypewriterLoopProps) {
  const safeWords = useMemo(
    () => (words.length > 0 ? words : ["Staffing"]),
    [words],
  );

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = safeWords[wordIndex % safeWords.length];

    const typingSpeed = isDeleting ? 45 : 90;
    const pauseAtFullWord = 1000;
    const pauseBeforeNextWord = 250;

    let timeoutMs = typingSpeed;

    if (!isDeleting) {
      const nextText = currentWord.slice(0, displayText.length + 1);
      if (nextText !== displayText) {
        const timer = window.setTimeout(() => setDisplayText(nextText), timeoutMs);
        return () => window.clearTimeout(timer);
      }
      timeoutMs = pauseAtFullWord;
      const timer = window.setTimeout(() => setIsDeleting(true), timeoutMs);
      return () => window.clearTimeout(timer);
    }

    const nextText = currentWord.slice(0, Math.max(displayText.length - 1, 0));
    if (nextText !== displayText) {
      const timer = window.setTimeout(() => setDisplayText(nextText), timeoutMs);
      return () => window.clearTimeout(timer);
    }

    timeoutMs = pauseBeforeNextWord;
    const timer = window.setTimeout(() => {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % safeWords.length);
    }, timeoutMs);
    return () => window.clearTimeout(timer);
  }, [displayText, isDeleting, safeWords, wordIndex]);

  return (
    <span className={className}>
      {displayText}
      <span className="ml-1 inline-block animate-pulse text-white">|</span>
    </span>
  );
}
