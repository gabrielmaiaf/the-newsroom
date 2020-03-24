type SourceType = {
  id: number | null;
  name: string;
}

export interface NewsType {
  author: string | null;
  content: string;
  description: string;
  publishedAt: string;
  source: SourceType;
  title: string;
  url: string;
  urlToImage: string;
}