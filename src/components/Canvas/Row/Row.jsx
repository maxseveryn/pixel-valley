import React from "react";
import "./Row.css";
import Pixel from "../Pixel/Pixel.jsx";

export default function Row(props) {
  const { width, row, selectedColor, onPixelHover } = props;

  let pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(
      <Pixel
        key={i}
        selectedColor={selectedColor}
        row={row}
        col={i}
        onPixelHover={onPixelHover}
      />
    );
  }

  return <div className="row">{pixels}</div>;
}
