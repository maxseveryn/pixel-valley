import React from "react";
import "./PixelCords.css";

export default function PixelCords({ pixel }) {
  if (!pixel) {
    return <div className="pixel-cords">X: Y:</div>;
  }

  return (
    <div className="pixel-cords">
      X: {pixel.row} Y: {pixel.col}
    </div>
  );
}
