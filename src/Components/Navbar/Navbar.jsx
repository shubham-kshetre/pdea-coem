import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">Your Logo</div>

      <ul className="nav-links">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contactus">Contact Us</a>
        </li>
        <li>
          <a href="/admission">Admission</a>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
        <li>
          <a href="/academics">Academics</a>
        </li>
        <li>
          <a href="/gallery">Gallery</a>
        </li>
        <li>
          <a href="/scholarship">Scholarship</a>
        </li>
        <li>
          <a href="/hostels">Hostels</a>
        </li>
        <li>
          <a href="/placements">Placements</a>
        </li>
      </ul>

      <button className="apply-btn">Apply Now</button>
    </nav>
  );
}

export default Navbar;
