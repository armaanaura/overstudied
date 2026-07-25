# Content model

Static mock data lives in `src/data`. Shared interfaces are in `src/data/types.ts`.

## Article

```ts
interface Article {
  title: string;
  excerpt: string;
  date: string; // ISO YYYY-MM-DD
  tags: string[];
  readTime: string;
  slug: string;
  category: ArticleCategory;
  image?: { src: string; alt: string };
  content: ArticleSection[];
  type: "article";
}

interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  code?: {
    language: string;
    code: string;
  };
}
```

## Architecture

```ts
interface Architecture {
  title: string;
  excerpt: string;
  date: string; // ISO YYYY-MM-DD
  tags: string[];
  readTime: string;
  slug: string;
  category: "system-design";
  image?: { src: string; alt: string };
  systemsCovered: string[];
  complexity: "Intermediate" | "Advanced";
  type: "architecture";
}
```

## StudyDomain

```ts
interface StudyDomain {
  name: string;
  slug: Article["category"];
  image?: { src: string; alt: string };
  tagline: string;
  description: string;
  topics: string[];
  articleCount: number;
  lastUpdated: string; // ISO YYYY-MM-DD
}
```

Every article belongs to exactly one domain through its required `category` metadata. Valid slugs are defined by `ArticleCategory` in `src/data/types.ts` and mirrored by records in `src/data/domains.ts`. Never copy or fork an article into a domain-specific file. `/domains/[slug]` filters the canonical `articles` array by this metadata. Keep `articleCount` synchronized while data remains mocked; derive it automatically when the project moves to Astro content collections.

Article bodies are canonical too: keep the typed `content` sections on the matching record in `src/data/articles.ts`. `/articles/[slug]`, `/algorithms`, and domain pages all resolve the same record. Do not create a second body for a domain or algorithm view.

The `/articles` page is the complete publication archive. It renders both the standard `articles` records and the structured System Design explainers from `architectures`, sorted together by date. System Design category pages follow the same rule.

The homepage combines normal articles and structured System Design explainers, sorts them by date, and renders two non-overlapping groups of six around a three-domain section. Full collections remain available on `/articles` and `/domains`.

## Content images

Store content images under `public/images` using the content slug as the filename:

```text
public/
  images/
    articles/
      <article-slug>.webp
    architectures/
      <architecture-slug>.webp
```

Files in `public` are served from the site root. Add an article image to its canonical record in `src/data/articles.ts`:

```ts
image: {
  src: "/images/articles/knapsack-merging-without-fear.webp",
  alt: "Diagram showing tree knapsack states being merged",
},
```

Architecture records use the equivalent `/images/architectures/<slug>.webp` path. Prefer a square image because feed thumbnails render at a `1:1` aspect ratio. Use WebP where practical, keep filenames lowercase and kebab-cased, and write alt text that describes the image rather than repeating the article title.

Images are optional. When an article has no `image`, `ArticleRow` assigns it a deterministic fallback from `src/Assets/abstract`; the article slug selects the image so it stays consistent across pages and builds. This fallback is only a feed thumbnail and does not become the article-detail cover image. When an image is supplied, meaningful `alt` text is required.

Domain thumbnails follow the same fallback rule. Add an optional `image` to a domain record for custom artwork; otherwise `DomainCard` selects a stable abstract image from the domain slug. Domain thumbnails always render at a square `1:1` aspect ratio.
