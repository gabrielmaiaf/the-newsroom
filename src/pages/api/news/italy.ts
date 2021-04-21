import { NextApiRequest, NextApiResponse } from "next";

import { slicer, truncate } from "../../../helpers/string";
import NewsAPI from "../../../services/newsapi";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end("Method not allowed");
  }

  try {
    const { data } = await NewsAPI.get<NewsAPIResponse>("top-headlines", {
      params: {
        country: "it",
        pageSize: 50,
      },
    });

    const normalizedNews = data.articles.map((d) => {
      let description: string;
      if (d.content && d.content !== null) {
        description = slicer(d.content, "[");
      } else {
        description = d.description || "";
      }

      return {
        description,
        publishedAt: d.publishedAt,
        url: d.url,
        title: d.title,
        source: {
          id: d.source.id,
          name: d.source.name,
        },
        urlToImage: d.urlToImage,
      };
    });

    return res.status(200).json(normalizedNews);
  } catch (err) {
    return res.json({ err: "Something happened", message: err });
  }
};
