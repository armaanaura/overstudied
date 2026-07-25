import type { ContentImage } from "../data/types";

const abstractImageModules = import.meta.glob<{ default: { src: string } }>(
  "../Assets/abstract/*.{jpg,jpeg,png,webp,avif}",
  { eager: true },
);

const abstractImages = Object.entries(abstractImageModules)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([, imageModule]) => imageModule.default.src);

function stableIndex(value: string, length: number) {
  let hash = 0;

  for (const character of value) {
    hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
  }

  return hash % length;
}

function getAbstractThumbnail(
  image: Pick<ContentImage, "src" | "alt"> | undefined,
  key: string,
  fallbackAlt: string,
) {
  if (image) return image;
  if (abstractImages.length === 0) return undefined;

  return {
    src: abstractImages[stableIndex(key, abstractImages.length)],
    alt: fallbackAlt,
  } satisfies ContentImage;
}

export function getArticleThumbnail(
  image: Pick<ContentImage, "src" | "alt"> | undefined,
  slug: string,
) {
  return getAbstractThumbnail(image, slug, "Abstract artwork");
}

export function getDomainThumbnail(
  image: Pick<ContentImage, "src" | "alt"> | undefined,
  slug: string,
  name: string,
) {
  return getAbstractThumbnail(image, `domain-${slug}`, `Abstract artwork for ${name}`);
}
