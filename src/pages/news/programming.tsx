import { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import axios from "axios";

// Components
import NewsCard from "../../components/newsCard";
import Header from "../../components/header";

// Types
import { NewsType } from "../../types/news-feeder";

const TopNews: NextPage = () => {
  const [rss, setRss] = useState<NewsType[]>([]);

  useEffect(() => {
    async function loadData() {
      const { data } = await axios.get("/api/news/hn");

      setRss(data);
    }

    loadData();
  }, []);

  return (
    <>
      <Head>
        <title>The_newsroom | Programming</title>
      </Head>
      <div>
        <Header />
        <h1 className="text-2xl my-4 mx-6">News by Hacker News</h1>
        <div className="space-y-2 mb-4">
          {rss.map((i: NewsType, index: number) => (
            <NewsCard key={index} news={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TopNews;
