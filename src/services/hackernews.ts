import Axios from "axios";

const HackerNews = Axios.create({
  baseURL: "https://hn.algolia.com/api/v1",
});

export default HackerNews;
