import Axios from "axios";

const NewsAPI = Axios.create({
  baseURL: "https://newsapi.org/v2/",
  params: {
    apiKey: process.env.NEWSAPI_KEY,
  },
});

export default NewsAPI;
