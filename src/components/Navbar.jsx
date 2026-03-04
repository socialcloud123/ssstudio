import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import "./Navbar.css";
import logo400 from "/logo-400.png";
import logo800 from "/logo-800.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;
        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, { xPercent: -50, scale: 0, transformOrigin: `50% ${originY}px` });

        const label = pill.querySelector('.pill-label');
        const hoverLabel = pill.querySelector('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 });

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });
        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease: 'power3.easeOut', overwrite: 'auto' }, 0);
        if (label) tl.to(label, { y: -(h + 8), duration: 2, ease: 'power3.easeOut', overwrite: 'auto' }, 0);
        if (hoverLabel) {
          gsap.set(hoverLabel, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(hoverLabel, { y: 0, opacity: 1, duration: 2, ease: 'power3.easeOut', overwrite: 'auto' }, 0);
        }
        tlRefs.current[index] = tl;
      });
    };

    layout();
    window.addEventListener('resize', layout);
    return () => window.removeEventListener('resize', layout);
  }, []);

  const handleEnter = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), { duration: 0.3, ease: 'power3.easeOut', overwrite: 'auto' });
  };

  const handleLeave = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, { duration: 0.2, ease: 'power3.easeOut', overwrite: 'auto' });
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setOpen(false);
    setBookOpen(false);
    
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

  const isBookSpaceActive = ['/Podcast', '/FashionShoot', '/Studios'].includes(location.pathname);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <picture>
          <source srcSet={`${logo400} 400w, ${logo800} 800w`} sizes="140px" />
          <img src={logo400} alt="Logo" width="400" height="225" decoding="async" loading="lazy" />
        </picture>
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
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link
            to="/"
            onClick={() => {
              setOpen(false);
              setBookOpen(false);
            }}
            onMouseEnter={() => handleEnter(0)}
            onMouseLeave={() => handleLeave(0)}
          >
            <span className="hover-circle" ref={el => circleRefs.current[0] = el}></span>
            <span className="label-stack">
              <span className="pill-label">Home</span>
              <span className="pill-label-hover">Home</span>
            </span>
          </Link>
        </li>

        <li
          className={`nav-dropdown ${isBookSpaceActive ? 'active' : ''} ${bookOpen ? 'open' : ''}`}
          onMouseEnter={() => handleEnter(1)}
          onMouseLeave={() => handleLeave(1)}
        >
          <button
            type="button"
            className="dropdown-toggle"
            onClick={() => setBookOpen((prev) => !prev)}
          >
            <span className="hover-circle" ref={el => circleRefs.current[1] = el}></span>
            <span className="label-stack">
              <span className="pill-label">Book Our Space</span>
              <span className="pill-label-hover">Book Our Space</span>
            </span>
            <span className="dropdown-caret" aria-hidden="true">▾</span>
          </button>

          <ul className="dropdown-menu">
            <li>
              <Link
                to="/Studios"
                onClick={() => { setOpen(false); setBookOpen(false); }}
                onMouseEnter={() => handleEnter(3)}
                onMouseLeave={() => handleLeave(3)}
              >
                <span className="hover-circle" ref={el => circleRefs.current[3] = el}></span>
                <span className="label-stack">
                  <span className="pill-label">Rent Our Studio</span>
                  <span className="pill-label-hover">Rent Our Studio</span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/Podcast"
                onClick={() => { setOpen(false); setBookOpen(false); }}
                onMouseEnter={() => handleEnter(4)}
                onMouseLeave={() => handleLeave(4)}
              >
                <span className="hover-circle" ref={el => circleRefs.current[4] = el}></span>
                <span className="label-stack">
                  <span className="pill-label">Podcast Shoot</span>
                  <span className="pill-label-hover">Podcast Shoot</span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/FashionShoot"
                onClick={() => { setOpen(false); setBookOpen(false); }}
                onMouseEnter={() => handleEnter(5)}
                onMouseLeave={() => handleLeave(5)}
              >
                <span className="hover-circle" ref={el => circleRefs.current[5] = el}></span>
                <span className="label-stack">
                  <span className="pill-label">Model Shoot</span>
                  <span className="pill-label-hover">Model Shoot</span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/Studios"
                onClick={() => { setOpen(false); setBookOpen(false); }}
                onMouseEnter={() => handleEnter(6)}
                onMouseLeave={() => handleLeave(6)}
              >
                <span className="hover-circle" ref={el => circleRefs.current[6] = el}></span>
                <span className="label-stack">
                  <span className="pill-label">Product Shoot</span>
                  <span className="pill-label-hover">Product Shoot</span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/Studios"
                onClick={() => { setOpen(false); setBookOpen(false); }}
                onMouseEnter={() => handleEnter(7)}
                onMouseLeave={() => handleLeave(7)}
              >
                <span className="hover-circle" ref={el => circleRefs.current[7] = el}></span>
                <span className="label-stack">
                  <span className="pill-label">Content Creation</span>
                  <span className="pill-label-hover">Content Creation</span>
                </span>
              </Link>
            </li>
          </ul>
        </li>

        <li className={location.pathname === '/contactus' ? 'active' : ''}>
          <a href="#contact-form" onClick={handleContactClick} onMouseEnter={() => handleEnter(2)} onMouseLeave={() => handleLeave(2)}>
            <span className="hover-circle" ref={el => circleRefs.current[2] = el}></span>
            <span className="label-stack">
              <span className="pill-label">Contact Us</span>
              <span className="pill-label-hover">Contact Us</span>
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
