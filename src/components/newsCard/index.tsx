import React, { useState } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

// Components
import NewsCardComponents from './index.styled';
import Modal from '../modal';

// Types
import { NewsType } from '../../types/news-feeder';

function NewsCard({ news }: { news: NewsType }) {
  const [read, setRead] = useState(false);

  return (
    <NewsCardComponents.CardWrapper>
      <NewsCardComponents.ImgContainer>
        <NewsCardComponents.NewsImg alt={news.title} src={news.urlToImage} />
      </NewsCardComponents.ImgContainer>
      <NewsCardComponents.NewsContainer>
        <h3>
          {news.title}
          {' '}
          <NewsCardComponents.NewsLink href={news.url}>
            <FontAwesomeIcon icon={faLink} />
          </NewsCardComponents.NewsLink>
        </h3>
        {news.author ? <h4>{news.author}</h4> : null}
        <h5>{news.source.name} - <span>{moment(news.publishedAt).fromNow()}</span></h5>
        <p>{news.description}</p>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => setRead(true)}
        >
          Leia mais
        </button>
      </NewsCardComponents.NewsContainer>
      <Modal
        show={read}
        handleClose={() => setRead(false)}
      >
        {read && <NewsCardComponents.NewsIframe src={news.url} />}
      </Modal>
    </NewsCardComponents.CardWrapper>
  );
}

export default NewsCard;
