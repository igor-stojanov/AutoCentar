import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="main-footer">
        <div className="footer-logo">
          <img src="src/images/polis.png" alt="Auto Centar Polis" />
        </div>
      </div>
      <nav className="footer-navbar">
        <a href="#Pocetna">Početna</a>
        <a href="#about">O nama</a>
        <a href="#usluge">Usluge</a>
        <a href="#lokacija">Kontakt</a>
      </nav>
    </footer>
  );
}

export default Footer;
