import React, { useState } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import "./components/styles.css";
import utube, { url } from "../src/api/utube";
import SideVideoList from "./components/SideVideoList";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState(null);

  const [title, setTitle] = useState("");
  const onSearchChange = (event) => {
    setTitle(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await utube.get("/search", {
      params: {
        q: title,
      },
    });
    setVideos(response.data.items);
    setVideo(response.data.items[0]);
  };

  /*
  //date formatted method
   const formattedDate = (temp) => {
     let result = new Date("2015-10-23T06:54:18Z");
    //  let result = new Date(temp)
     return (
       result.getMonth() + 1 + "/" + result.getDate() + "/" + result.getFullYear()
     );
   };
   */

  /*
  //for fetching all data
  useEffect(() => {
    //   axios.get(url).then((res) => {
    //     //   console.log(res.data)
    //     const result = res.data.items.map((doc) => ({
    //       ...doc,
    //       Videolink: `https://www.youtube.com/embed/${doc.id.videoId}`,
    //     }));
    //     setvideos(result);
    // })
    fetch(url)
      .then((res) => res.json())
      .then((resJson) => {
        const result = resJson.items.map((doc) => ({
          ...doc,
          Videolink: `https://www.youtube.com/embed/${doc.id.videoId}`,
        }));
        setVideos(result);
      });
  }, []);
  */
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#454545" : "white",
        color: darkMode ? "white" : "black",
        minHeight: "100vh",
      }}
    >
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <SearchBar onSubmit={onSubmit} onSearchChange={onSearchChange} />
      <div
        style={{
          display: window.innerWidth > 950 ? "flex" : "block",
        }}
      >
        {video && <VideoPlayer src={video?.id?.videoId} />}

        <div
          style={{
            width: window.innerWidth > 950 ? "30%" : "100%",
          }}
        >
          <div
            style={{
              display: window.innerWidth < 950 && "grid",
              gridTemplateColumns: window.innerWidth < 950 && "1fr 1fr",
              columnGap: window.innerWidth < 950 && 10,
            }}
          >
            {videos &&
              videos.map((video) => (
                <SideVideoList
                  key={video.id.videoId}
                  videos={video.snippet.thumbnails.medium.url}
                  onClick={() => setVideo(video)}
                  videoTitle={video.snippet.title}
                  channelName={video.snippet.channelTitle}
                  // publishAt={video.snippet.publishedAt}
                  // publishAt={() => formattedDate(video.snippet.publishTime)}
                  publishAt={
                    new Date(video.snippet.publishTime).getMonth() +
                    1 +
                    "/" +
                    new Date(video.snippet.publishTime).getDate() +
                    "/" +
                    new Date(video.snippet.publishTime).getFullYear()
                  }
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
