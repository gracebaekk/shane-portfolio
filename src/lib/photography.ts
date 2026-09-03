import fs from "fs";
import path from "path";

const PHOTOGRAPHY_DIR = path.join(process.cwd(), "public/media/photography");
const IMAGE_PATTERN = /\.(jpe?g|png|webp|gif|avif)$/i;

/** Hand-pick filenames for the homepage preview grid. Leave empty to keep placeholders. */
export const featuredPhotography: string[] = [];

export type Photoshoot = {
  slug: string;
  title: string;
  description?: string;
};

export const photoshoots: Photoshoot[] = [
  {
    slug: "photoshoot1",
    title: "Staff Photoshoot",
  },
];

function sortImagePaths(files: string[]): string[] {
  return files.sort((a, b) => {
    const numA = Number.parseInt(path.basename(a), 10);
    const numB = Number.parseInt(path.basename(b), 10);

    if (!Number.isNaN(numA) && !Number.isNaN(numB)) {
      return numA - numB;
    }

    return a.localeCompare(b);
  });
}

function readImagesFromDir(dir: string, publicPrefix: string): string[] {
  if (!fs.existsSync(dir)) return [];

  return sortImagePaths(
    fs
      .readdirSync(dir)
      .filter((file) => IMAGE_PATTERN.test(file))
      .map((file) => `${publicPrefix}/${file}`),
  );
}

export function getPhotographyImages(): string[] {
  return readImagesFromDir(PHOTOGRAPHY_DIR, "/media/photography");
}

export function getPhotoshootImages(slug: string): string[] {
  return readImagesFromDir(
    path.join(PHOTOGRAPHY_DIR, slug),
    `/media/photography/${slug}`,
  );
}

export function getFeaturedPhotographyImages(): string[] {
  if (featuredPhotography.length === 0) return [];

  const allImages = new Set(getPhotographyImages());

  return featuredPhotography
    .map((file) => (file.startsWith("/") ? file : `/media/photography/${file}`))
    .filter((src) => allImages.has(src));
}
