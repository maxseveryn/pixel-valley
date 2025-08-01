import React, { useState } from "react";
import "./Play.css";
import DrawingPanel from "../../components/Canvas/DrawingPanel/DrawingPanel.jsx";
import ChatOverlay from "../../components/ChatOverlay/ChatOverlay.jsx";
import LeaderboardOverlay from "../../components/LeaderboardOverlay/LeaderboardOverlay.jsx";
import ColorPicker from "../../components/Canvas/ColorPicker/ColorPicker.jsx";
import PixelCords from "../../components/Canvas/PixelCords/PixelCords.jsx";

export default function Play() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#f44336");
  const [hoveredPixel, setHoveredPixel] = useState(null);

  const handlePixelHover = (row, col) => {
    if (!hoveredPixel || hoveredPixel.row !== row || hoveredPixel.col !== col) {
      setHoveredPixel({ row, col });
    }
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleOpen = (modalName) => {
    setOpenModal((prev) => (prev === modalName ? null : modalName));
  };

  return (
    <div className="play-container">
      <title>PixelValley - Canvas</title>
      <DrawingPanel
        width={200}
        height={100}
        selectedColor={selectedColor}
        onPixelHover={handlePixelHover}
      />
      <LeaderboardOverlay
        isOpen={openModal === "leaderboard"}
        onToggle={() => handleOpen("leaderboard")}
      />
      <ChatOverlay
        isOpen={openModal === "chat"}
        onToggle={() => handleOpen("chat")}
      />
      <ColorPicker onColorChange={handleColorSelect} />
      <PixelCords pixel={hoveredPixel} />
    </div>
  );
}
