import React, { useState } from "react";

export const Right = ({
  onPhotoChange,
  texts,
  font,
  fontChange,
  textColor,
}) => {
  const [selectIamges, setSelectedImage] = useState([]);
  const [text, setText] = useState("");
  const [selectedFont, setSelectedFont] = useState("");
  const [color, setColor] = useState("");

  //this is for target image and send to parent
  const handleFileChange = (event) => {
    const file = Array.from(event.target.files);
    const imageUrls = file.map((file) => URL.createObjectURL(file));
    setSelectedImage(imageUrls);
    onPhotoChange(imageUrls);
  };

  //input text
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSendText = () => {
    texts(text);
  };

  //input number
  const handleNumber = (e) => {
    font(e.target.value);
  };

  //selected font
  const handleFontSelection = (e) => {
    const font = e.target.value;
    setSelectedFont(font);
    fontChange(font);
  };

  //select the color
  const handleColorChange = (e) => {
    setColor(e.target.value);
    textColor(color);
  };
  return (
    <div className="right">
      <div className="input">
        <input type="text" onChange={handleInputChange} />
        <button onClick={handleSendText}>Enter</button>
      </div>
      <div className="image">
        <h2>Upload Image</h2>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
        />
      </div>
      <div className="font-style">
        <input type="number" onChange={handleNumber} placeholder="20" />
        <select value={selectedFont} onChange={handleFontSelection}>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Poppins">Poppins</option>
          <option value="Arial">Arial</option>
          <option value="Impact">Impact</option>
        </select>
        <input type="color" onChange={handleColorChange} />
      </div>
    </div>
  );
};
