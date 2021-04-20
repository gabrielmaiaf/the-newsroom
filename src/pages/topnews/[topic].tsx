import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

// Components
import NewsCard from "../../components/newsCard";
import Header from "../../components/header";

// Types
import { NewsType } from "../../types/news-feeder";

const TopicNews: NextPage<{ rssData: NewsType[] }> = ({ rssData }) => {
  const [rss, setRss] = useState(rssData);
  const router = useRouter();
  const { topic } = router.query;

  useEffect(() => {
    async function loadData() {
      const { data } = await axios.get(
        `https://rssfeederback.herokuapp.com/topnews/${topic}`
      );

      setRss(data);
    }

    loadData();
  }, [topic]);

  return (
    <div>
      <Header />
      <h1 className="text-2xl my-4 mx-6">Top News - {topic}</h1>
      <div className="space-y-2">
        {rss.map((i: NewsType, index: number) => (
          <NewsCard key={index} news={i} />
        ))}
      </div>
    </div>
  );
};

export default TopicNews;
