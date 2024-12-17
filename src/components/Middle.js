import React, { useRef, useEffect } from "react";

const Middle = ({ photo, prev, next }) => {
  const canvasRef = useRef(null); // Ref for the canvas element

  useEffect(() => {
    if (photo) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const img = new Image();
      img.src = photo;

      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
    }
  }, [photo]);

  return (
    <div className="middle" style={{ display: "flex", alignItems: "center" }}>
      <div className="arrow" onClick={prev}>
        <i className="fa-solid fa-arrow-left"></i>
      </div>

      <div className="canvas-container">
        <canvas
          ref={canvasRef}
          width="350"
          height="520"
          style={{
            border: "1px solid #ccc",
            display: "block",
          }}
        ></canvas>
      </div>

      <div className="arrow" onClick={next}>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default Middle;
