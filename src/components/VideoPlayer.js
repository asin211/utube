import React from "react";
import "./styles.css";
console.log(window.innerWidth)
function VideoPlayer(props) {
  const src = `https://www.youtube.com/embed/${props.src}`;
  return (
    <div
      style={{
        marginBottom: 10,
        width: window.innerWidth > 950 ? "70%" : "100%",
      }}
    >
      <iframe
        width="100%"
        height={window.innerHeight > 900 ? "800" : '600'}
        // src="https://www.youtube.com/embed/WerCpkTJQTM"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowFullScreen"
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
