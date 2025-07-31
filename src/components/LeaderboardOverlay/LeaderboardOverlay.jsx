import React from "react";
import "./LeaderboardOverlay.css";

export default function LeaderboardOverlay({ isOpen, onToggle }) {
  return (
    <div className="leaderboard-overlay">
      <button className="leaderboard__button" onClick={onToggle}>
        <i className="fa-solid fa-trophy"></i>
      </button>

      <div
        className={`leaderboard__container ${
          isOpen ? "leaderboard__container--open" : ""
        }`}
      >
        <h1 className="leaderboard__header">PixelValley | Leaderboard</h1>
        <hr />
        <h2 className="leaderboard__description">Total pixels placed</h2>
        <ul className="leaderboard__list">
          <li className="leaderboard__item">
            <span className="leaderboard__rank">1.</span>
            <span className="leaderboard__username">Maxym</span>
            <span className="leaderboard__pixels">1000 pixels</span>
          </li>
          <li className="leaderboard__item">
            <span className="leaderboard__rank">2.</span>
            <span className="leaderboard__username">Severyn</span>
            <span className="leaderboard__pixels">990 pixels</span>
          </li>
          <li className="leaderboard__item">
            <span className="leaderboard__rank">3.</span>
            <span className="leaderboard__username">Riterety</span>
            <span className="leaderboard__pixels">980 pixels</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
