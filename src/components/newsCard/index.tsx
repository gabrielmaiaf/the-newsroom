import React from "react";
import { formatDistance } from "date-fns";
import { RiExternalLinkFill } from "react-icons/ri";

// Types
import { NewsType } from "../../types/news-feeder";
import { useModal } from "../../hooks/useModal";

function NewsCard({ news }: { news: NewsType }) {
  const { handleOpenModal } = useModal();

  const renderDescription = () => {
    if (!news.urlToImage && !news.author) return null;

    if (news.objectID) {
      return (
        <a
          href={`https://news.ycombinator.com/item?id=${news.objectID}`}
          className="font-extralight text-blue-900"
        >
          Hacker News Link
        </a>
      );
    }

    if (news.description) return <p>{news.description}</p>;

    return null;
  };

  return (
    <div className="flex mx-6 md:space-x-2 flex-col md:flex-row">
      {news.urlToImage ? (
        <div className="w-100 md:max-w-2xl md:w-44">
          <img
            className="h-36 w-max md:h-48 object-cover md:rounded-l-xl md:rounded-tr-none rounded-t-xl"
            alt={news.title}
            src={news.urlToImage}
          />
        </div>
      ) : null}
      <div className="flex flex-col justify-center md:w-4/5 w-auto">
        <h3 className="text-xl text-blue-800 font-medium inline-flex">
          {news.title}{" "}
          <a href={news.url} target="_blank">
            <RiExternalLinkFill color="#333" className="ml-2" />
          </a>
        </h3>
        {news.author ? <h4 className="font-thin">{news.author}</h4> : null}
        <h5 className="text-blue-400 font-light md:my-2">
          {news.source && `${news.source.name} - `}
          <span>{formatDistance(new Date(news.publishedAt), new Date())}</span>
        </h5>
        {renderDescription()}
        <button
          type="button"
          onClick={() => handleOpenModal(news.url)}
          className="md:w-28 mt-3 h-7 bg-blue-900 hover:bg-opacity-90 text-white rounded"
        >
          Read more
        </button>
      </div>
    </div>
  );
}

export default NewsCard;
