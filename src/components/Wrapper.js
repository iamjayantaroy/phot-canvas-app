import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import { Right } from "./Right";
import Middle from "./Middle";

const Wrapper = () => {
  const [image, setImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState("");
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(20);
  const [selectedFont, setSelectedFont] = useState("");
  const [selectColor, setSelectColor] = useState("");

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

  //image upload
  const handleImageUpload = (url) => {
    setImage(url);
  };

  //extract text
  const handleTextInput = (newtext) => {
    setText(newtext);
  };

  //extract font size
  const handleFontSize = (size) => {
    setFontSize(size);
  };

  //select font
  const handleFontChange = (font) => {
    setSelectedFont(font);
  };

  //select color
  const handleColor = (color) => {
    setSelectColor(color);
  };
  console.log(selectColor);

  return (
    <div className="wrapper">
      <Slider photo={currentImage} prev={handlePrev} next={handleNext} />
      <Middle photo={currentImage} prev={handlePrev} next={handleNext} />
      <Right
        onPhotoChange={handleImageUpload}
        texts={handleTextInput}
        font={handleFontSize}
        fontChange={handleFontChange}
        textColor={handleColor}
      />
    </div>
  );
};

export default Wrapper;
