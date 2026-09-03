type ImageBlockProps = {
  alt: string;
  caption?: string;
  src?: string;
  swatch?: [string, string];
  className?: string;
  /** Show image at its original aspect ratio without cropping */
  natural?: boolean;
  /** Stretch image to the full container width */
  fullWidth?: boolean;
};

export default function ImageBlock({
  alt,
  caption,
  src,
  swatch = ["#f0cfc9", "#e2b7bd"],
  className,
  natural = false,
  fullWidth = false,
}: ImageBlockProps) {
  if (natural && src) {
    return (
      <figure className={`flex w-full flex-col ${fullWidth ? "" : "items-center"}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className={`w-full rounded-sm border border-ink/10 ${className ?? ""}`}
        />
        {caption && (
          <figcaption className="label mt-3 text-center text-ink-soft">{caption}</figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure>
      <div
        className={`overflow-hidden rounded-sm border border-ink/10 ${className ?? "aspect-4/3"}`}
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        ) : (
          <div
            className="h-full w-full"
            style={{
              background: `linear-gradient(135deg, ${swatch[0]}, ${swatch[1]})`,
            }}
            role="img"
            aria-label={alt}
          />
        )}
      </div>
      {caption && (
        <figcaption className="label mt-3 text-ink-soft">{caption}</figcaption>
      )}
    </figure>
  );
}
