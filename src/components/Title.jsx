import React from "react";
import Sun from "../images/icon-sun.svg";
import Moon from "../images/icon-moon.svg";

function Title({ setLight, light }) {
  return (
    <div className="tittle-container">
      <div className="bar">
        <h2>TODO</h2>
        <img onClick={() => setLight(!light)} src={light ? Moon : Sun}></img>
      </div>
    </div>
  );
}

export default Title;
