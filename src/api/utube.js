import axios from "axios";

const KEY = process.env.REACT_APP_KEY;
export const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&order=date&videoCaption=any&key=${KEY}`;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 4,
    key: KEY,
  },
  header: {},
});
