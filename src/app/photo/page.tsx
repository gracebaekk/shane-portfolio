import Link from "next/link";
import Nav from "@/components/Nav";
import PhotoSlideshow from "@/components/PhotoSlideshow";
import {
  getPhotographyImages,
  getPhotoshootImages,
  photoshoots,
} from "@/lib/photography";

export const metadata = {
  title: "Photography | Shane Choi",
  description:
    "Portrait and event photography by Shane Choi: staff photoshoots, graduations, and community moments.",
};

export default function PhotoPage() {
  const images = getPhotographyImages();
  const photoshootSections = photoshoots.map((shoot) => ({
    ...shoot,
    images: getPhotoshootImages(shoot.slug),
  }));

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-12 md:pt-20">
        <Link href="/#media" className="label text-ink-soft hover:text-accent">
          ← Back to home
        </Link>

        <p className="label mt-10 text-accent">Photography</p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl leading-tight md:text-7xl">
          Portrait &amp; event work
        </h1>

        {photoshootSections.map(
          (shoot) =>
            shoot.images.length > 0 && (
              <PhotoSlideshow
                key={shoot.slug}
                images={shoot.images}
                title={shoot.title}
                description={shoot.description}
              />
            ),
        )}

        {images.length > 0 && (
          <section className="mt-16 border-t border-ink/10 pt-16">
            <p className="label text-accent">Gallery</p>
            <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
              {images.map((src) => (
                <figure key={src} className="mb-4 break-inside-avoid">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt="Photography by Shane Choi"
                    className="block h-auto w-full max-w-full rounded-sm border border-ink/10"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </section>
        )}

        {images.length === 0 &&
          photoshootSections.every((shoot) => shoot.images.length === 0) && (
            <p className="mt-12 text-lg text-ink-soft">No photos yet.</p>
          )}
      </main>
    </>
  );
}
