import React, { useState } from "react";
import "./ColorPicker.css";

export default function ColorPicker({ onColorChange }) {
  const colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#FFFFFF",
    "#000000",
  ];

  const [selectedColor, setSelectedColor] = useState(null);

  const borderColor = "#440479ff";

  const handleSelect = (color) => {
    setSelectedColor(color);
    onColorChange(color);
  };

  return (
    <div className="color-picker">
      {colors.map((color, index) => (
        <ColorItem
          key={index}
          color={color}
          onSelect={handleSelect}
          borderColor={selectedColor === color ? borderColor : "transparent"}
        />
      ))}
    </div>
  );
}

function ColorItem({ color, borderColor, onSelect }) {
  return (
    <div
      className="color__item"
      style={{
        backgroundColor: color,
        borderColor: borderColor,
        borderStyle: "solid",
        borderWidth: "3px",
      }}
      onClick={() => onSelect(color)}
    />
  );
}
