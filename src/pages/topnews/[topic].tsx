import { NextPage } from "next";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

// Components
import IndexComponents from "../../components/rssIndex/index.styled";
import NewsCard from "../../components/newsCard";
import Header from "../../components/header";

// Types
import { NewsType } from "../../types/news-feeder";

const TopicNews: NextPage<{ rssData: NewsType[] }> = ({ rssData }) => {
  const [rss] = useState(rssData);
  const router = useRouter();
  const { topic } = router.query;

  return (
    <div>
      <Header />
      <IndexComponents.PageTitle>Top News - {topic}</IndexComponents.PageTitle>
      <div className="container">
        {rss.map((i: NewsType, index: number) => (
          <NewsCard key={index} news={i} />
        ))}
      </div>
    </div>
  );
};

TopicNews.getInitialProps = async ({ query }) => {
  const { topic } = query;
  const response = await axios(
    `https://rssfeederback.herokuapp.com/topnews/${topic}`
  );
  let rssData = null;
  if (response && response.data) rssData = response.data;
  return { rssData };
};

export default TopicNews;
