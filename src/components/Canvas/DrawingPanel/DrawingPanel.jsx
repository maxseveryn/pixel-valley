import React from "react";
import "./DrawingPanel.css";
import Row from "../Row/Row.jsx";

export default function DrawingPanel(props) {
  const { width, height, selectedColor, onPixelHover } = props;
  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(
      <Row
        key={i}
        width={width}
        selectedColor={selectedColor}
        row={i}
        onPixelHover={onPixelHover}
      />
    );
  }

  return (
    <div id="drawingPanel">
      <div id="pixels">{rows}</div>
    </div>
  );
}
