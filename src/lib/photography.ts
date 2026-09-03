import fs from "fs";
import path from "path";

const PHOTOGRAPHY_DIR = path.join(process.cwd(), "public/media/photography");
const IMAGE_PATTERN = /\.(jpe?g|png|webp|gif|avif)$/i;

/** Hand-pick filenames for the homepage preview grid. */
export const featuredPhotography: string[] = [
  "IMG_8939.jpeg",
  "IMG_5069.jpeg",
  "IMG_2365.jpeg",
  "photoshoot/8.jpg",
];

export type Photoshoot = {
  slug: string;
};

export const photoshoots: Photoshoot[] = [
  { slug: "photoshoot" },
];

function sortImagePaths(files: string[]): string[] {
  return files.sort((a, b) => {
    const digitsA = path.basename(a).match(/\d+/g);
    const digitsB = path.basename(b).match(/\d+/g);
    const numA = digitsA ? Number.parseInt(digitsA[digitsA.length - 1], 10) : NaN;
    const numB = digitsB ? Number.parseInt(digitsB[digitsB.length - 1], 10) : NaN;

    if (!Number.isNaN(numA) && !Number.isNaN(numB) && numA !== numB) {
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
  return readImagesFromDir(PHOTOGRAPHY_DIR, "/media/photography").filter(
    (src) => path.basename(src).toLowerCase() !== "hero.png",
  );
}

export function getPhotoshootImages(slug: string): string[] {
  return readImagesFromDir(
    path.join(PHOTOGRAPHY_DIR, slug),
    `/media/photography/${slug}`,
  );
}

export function getJustForFunImages(): string[] {
  return readImagesFromDir(
    path.join(PHOTOGRAPHY_DIR, "just-for-fun"),
    "/media/photography/just-for-fun",
  );
}

export function getAllPhotoshootImages(): string[] {
  return photoshoots.flatMap((shoot) => getPhotoshootImages(shoot.slug));
}

export function getFeaturedPhotographyImages(): string[] {
  return featuredPhotography
    .map((file) => (file.startsWith("/") ? file : `/media/photography/${file}`))
    .filter((src) => {
      const relative = src.replace(/^\/media\/photography\//, "");
      return fs.existsSync(path.join(PHOTOGRAPHY_DIR, relative));
    });
}
