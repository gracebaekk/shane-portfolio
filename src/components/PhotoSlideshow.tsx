"use client";

import { useCallback, useEffect, useState } from "react";

type PhotoSlideshowProps = {
  images: string[];
  title: string;
  description?: string;
};

export default function PhotoSlideshow({
  images,
  title,
  description,
}: PhotoSlideshowProps) {
  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (nextIndex: number) => {
      if (images.length === 0) return;
      setIndex((nextIndex + images.length) % images.length);
    },
    [images.length],
  );

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") goTo(index - 1);
      if (event.key === "ArrowRight") goTo(index + 1);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goTo, index]);

  if (images.length === 0) return null;

  return (
    <section className="border-t border-ink/10 pt-16">
      <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-ink/10 pb-6">
        <p className="label text-accent">{title}</p>
        <p className="label text-ink-soft">
          {index + 1} / {images.length}
        </p>
      </div>

      {description && (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {description}
        </p>
      )}

      <div className="relative mx-auto mt-8 max-w-md overflow-hidden rounded-sm border border-ink/10 bg-cream-deep sm:max-w-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[index]}
          alt={`${title} photo ${index + 1}`}
          className="mx-auto block h-auto max-h-[55vh] w-full object-contain"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="label absolute top-1/2 left-4 -translate-y-1/2 rounded-full border border-ink/15 bg-cream/90 px-4 py-2 hover:border-accent hover:text-accent"
              aria-label="Previous photo"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="label absolute top-1/2 right-4 -translate-y-1/2 rounded-full border border-ink/15 bg-cream/90 px-4 py-2 hover:border-accent hover:text-accent"
              aria-label="Next photo"
            >
              →
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {images.map((src, imageIndex) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(imageIndex)}
              className={`h-2 w-2 rounded-full transition-colors ${
                imageIndex === index ? "bg-accent" : "bg-ink/20 hover:bg-ink/40"
              }`}
              aria-label={`Go to photo ${imageIndex + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
