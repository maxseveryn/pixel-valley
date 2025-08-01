import React, { useState } from "react";
import "./Pixel.css";

export default function Pixel(props) {
  const { selectedColor, row, col, onPixelHover } = props;

  const [pixelColor, setPixelColor] = useState("#fff");
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);

  function applyColor() {
    setPixelColor(selectedColor);
    setCanChangeColor(false);
  }

  function pixelHover() {
    setOldColor(pixelColor);
    setPixelColor(selectedColor);
    onPixelHover?.(row, col);
  }

  function resetColor() {
    if (canChangeColor) {
      setPixelColor(oldColor);
    }

    setCanChangeColor(true);
  }

  return (
    <div
      className="pixel"
      onClick={applyColor}
      onMouseEnter={pixelHover}
      onMouseLeave={resetColor}
      style={{ backgroundColor: pixelColor }}
    ></div>
  );
}
