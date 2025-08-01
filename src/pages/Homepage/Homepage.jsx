import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundVideo from "../../assets/background.mp4";
import mainLogo from "../../assets/logo.png";
import "./Homepage.css";

import ChatOverlay from "../../components/ChatOverlay/ChatOverlay.jsx";

export default function Homepage() {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  const handleOpen = (modalName) => {
    setOpenModal((prev) => (prev === modalName ? null : modalName));
  };

  return (
    <div className="home">
      <title>PixelValley - Homepage</title>

      <div className="homepage-container">
        <video autoPlay loop muted className="background__video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        <div className="homepage__landing">
          <img src={mainLogo} alt="Logo" />
          <p>
            Exciting online arena where every player can contribute their unique
            pixel to create a dynamic and evolving digital masterpiece!
          </p>
          <div className="landing__buttons">
            <button
              onClick={() => navigate("/canvas")}
              className="landing__play-button"
            >
              Play
            </button>
            <button
              onClick={() => navigate("/about")}
              className="landing__about-button"
            >
              About Us
            </button>
          </div>
        </div>
        <ChatOverlay
          isOpen={openModal === "chat"}
          onToggle={() => handleOpen("chat")}
        />
      </div>
    </div>
  );
}
