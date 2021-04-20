import React, { useState } from "react";
import moment from "moment";

// Components
import FeedIndexCardComponents from "./index.styled";

// Types
import { itemType } from "../../types/rss-feeder";

interface Props {
  article: itemType;
}

function FeedIndexCard({ article }: Props) {
  const [readArticle, setReadArticle] = useState(false);

  return (
    <div
      key={article.guid}
      className="border border-dark rounded my-3 py-1 px-2"
    >
      <FeedIndexCardComponents.ArticleTitle href={article.link} target="_blank">
        {article.title}
      </FeedIndexCardComponents.ArticleTitle>
      <p>{moment(article.pubDate).fromNow()}</p>
      <div className="text-secondary">
        {readArticle ? (
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        ) : (
          article.contentSnippet.slice(0, 500) + "..."
        )}
      </div>
      <FeedIndexCardComponents.SeeButton
        onClick={() => setReadArticle(!readArticle)}
      >
        {readArticle ? " see less" : " see more"}
      </FeedIndexCardComponents.SeeButton>
    </div>
  );
}

export default FeedIndexCard;
