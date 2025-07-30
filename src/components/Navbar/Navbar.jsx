import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import profileUser from "../../assets/default-user.png";

const currentUser = false;

const luckyLinks = [
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.youtube.com/watch?v=09LTT0xwdfw",
  "https://www.youtube.com/watch?v=AN1RJF55NXI",
  "https://youtu.be/gUQUfgBCM-s?si=dBLOsLGatLnchfW9",
  "https://youtu.be/XfqOB4hvxlY?si=f10kigw_xwvsO8Z5",
];

const handleLuckyClick = (e) => {
  e.preventDefault();

  const getRandomLink = () => {
    const index = Math.floor(Math.random() * luckyLinks.length);
    return luckyLinks[index];
  };

  const randomLink = getRandomLink();

  window.location.href = randomLink;
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <a
          href="https://t.me/maxseveryn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="navbar__icon fa-brands fa-telegram"></i>
        </a>
        <a
          href="https://instagram.com/maxseveryn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="navbar__icon fab fa-instagram"></i>
        </a>
        <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
          <i className="navbar__icon fab fa-twitter"></i>
        </a>
        <a
          href="https://www.youtube.com/@riterety"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="navbar__icon fa-brands fa-youtube"></i>
        </a>
      </div>

      <div
        ref={menuRef}
        className={`navbar__center ${menuOpen ? "navbar__center--open" : ""}`}
      >
        <ul className="navbar__list">
          <li className="navbar__item">
            <a className="link" href="/" onClick={() => setMenuOpen(false)}>
              HOME
            </a>
          </li>
          <li className="navbar__item">
            <a
              className="link"
              href="/about"
              onClick={() => setMenuOpen(false)}
            >
              ABOUT
            </a>
          </li>
          <li className="navbar__item">
            <a
              className="link"
              href="/lucky"
              onClick={(e) => {
                handleLuckyClick(e);
                setMenuOpen(false);
              }}
            >
              FEELING LUCKY!
            </a>
          </li>
        </ul>
      </div>

      <div className={`navbar__right ${menuOpen ? "navbar__right--open" : ""}`}>
        {currentUser ? (
          <>
            <img className="navbar__img" src={profileUser} alt="User Avatar" />
            <span className="navbar__logout">LOGOUT</span>
          </>
        ) : (
          <ul className="navbar__list">
            <a href="/login">
              <li className="navbar__item">LOGIN</li>
            </a>
            <a href="/register">
              <li className="navbar__item">REGISTER</li>
            </a>
          </ul>
        )}
      </div>

      <button
        ref={hamburgerRef}
        className="navbar__hamburger"
        onClick={toggleMenu}
      >
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  );
}
