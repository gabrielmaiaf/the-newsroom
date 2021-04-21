import Axios from "axios";

const newscatcher = Axios.create({
  baseURL: "https://newscatcher.p.rapidapi.com/v1/search_free",
  params: {
    q: "a",
    lang: "pt",
    media: "True",
  },
  headers: {
    "x-rapidapi-key": process.env.RAPIDAPI_KEY,
    "x-rapidapi-host": "newscatcher.p.rapidapi.com",
  },
});

export default newscatcher;
