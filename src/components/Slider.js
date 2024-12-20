import React from "react";

const Slider = ({ photo, prev, next }) => {
  return (
    <div className="slider">
      <div className="arrow" onClick={prev}>
        <i class="fa-solid fa-arrow-up"></i>
      </div>
      <div
        className="canvas"
        style={{
          width: "200px",
          height: "320px",
          backgroundImage: photo ? `url(${photo})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "1px solid #ccc",
        }}
      ></div>
      <div className="arrow" onClick={next}>
        <i class="fa-solid fa-arrow-down"></i>
      </div>
    </div>
  );
};

export default Slider;
