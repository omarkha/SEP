import React from "react";
import "../styles/components.css";
import logo from "../media/logo2.png";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <ul>
        <li>About</li>
        <li>Contact</li>
        <li>Portfolio</li>
      </ul>
    </nav>
  );
};

export default NavBar;
