import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>
      
      <div className="logo" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
        PDEA'S COEM
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li className="dropdown">
          <a href="/academics" target="_blank" rel="noopener noreferrer">Academics</a>
          <ul className="dropdown-content">
            <li>
              <a href="/departments" target="_blank" rel="noopener noreferrer">Departments</a>
              <ul className="dropdown-subcontent">
                <li><a href="/first-year" target="_blank" rel="noopener noreferrer">First Year Engineering</a></li>
                <li><a href="/mech-eng" target="_blank" rel="noopener noreferrer">Mechanical Engineering</a></li>
                <li><a href="/comp-eng" target="_blank" rel="noopener noreferrer">Computer Engineering</a></li>
                <li><a href="/extc-eng" target="_blank" rel="noopener noreferrer">Electronics and Telecommunication Engineering</a></li>
                <li><a href="/instru-eng" target="_blank" rel="noopener noreferrer">Instrumentation and Control Engineering</a></li>
                <li><a href="/it-eng" target="_blank" rel="noopener noreferrer">Information Technology</a></li>
              </ul>
            </li>
            <li><a href="/e-learning" target="_blank" rel="noopener noreferrer">E-Learning</a></li>
          </ul>
        </li>

        <li>
          <a href="/about" target="_blank" rel="noopener noreferrer">About</a>
        </li>
        <li>
          <a href="/contactus" target="_blank" rel="noopener noreferrer">Contact Us</a>
        </li>
        <li>
          <a href="/admission" target="_blank" rel="noopener noreferrer">Admission</a>
        </li>
        <li>
          <a href="/events" target="_blank" rel="noopener noreferrer">Events</a>
        </li>
        <li>
          <a href="/gallery" target="_blank" rel="noopener noreferrer">Gallery</a>
        </li>
        <li>
          <a href="/scholarship" target="_blank" rel="noopener noreferrer">Scholarship</a>
        </li>
        <li>
          <a href="/hostels" target="_blank" rel="noopener noreferrer">Hostels</a>
        </li>
        <li>
          <a href="/placements" target="_blank" rel="noopener noreferrer">Placements</a>
        </li>
      </ul>

      <button className="apply-btn">Apply Now</button>
    </nav>
  );
}

export default Navbar;
