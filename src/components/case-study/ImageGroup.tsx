type GroupImage = {
  src: string;
  alt: string;
  className?: string;
};

type ImageGroupProps = {
  images: GroupImage[];
  caption?: string;
};

export default function ImageGroup({ images, caption }: ImageGroupProps) {
  return (
    <figure>
      <div className="flex flex-col items-center gap-8 overflow-visible">
        {images.map((image) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className={image.className ?? "w-full"}
          />
        ))}
      </div>
      {caption && (
        <figcaption className="label mt-3 text-ink-soft">{caption}</figcaption>
      )}
    </figure>
  );
}
