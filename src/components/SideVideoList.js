import React from "react";

function SideVideoList(props) { 
  return (
    <div
      style={{
        marginLeft: window.innerWidth > 950 && "2.5%",
        marginBottom: 10,
        border: "1px solid gray",
        borderRadius: 2,
        cursor: "pointer",
      }}
      onClick={props.onClick}
    >
      <img
        style={{
          width: "100%",
          height: 280,
        }}
        // src={jeep}
        src={props.videos}
        alt="Jeep"
      />
      <div
        style={{
          backgroundColor: "white",
          color: "black",
          paddingInline: 5,
        }}
      >
        <div style={{ fontSize: 18, fontWeight: 600 }}>{props.videoTitle}</div>
        <div style={{ color: "gray", fontSize: 17, marginBlock: 3 }}>
          Channel: {props.channelName}
        </div>
        <div style={{ color: "gray", fontSize: 17 }}>
          Published on {props.publishAt}
        </div>
      </div>
    </div>
  );
}

export default SideVideoList;
