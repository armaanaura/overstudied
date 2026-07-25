import type { MarkdownInstance } from "astro";

const markdownModules = import.meta.glob<MarkdownInstance<Record<string, never>>>(
  "../content/articles/*.md",
  { eager: true },
);

export function getArticleMarkdown(contentFile: string) {
  const moduleKey = `../content/${contentFile}`;
  const markdown = markdownModules[moduleKey];

  if (!markdown) {
    throw new Error(`Missing article Markdown file: ${contentFile}`);
  }

  return markdown;
}
