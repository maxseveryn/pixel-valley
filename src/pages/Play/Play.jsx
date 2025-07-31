import React from "react";
import "./Play.css";
import DrawingPanel from "../../components/Canvas/DrawingPanel/DrawingPanel.jsx";
import ChatOverlay from "../../components/ChatOverlay/ChatOverlay.jsx";

export default function Play() {
  return (
    <div className="play-container">
      <title>PixelValley - Canvas</title>
      <DrawingPanel width={200} height={100} selectedColor={"#f44336"} />
      <ChatOverlay />
    </div>
  );
}
