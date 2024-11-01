import axios from "axios";
import REACT_APP_YOUTUBE_API_KEY from "../apikey";

const KEY = REACT_APP_YOUTUBE_API_KEY;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
