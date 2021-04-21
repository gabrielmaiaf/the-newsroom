import Axios from "axios";

const contextualWebSearch = Axios.create({
  baseURL:
    "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI",
  params: {
    pageSize: "10",
    withThumbnails: "true",
  },
  headers: {
    "x-rapidapi-key": process.env.RAPIDAPI_KEY,
    "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
  },
});

export default contextualWebSearch;
