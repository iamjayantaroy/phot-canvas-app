import React from "react";

const Middle = ({ photo, prev, next }) => {
  return (
    <div className="middle">
      <div className="arrow" onClick={prev}>
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div
        className="canvas"
        style={{
          width: "400px",
          height: "520px",
          backgroundImage: photo ? `url(${photo})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "1px solid #ccc",
        }}
      ></div>

      <div className="arrow" onClick={next}>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default Middle;
