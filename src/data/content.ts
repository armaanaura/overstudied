import meta from "../content/meta.json";
import type { Article, ContentAuthor, ContentImage, StudyDomain } from "./types";

interface RawArticle {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: string;
  author: ContentAuthor;
  slug: string;
  thumbnail: ContentImage | null;
  coverImage: ContentImage | null;
  contentFile: string;
}

interface DomainFile {
  domain: string;
  articles: RawArticle[];
}

interface MetaDomain {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  topics: string[];
  thumbnail: ContentImage | null;
  articlesFile: string;
}

const domainFileModules = import.meta.glob<{ default: DomainFile }>(
  "../content/domains/*.json",
  { eager: true },
);

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const seenDomainSlugs = new Set<string>();
const seenArticleSlugs = new Set<string>();
const loadedArticles: Article[] = [];

export const domains: StudyDomain[] = (meta.domains as MetaDomain[]).map((domain) => {
  if (!slugPattern.test(domain.slug)) {
    throw new Error(`Invalid domain slug: ${domain.slug}. Use lowercase kebab-case.`);
  }

  if (seenDomainSlugs.has(domain.slug)) {
    throw new Error(`Duplicate domain slug: ${domain.slug}`);
  }

  seenDomainSlugs.add(domain.slug);

  const moduleKey = `../content/${domain.articlesFile}`;
  const domainFile = domainFileModules[moduleKey]?.default;

  if (!domainFile) {
    throw new Error(`Missing domain article file: ${domain.articlesFile}`);
  }

  if (domainFile.domain !== domain.slug) {
    throw new Error(
      `Domain mismatch: ${domain.articlesFile} declares "${domainFile.domain}" instead of "${domain.slug}"`,
    );
  }

  const domainArticles = domainFile.articles.map((article): Article => {
    if (!article.author?.name?.trim()) {
      throw new Error(`Missing author name for article "${article.slug}".`);
    }

    if (!slugPattern.test(article.slug)) {
      throw new Error(
        `Invalid article slug: ${article.slug}. Use lowercase kebab-case.`,
      );
    }

    if (seenArticleSlugs.has(article.slug)) {
      throw new Error(`Duplicate article slug: ${article.slug}`);
    }

    if (
      !datePattern.test(article.date) ||
      Number.isNaN(Date.parse(`${article.date}T00:00:00Z`))
    ) {
      throw new Error(
        `Invalid date "${article.date}" for article "${article.slug}". Use YYYY-MM-DD.`,
      );
    }

    const expectedContentFile = `articles/${article.slug}.md`;
    if (article.contentFile !== expectedContentFile) {
      throw new Error(
        `Article "${article.slug}" must use contentFile "${expectedContentFile}".`,
      );
    }

    seenArticleSlugs.add(article.slug);

    return {
      ...article,
      category: domain.slug,
      thumbnail: article.thumbnail ?? undefined,
      coverImage: article.coverImage ?? undefined,
      type: "article",
    };
  });

  loadedArticles.push(...domainArticles);

  return {
    name: domain.name,
    slug: domain.slug,
    tagline: domain.tagline,
    description: domain.description,
    topics: domain.topics,
    image: domain.thumbnail ?? undefined,
    articleCount: domainArticles.length,
    lastUpdated: domainArticles
      .map((article) => article.date)
      .sort((first, second) => second.localeCompare(first))[0],
  };
});

export const articles = loadedArticles.sort((first, second) =>
  second.date.localeCompare(first.date),
);
