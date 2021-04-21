import { NextApiRequest, NextApiResponse } from "next";

import { truncate } from "../../../helpers/string";
import newscatcher from "../../../services/newscatcher";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end("Method not allowed");
  }

  try {
    const { data } = await newscatcher.get<NewscatcherResponse>("");

    const normalizedNews = data.articles.map((d) => {
      return {
        description: truncate(d.summary),
        publishedAt: d.published_date,
        url: d.link,
        title: d.title,
        source: {
          name: d.rights,
        },
        urlToImage: d.media,
      };
    });

    return res.status(200).json(normalizedNews);
  } catch (err) {
    return res.json({ err: "Something happened", message: err });
  }
};
