import React, { useState } from "react";

export const Right = ({ onPhotoChange }) => {
  const [selectIamges, setSelectedImage] = useState([]);

  const handleFileChange = (event) => {
    const file = Array.from(event.target.files);

    const imageUrls = file.map((file) => URL.createObjectURL(file));
    setSelectedImage(imageUrls);
    onPhotoChange(imageUrls);
  };
  return (
    <div className="right">
      <div className="input">
        <input type="text" />
        <button>Enter</button>
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
        <input type="number" />
        <select name="" id="">
          <option value="">Times New Roman</option>
          <option value="">Poppins</option>
          <option value="">Arial</option>
          <option value="">Impact</option>
        </select>
        <input type="color" />
      </div>
    </div>
  );
};
