interface ContextualWebValue {
  id: string;
  title: string;
  url: string;
  description: string;
  datePublished: string;
  provider: {
    name: string;
  };
  image: {
    url: string;
  };
}

interface ContextualWebResponse {
  value: ContextualWebValue[];
}

interface NewscatcherData {
  author: string;
  title: string;
  summary: string;
  link: string;
  rights: string;
  media: string;
  published_date: string;
}

interface NewscatcherResponse {
  articles: NewscatcherData[];
}

interface HackerNewsHit {
  created_at: string;
  title: string;
  url: string;
  author: string;
  objectID: number;
}

interface HackerNewsResponse {
  hits: HackerNewsHit[];
}

interface NewsAPIArticle {
  source: {
    id?: string;
    name: string;
  };
  author?: string;
  title: string;
  description?: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content?: string;
}

interface NewsAPIResponse {
  articles: NewsAPIArticle[];
}
