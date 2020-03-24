import React, { Fragment } from 'react';

// Components
import FeedIndexCard from '../feedIndexCard';

// Types
import { rssType } from '../../types/rss-feeder';

interface Props {
  rss: rssType[];
}

function RssIndex(props: Props) {
  const FeedHigher = () => {
    return props.rss.map((item, index) => (
      <div key={index}>
        <h2><a href={item.link}>{item.title}</a></h2>
        <h3>{item.description}</h3>
        <div className="container">
          {item.items.map((i, index) => <FeedIndexCard key={index} article={i} />)}
        </div>
      </div>
    ))
  }

  return (
    <Fragment>
      {FeedHigher()}
    </Fragment>
  );
}

export default RssIndex;
