import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="src/images/polis.png" alt="Auto Centar Polis" />
      </div>
      <Navbar />
      <div className="icons">
        <div id="menu-bar" className="fas fa-bars"></div>
        <a href="tel:+381600862628" target="_blank" className="contact-btn">
          <i className="fa-solid fa-phone"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;
