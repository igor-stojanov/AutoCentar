import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css"; // Assuming you have the correct path for your CSS file

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img
                src="/polisbg.png"
                alt="Logo"
                style={{ maxHeight: "60px" }}
              />
            </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/services">Our Services</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
