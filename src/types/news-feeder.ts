type SourceType = {
  id: string | number | null;
  name: string;
};

export interface NewsType {
  author: string | null;
  description?: string;
  objectID?: number;
  publishedAt: string;
  source?: SourceType;
  title: string;
  url: string;
  urlToImage: string;
}
