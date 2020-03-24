import { NextPage } from 'next';
import React, { useState } from 'react';
import axios from 'axios';

// Components
import IndexComponents from '../../src/components/rssIndex/index.styled';
import NewsCard from '../../src/components/newsCard';
import Header from '../../src/components/header';

// Types
import { NewsType } from '../../src/types/news-feeder';

const TopNews: NextPage<{ rssData: NewsType[] }> = ({ rssData }) => {
  const [rss] = useState(rssData);

  return (
    <div>
      <Header />
      <IndexComponents.PageTitle>Top News</IndexComponents.PageTitle>
      <div className="container">
        {rss.map((i: NewsType, index: number) => <NewsCard key={index} news={i} />)}
      </div>
    </div>
  );
};

TopNews.getInitialProps = async () => {
  const response = await axios('https://rssfeederback.herokuapp.com/topnews');
  let rssData = null;
  if (response && response.data)
    rssData = response.data;
  return { rssData };
};

export default TopNews;