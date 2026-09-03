"use client";

import { useCallback, useRef } from "react";

type PhotoSlideshowProps = {
  images: string[];
  label?: string;
};

export default function PhotoSlideshow({
  images,
  label = "Staff photoshoot",
}: PhotoSlideshowProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByPage = useCallback((direction: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    scroller.scrollBy({
      left: direction * scroller.clientWidth * 0.75,
      behavior: "smooth",
    });
  }, []);

  if (images.length === 0) return null;

  return (
    <div
      className="outline-none"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollByPage(-1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollByPage(1);
        }
      }}
    >
      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((src, imageIndex) => (
            <figure
              key={src}
              className="shrink-0 snap-start"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${label} photo ${imageIndex + 1}`}
                className="block h-[52vh] w-auto max-w-none rounded-sm border border-ink/10"
                loading="lazy"
              />
            </figure>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => scrollByPage(-1)}
              className="label absolute top-1/2 left-3 -translate-y-1/2 rounded-full border border-ink/15 bg-cream/90 px-4 py-2 hover:border-accent hover:text-accent"
              aria-label="Previous photos"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollByPage(1)}
              className="label absolute top-1/2 right-3 -translate-y-1/2 rounded-full border border-ink/15 bg-cream/90 px-4 py-2 hover:border-accent hover:text-accent"
              aria-label="Next photos"
            >
              →
            </button>
          </>
        )}
      </div>
    </div>
  );
}
