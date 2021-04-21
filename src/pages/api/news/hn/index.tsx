import { NextApiRequest, NextApiResponse } from "next";

import HackerNews from "../../../../services/hackernews";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end("Method not allowed");
  }

  try {
    const { data } = await HackerNews.get<HackerNewsResponse>(
      "search_by_date",
      {
        params: {
          tags: "front_page",
        },
      }
    );

    const normalizedNews = data.hits.map((d) => {
      return {
        publishedAt: d.created_at,
        url: d.url,
        title: d.title,
        objectID: d.objectID,
        author: d.author,
      };
    });

    return res.status(200).json(normalizedNews);
  } catch (err) {
    return res.json({ err: "Something happened", message: err });
  }
};
