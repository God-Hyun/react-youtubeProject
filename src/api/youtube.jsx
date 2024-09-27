import axios from "axios";

const KEY = "AIzaSyAxxZnZoYld1gymiVq_WAzBRTnAKzD1K-4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
