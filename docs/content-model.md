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
  domain?: string; // StudyDomain.slug
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
  slug: string;
  description: string;
  topics: string[];
  articleCount: number;
  lastUpdated: string; // ISO YYYY-MM-DD
}
```

An article belongs to a domain through `domain: "databricks"` or another domain slug. Never copy or fork an article into a domain-specific file. `/domains/[slug]` filters the canonical `articles` array by metadata. Keep `articleCount` synchronized while data remains mocked; derive it automatically when the project moves to Astro content collections.

Article bodies are canonical too: keep the typed `content` sections on the matching record in `src/data/articles.ts`. `/articles/[slug]`, `/algorithms`, and domain pages all resolve the same record. Do not create a second body for a domain or algorithm view.

The homepage constructs a dated union of all three buckets at build time and sorts it descending. A domain uses `lastUpdated` as its feed date.

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

Architecture records use the equivalent `/images/architectures/<slug>.webp` path. Prefer a 3:2 image because feed thumbnails render at 180×120px. Use WebP where practical, keep filenames lowercase and kebab-cased, and write alt text that describes the image rather than repeating the article title.

Images are optional. When `image` is absent, rows render a blank surface—never a generated label, colored placeholder, or invented image. When an image is supplied, meaningful `alt` text is required.
