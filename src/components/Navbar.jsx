import React from "react";
import "./Navbar.css";
import logo from "/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/snapshot">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;