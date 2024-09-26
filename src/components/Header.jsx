import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css"; // Optional: Add styles here or inline

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
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
