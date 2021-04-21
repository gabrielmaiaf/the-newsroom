import { NextApiRequest, NextApiResponse } from "next";
import contextualWebSearch from "../../../services/contextualweb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end("Method not allowed");
  }

  const { page } = req.query;

  try {
    const { data } = await contextualWebSearch.get<ContextualWebResponse>("", {
      params: {
        pageNumber: page,
      },
    });

    const normalizedNews = data.value.map((d) => {
      return {
        description: d.description,
        publishedAt: d.datePublished,
        url: d.url,
        title: d.title,
        source: {
          name: d.provider.name,
        },
        urlToImage: d.image.url,
      };
    });

    return res.status(200).json(normalizedNews);
  } catch (err) {
    return res.json({ err: "Something happened", message: err });
  }
};
