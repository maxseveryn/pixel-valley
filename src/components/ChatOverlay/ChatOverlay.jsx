import { React, useState } from "react";
import "./ChatOverlay.css";

export default function ChatOverlay() {
  const [chatOpen, setChatOpen] = useState(false);
  const toggleChat = () => setChatOpen((prev) => !prev);

  return (
    <div className="chat-overlay">
      <button className="chat__button" onClick={toggleChat}>
        <i className="fa-solid fa-comment"></i>
      </button>

      <div
        className={`chat__container ${chatOpen ? "chat__container--open" : ""}`}
      >
        <h1 className="chat__header">PixelValley | Chat</h1>
        <hr />
        <div className="chat__messages">
          <div className="chat__message"></div>
        </div>
        <form className="chat__form">
          <div className="chat__input-wrapper">
            <input type="text" placeholder="Enter your message..." />
            <button className="chat__send-message" type="submit">
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
