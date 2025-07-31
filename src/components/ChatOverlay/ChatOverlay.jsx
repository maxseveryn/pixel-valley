import React from "react";
import "./ChatOverlay.css";

export default function ChatOverlay({ isOpen, onToggle }) {
  return (
    <div className="chat-overlay">
      <button className="chat__button" onClick={onToggle}>
        <i className="fa-solid fa-comment"></i>
      </button>

      <div
        className={`chat__container ${isOpen ? "chat__container--open" : ""}`}
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
