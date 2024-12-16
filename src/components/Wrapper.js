import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import { Right } from "./Right";
import Middle from "./Middle";

const Wrapper = () => {
  const [image, setImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    if (Array.isArray(image) && image.length > 0) {
      setCurrentImage(image[currentIndex]);
    }
  }, [currentIndex, image]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < image.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleImageUpload = (url) => {
    setImage(url);
  };

  console.log(currentImage);

  return (
    <div className="wrapper">
      <Slider photo={currentImage} prev={handlePrev} next={handleNext} />
      <Middle photo={currentImage} prev={handlePrev} next={handleNext} />
      <Right onPhotoChange={handleImageUpload} />
    </div>
  );
};

export default Wrapper;
