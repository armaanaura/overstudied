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

Images are optional. When `image` is absent, rows render a blank surface with a thin border—never a generated label, colored placeholder, or invented image. When an image is supplied, meaningful `alt` text is required.
