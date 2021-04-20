import React from "react";
import moment from "moment";
import { RiExternalLinkFill } from "react-icons/ri";

// Types
import { NewsType } from "../../types/news-feeder";
import { useModal } from "../../hooks/useModal";

function NewsCard({ news }: { news: NewsType }) {
  const { handleOpenModal } = useModal();

  return (
    <div className="flex mx-6 space-x-2">
      <div className="max-w-2xl w-44">
        <img
          className="h-48 object-cover rounded-l-xl"
          alt={news.title}
          src={news.urlToImage}
        />
      </div>
      <div className="flex flex-col justify-center w-4/5">
        <h3 className="text-xl text-blue-800 font-medium inline-flex">
          {news.title}{" "}
          <a href={news.url} target="_blank">
            <RiExternalLinkFill color="#333" className="ml-2" />
          </a>
        </h3>
        {news.author ? <h4>{news.author}</h4> : null}
        <h5 className="text-blue-400 font-extralight my-2">
          {news.source.name} - <span>{moment(news.publishedAt).fromNow()}</span>
        </h5>
        <p>{news.description}</p>
        <button
          type="button"
          onClick={() => handleOpenModal(news.url)}
          className="w-28 mt-3 h-7 bg-blue-900 hover:bg-opacity-90 text-white rounded"
        >
          Leia mais
        </button>
      </div>
    </div>
  );
}

export default NewsCard;
