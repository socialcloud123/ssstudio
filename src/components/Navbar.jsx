import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = (e) => {
    e.preventDefault();
    setOpen(false);
    
    if (location.pathname === '/') {
      // Already on home page, just scroll
      document.getElementById('contact-form')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Navigate to home page first, then scroll
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact-form')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 300);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <ul className={`navbar-links ${open ? "show" : ""}`}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/Podcast" onClick={() => setOpen(false)}>Podcast</Link></li>
        <li><Link to="/Studios" onClick={() => setOpen(false)}>Studios</Link></li>
        <li><Link to="/FashionShoot" onClick={() => setOpen(false)}>Fashion Shoot</Link></li>
        <li>
          <a href="#contact-form" onClick={handleContactClick}>
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;