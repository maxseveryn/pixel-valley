import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <iframe
        className="about__video"
        src="https://www.youtube.com/embed/a7VmAMwxNA4"
        allowFullScreen
        title="About Us Video"
      ></iframe>

      <div className="about__description">
        <h1>About "PixelValley"</h1>
        <div className="about__description-div">
          <p className="description__quote">
            &ldquo; Project inspired by collaborative pixel art games like
            PixelBattle. This platform allows users to contribute one pixel at a
            time to a shared canvas, encouraging creativity, strategy, and
            community interaction. &bdquo;
          </p>
          <p className="description__author">Maxym Severyn</p>
        </div>
      </div>
    </div>
  );
}
