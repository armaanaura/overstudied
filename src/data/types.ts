export interface ContentImage {
  src: string;
  alt: string;
}

export interface ContentAuthor {
  name: string;
  url?: string;
}

export type ArticleCategory = string;

export interface Article {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: string;
  author: ContentAuthor;
  slug: string;
  category: ArticleCategory;
  thumbnail?: ContentImage;
  coverImage?: ContentImage;
  contentFile: string;
  type: "article";
}

export interface StudyDomain {
  name: string;
  slug: ArticleCategory;
  image?: ContentImage;
  tagline: string;
  description: string;
  topics: string[];
  articleCount: number;
  lastUpdated?: string;
}
