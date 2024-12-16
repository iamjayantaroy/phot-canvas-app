import React from "react";

export const Right = () => {
  return (
    <div className="right">
      <div className="input">
        <input type="text" />
        <button>Enter</button>
      </div>
      <div className="image">
        <h2>Upload Image</h2>
        <input type="file" />
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
