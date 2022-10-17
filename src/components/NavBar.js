import React from "react";

function NavBar(props) {
  return (
    <nav
      style={{ backgroundColor: props.darkMode ? "#454545" : "white" }}
      className="nav-container"
    >
      <h1
        style={{ color: props.darkMode ? "white" : "red" }}
        className="heading"
      >
        Abode
      </h1>
      <div
        className="nav-button-container"
        style={{ display: "flex", alignItems: "center" }}
      >
        <p
          style={{
            fontSize: 17,
            fontWeight: 600,
            color: props.darkMode ? "white" : "gray",
          }}
          className="toggler--light"
        >
          Light
        </p>
        <div
          style={{
            width: 25,
            height: 13,
            backgroundColor: props.darkMode ? "white" : "#454545",
            borderRadius: 32,
            marginInline: 7,
            cursor: "pointer",
            display: "flex",
            justifyContent: props.darkMode ? "flex-end" : "flex-start",
            alignItems: "center",
            border: "1px solid #454545",
            boxSizing: "content-box",
          }}
          className="toggler--slider"
          onClick={props.toggleDarkMode}
        >
          <div
            style={{
              height: 11,
              width: 11,
              backgroundColor: props.darkMode ? "gray" : "white",
              borderRadius: "50%",
              margin: 1,
            }}
            className="toggler--slider--circle"
          ></div>
        </div>
        <p
          style={{
            fontSize: 17,
            fontWeight: 600,
            color: props.darkMode ? "#FFFFFF" : "gray",
          }}
          className="toggler--dark"
        >
          Dark
        </p>
      </div>
    </nav>
  );
}

export default NavBar;
