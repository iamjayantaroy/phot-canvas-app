import React, { useRef, useEffect, useState } from "react";

const Middle = ({
  photo,
  prev,
  next,
  text,
  fontFamily,
  fontSize,
  fontColor,
}) => {
  const canvasRef = useRef(null);
  const [textPosition, setTextPosition] = useState({ x: 150, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffSet, setDragOffSet] = useState({ x: 0, y: 0 });

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (photo) {
      const img = new Image();
      img.src = photo;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.font = `${fontSize}px ${fontFamily}`;
        ctx.fillStyle = fontColor;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(text, textPosition.x, textPosition.y);
      };
    }
  };

  const handleMouseDown = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (
      offsetX >= textPosition.x - fontSize &&
      offsetX <= textPosition.x + (fontSize * text.length) / 2 &&
      offsetY >= textPosition.y - fontSize / 2 &&
      offsetY <= textPosition.y + fontSize / 2
    ) {
      setIsDragging(true);
      setDragOffSet({
        x: offsetX - textPosition.x,
        y: offsetY - textPosition.y,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const { offsetX, offsetY } = e.nativeEvent;
      setTextPosition({
        x: offsetX - dragOffSet.x,
        y: offsetY - dragOffSet.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    drawCanvas();
  }, [textPosition, text, fontSize, fontColor, fontFamily, photo]);

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
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        />
      </div>

      <div className="arrow" onClick={next}>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default Middle;
