import React from "react";
import { Fade } from "react-slideshow-image";

const slideImage = [
  {
    url: "https://unsplash.com/photos/man-standing-on-sidewalk-near-pedestrian-lane-zidTOw3Iq40",
  },
  {
    url: "https://unsplash.com/photos/man-standing-on-sidewalk-near-pedestrian-lane-zidTOw3Iq40",
  },
];

const divstyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backGroundSize: "cover",
};

const Slider = () => {
  return (
    <div className="slider">
      <div className="arrow">
        <i class="fa-solid fa-arrow-up"></i>
      </div>
      <div className="photos"></div>
      <div className="arrow">
        <i class="fa-solid fa-arrow-down"></i>
      </div>
    </div>
  );
};

export default Slider;
