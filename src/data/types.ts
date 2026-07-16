export interface ContentImage {
  src: string;
  alt: string;
}

export interface ArticleCodeBlock {
  language: string;
  code: string;
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  code?: ArticleCodeBlock;
}

export interface Article {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: string;
  slug: string;
  domain?: string;
  image?: ContentImage;
  content: ArticleSection[];
  type: "article";
}

export type ArchitectureComplexity = "Intermediate" | "Advanced";

export interface Architecture {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: string;
  slug: string;
  image?: ContentImage;
  systemsCovered: string[];
  complexity: ArchitectureComplexity;
  type: "architecture";
}

export interface StudyDomain {
  name: string;
  slug: string;
  description: string;
  topics: string[];
  articleCount: number;
  lastUpdated: string;
}
