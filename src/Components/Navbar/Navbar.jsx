/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Dropdown from "./Dropdown/Dropdown";
import { academicsLinks } from "./Dropdown/dropdownLinks";

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

        <Dropdown title={{ href: "/academics", text: "Academics" }} links={academicsLinks} />

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
