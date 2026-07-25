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

export function getArticleThumbnail(
  image: Pick<ContentImage, "src" | "alt"> | undefined,
  slug: string,
) {
  if (image) return image;
  if (abstractImages.length === 0) return undefined;

  return {
    src: abstractImages[stableIndex(slug, abstractImages.length)],
    alt: "Abstract artwork",
  } satisfies ContentImage;
}
