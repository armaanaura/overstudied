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

export type ArticleCategory =
  | "databricks"
  | "snowflake"
  | "artificial-intelligence"
  | "hardware"
  | "system-design"
  | "quantum-computing"
  | "quantum-mechanics"
  | "psychology"
  | "dsa";

export interface Article {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: string;
  slug: string;
  category: ArticleCategory;
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
  category: "system-design";
  image?: ContentImage;
  systemsCovered: string[];
  complexity: ArchitectureComplexity;
  type: "architecture";
}

export interface StudyDomain {
  name: string;
  slug: ArticleCategory;
  image?: ContentImage;
  tagline: string;
  description: string;
  topics: string[];
  articleCount: number;
  lastUpdated: string;
}
