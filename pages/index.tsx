import { NextPage } from 'next';
import React, { useState } from 'react';
import axios from 'axios';

// Components
import IndexComponents from '../src/components/rssIndex/index.styled';
import RssIndex from '../src/components/rssIndex';
import Header from '../src/components/header';

// Types
import { rssType } from '../src/types/rss-feeder';

const Home: NextPage<{ rssData: rssType[] }> = ({ rssData }) => {
  const [rss] = useState(rssData);

  return (
    <div>
      <Header />
      <IndexComponents.PageTitle>RSS feed by Gabriel Maia</IndexComponents.PageTitle>
      <div className="container">
        <RssIndex rss={rss} />
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  const response = await axios('https://rssfeederback.herokuapp.com/');
  let rssData = null;
  if (response && response.data)
    rssData = response.data;
  return { rssData };
};

export default Home;