"use client";

import { useEffect, useRef, useState } from "react";

const ROTATING_WORDS = [
  "digital",
  "integriert",
  "individuell",
  "transparent",
  "zuverlässig",
  "intuitiv",
  "benutzerfreundlich",
];

const WORDMARK_DURATION = 3600;
const WORD_DURATION = 2200;
const WIDTH_DURATION = 380;
const FADE_DURATION = 240;

export default function RotatingHeadline() {
  const measureRef = useRef<HTMLSpanElement>(null);

  const [showWordmark, setShowWordmark] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);
  const [wrapWidth, setWrapWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const delay = showWordmark
      ? WORDMARK_DURATION
      : WORD_DURATION * ROTATING_WORDS.length;
    const timer = setTimeout(() => setShowWordmark((v) => !v), delay);
    return () => clearTimeout(timer);
  }, [showWordmark]);

  useEffect(() => {
    if (showWordmark) return;
    const interval = setInterval(() => {
      setWordVisible(false);
      setWrapWidth(0);
    }, WORD_DURATION);
    return () => clearInterval(interval);
  }, [showWordmark]);

  useEffect(() => {
    if (wrapWidth !== 0) return;
    const timeout = setTimeout(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, WIDTH_DURATION);
    return () => clearTimeout(timeout);
  }, [wrapWidth]);

  useEffect(() => {
    if (!measureRef.current) return;
    const newWidth = measureRef.current.offsetWidth;
    const raf = requestAnimationFrame(() => {
      setWrapWidth(newWidth);
      setWordVisible(true);
    });
    return () => cancelAnimationFrame(raf);
  }, [wordIndex]);

  return (
    <div className="relative h-[clamp(44px,5.6vw,80px)] flex items-center justify-center max-w-[94vw] mx-auto">
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-[opacity,transform] duration-550 ease-out will-change-[opacity,transform] ${
          showWordmark
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-2.5 scale-[0.985]"
        }`}
      >
        <div className="flex items-baseline whitespace-nowrap uppercase text-[19px] max-[560px]:text-[19px] sm:text-[clamp(26px,4.6vw,64px)] font-normal tracking-[0.02em] text-(--soft) leading-[1.15]">
          <span className="text-(--soft)">software</span>
          <span className="text-(--primary) font-bold">produktiv</span>
        </div>
      </div>

      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-[opacity,transform] duration-550 ease-out will-change-[opacity,transform] ${
          !showWordmark
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-2.5 scale-[0.985]"
        }`}
      >
        <div className="flex items-baseline whitespace-nowrap uppercase text-[19px] max-[560px]:text-[19px] sm:text-[clamp(26px,4.6vw,64px)] font-normal tracking-[0.02em] text-(--soft) leading-[1.15]">
          <span className="text-(--soft)">innovativ</span>

          <span
            className="relative inline-flex justify-center overflow-hidden transition-[width] duration-380 ease-[cubic-bezier(.3,1.12,.35,1)]"
            style={{ width: wrapWidth }}
          >
            <span
              className={`text-(--primary) font-bold tracking-[0.02em] whitespace-nowrap inline-block transition-opacity duration-240 ease-in-out ${
                wordVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {ROTATING_WORDS[wordIndex]}
            </span>
            <span
              ref={measureRef}
              aria-hidden="true"
              className="text-(--primary) font-bold tracking-[0.02em] whitespace-nowrap absolute left-0 top-0 invisible pointer-events-none"
            >
              {ROTATING_WORDS[wordIndex]}
            </span>
          </span>

          <span className="text-(--soft)">dynamisch</span>
        </div>
      </div>
    </div>
  );
}
