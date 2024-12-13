import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const CanvasContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20%;
  margin-top: 20px;
  gap: 20px;
`;

const Canvas = styled.canvas`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  background-color: #f1f1f1;
`;

const InputContainer = styled.div`
  margin-bottom: 10px;
`;

const InputField = styled.input`
  padding: 10px;
  margin-right: 5px 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  margin-top: 20px;
  background-color: #3d3bf3;
  color: #fff;
  padding: 12px 22px;
  font-size: 14px;
  cursor: pointer;
  border: none;
`;

const FileInput = styled.input`
  margin-top: 20px;
  display: none;
`;

const DownloadButton = styled.button`
  margin-top: 20px;
  background-color: #9694ff;
  color: #fff;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
`;

function TextCanvas() {
  const canvasRef = useRef(null);
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(30);
  const [fontColor, setFontColor] = useState("black");
  const [fontFamily, setFontFamily] = useState("Arial");
  const [textPosition, setTextPosition] = useState({ x: 150, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [currentText, setCurrentText] = useState("");
  const [image, setImage] = useState(null);

  const drawCanvas = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height); // Clear the canvas

    if (image) {
      ctx.drawImage(
        image,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
    }

    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.fillStyle = fontColor;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(currentText, textPosition.x, textPosition.y);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          setImage(img);
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMouseDown = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    if (
      offsetX >= textPosition.x - fontSize &&
      offsetX <= textPosition.x + (fontSize * currentText.length) / 2 &&
      offsetY >= textPosition.y - fontSize / 2 &&
      offsetY <= textPosition.y + fontSize / 2
    ) {
      setIsDragging(true);
      setDragOffset({
        x: offsetX - textPosition.x,
        y: offsetY - textPosition.y,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const { offsetX, offsetY } = e.nativeEvent;
      setTextPosition({
        x: offsetX - dragOffset.x,
        y: offsetY - dragOffset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTextInput = () => {
    setCurrentText(text);
    drawCanvas();
    setText("");
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const handleFontColorChange = (e) => {
    setFontColor(e.target.value);
  };

  const handleFontFamilyChange = (e) => {
    setFontFamily(e.target.value);
  };

  const handleDownload = () => {
    const dataUrl = canvasRef.current.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "canvas_image.png";
    link.click();
  };

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.canvas.width = 450;
    ctx.canvas.height = 650;
  }, []);

  useEffect(() => {
    drawCanvas();
  }, [textPosition, currentText, fontSize, fontColor, fontFamily, image]);

  return (
    <CanvasContainer>
      <Canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
      <InputContainer>
        <InputField
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Enter text here"
        />
        <Button onClick={handleTextInput}>Enter</Button>
        <div className="field">
          <label>Font Size:</label>
          <input
            type="number"
            value={fontSize}
            onChange={handleFontSizeChange}
            min="10"
            max="100"
          />
          <label>Font Color:</label>
          <input
            type="color"
            value={fontColor}
            onChange={handleFontColorChange}
          />
          <label>Font Family:</label>
          <select value={fontFamily} onChange={handleFontFamilyChange}>
            <option value="Arial">Arial</option>
            <option value="Courier New">Courier New</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Poppins">Poppins</option>
          </select>
        </div>
        <div className="file-input">
          <FileInput
            type="file"
            name="file-input"
            id="file-input"
            className="file-input__input"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <label className="file-input__label" htmlFor="file-input">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="upload"
              className="svg-inline--fa fa-upload fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
              ></path>
            </svg>
            <span>Upload file</span>
          </label>
        </div>
        <DownloadButton className="button tooltip" onClick={handleDownload}>
          Download
        </DownloadButton>
      </InputContainer>
    </CanvasContainer>
  );
}

export default TextCanvas;
