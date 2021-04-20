import axios from "axios";

const api = axios.create({
  baseURL: "https://rssfeederback.herokuapp.com",
});

export default api;
