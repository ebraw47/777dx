'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export type ScreenshotItem = {
  src: string;
  alt: string;
  title: string;
};

type ScreenshotCarouselProps = {
  screenshots: ScreenshotItem[];
};

export default function ScreenshotCarousel({ screenshots }: ScreenshotCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < max - 8);
  }, []);

  const pause = useCallback(() => setPaused(true), []);

  const scrollByAmount = useCallback(
    (dir: -1 | 1) => {
      const el = scrollerRef.current;
      if (!el) return;
      pause();
      const step = Math.min(280, Math.max(200, el.clientWidth * 0.45));
      el.scrollBy({ left: dir * step, behavior: 'smooth' });
    },
    [pause]
  );

  // Auto-scroll while not paused
  useEffect(() => {
    if (paused) return;
    const el = scrollerRef.current;
    if (!el) return;

    let raf = 0;
    let last = performance.now();
    const speed = 0.45; // px per ms

    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      if (el.scrollWidth <= el.clientWidth) {
        raf = requestAnimationFrame(tick);
        return;
      }
      el.scrollLeft += speed * dt;
      // Loop seamlessly using duplicated list length (half of total)
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) {
        el.scrollLeft -= half;
      }
      updateArrows();
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused, updateArrows]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => {
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, [updateArrows]);

  return (
    <div className="screenshot-carousel relative" aria-label="JZ666 app screenshots">
      <div className="flex items-center justify-center gap-3 mb-4 px-4">
        <button
          type="button"
          onClick={() => scrollByAmount(-1)}
          disabled={!canPrev}
          className="screenshot-nav-btn"
          aria-label="Scroll screenshots left"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="screenshot-pause-btn"
          aria-label={paused ? 'Resume auto scroll' : 'Pause auto scroll'}
        >
          {paused ? 'Resume' : 'Pause'} scroll
        </button>
        <button
          type="button"
          onClick={() => scrollByAmount(1)}
          disabled={!canNext}
          className="screenshot-nav-btn"
          aria-label="Scroll screenshots right"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="screenshot-carousel-track"
        onPointerDown={pause}
        onWheel={pause}
        onTouchStart={pause}
      >
        {[...screenshots, ...screenshots].map((shot, i) => (
          <button
            key={`${shot.src}-${i}`}
            type="button"
            className="screenshot-carousel-item"
            onClick={pause}
            aria-label={`${shot.title} screenshot — click to pause scrolling`}
          >
            <figure className="bg-primary rounded-xl overflow-hidden border border-gray-800 h-full m-0">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={720}
                height={1280}
                sizes="220px"
                className="w-full h-auto object-contain pointer-events-none"
                draggable={false}
              />
              <figcaption className="p-3 text-center text-sm text-accent font-semibold">
                {shot.title}
              </figcaption>
            </figure>
          </button>
        ))}
      </div>

      <p className="text-center text-xs text-gray-500 mt-3 px-4">
        Click a screenshot to stop · Use arrows or swipe / drag to scroll
      </p>
    </div>
  );
}
