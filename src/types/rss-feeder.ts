export type itemType = {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  contentSnippet: string;
  guid: string;
  isoDate: string;
}

export type rssType = {
  items: itemType[];
  title: string;
  description: string;
  generator: string;
  link: string;
  lastBuildDate: string;
}