import React, { useState } from "react";
import "./Play.css";
import DrawingPanel from "../../components/Canvas/DrawingPanel/DrawingPanel.jsx";
import ChatOverlay from "../../components/ChatOverlay/ChatOverlay.jsx";
import LeaderboardOverlay from "../../components/LeaderboardOverlay/LeaderboardOverlay.jsx";

export default function Play() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = (modalName) => {
    setOpenModal((prev) => (prev === modalName ? null : modalName));
  };

  return (
    <div className="play-container">
      <title>PixelValley - Canvas</title>
      <DrawingPanel width={200} height={100} selectedColor={"#f44336"} />
      <LeaderboardOverlay
        isOpen={openModal === "leaderboard"}
        onToggle={() => handleOpen("leaderboard")}
      />
      <ChatOverlay
        isOpen={openModal === "chat"}
        onToggle={() => handleOpen("chat")}
      />
    </div>
  );
}
