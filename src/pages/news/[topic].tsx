import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";

// Components
import NewsCard from "../../components/newsCard";
import Header from "../../components/header";

// Types
import { NewsType } from "../../types/news-feeder";
import { capitalizer } from "../../helpers/string";

const TopicNews: NextPage = () => {
  const [rss, setRss] = useState<NewsType[]>([]);
  const router = useRouter();
  let { topic } = router.query;

  if (topic && typeof topic !== "string") topic = topic[0];

  if (!topic) return null;

  useEffect(() => {
    async function loadData() {
      const { data } = await axios.get(`/api/news/${topic}`);

      setRss(data);
    }

    loadData();
  }, [topic]);

  return (
    <>
      <Head>
        <title>Newsroom - {capitalizer(topic)}</title>
      </Head>
      <div>
        <Header />
        <h1 className="text-2xl my-4 mx-6">News - {capitalizer(topic)}</h1>
        <div className="space-y-2">
          {rss.map((i: NewsType, index: number) => (
            <NewsCard key={index} news={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TopicNews;
