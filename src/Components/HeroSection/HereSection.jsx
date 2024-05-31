import React from "react";
import "./HeroSection.css";
import Navbar from "../Navbar/Navbar";

function HeroSection({ backgroundImage,Text }) {
  return (
    <div 
      className="landing-page" 
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <Navbar />
      <div className="overlay"></div>
      <h1>{Text}</h1>
    </div>
  );
}

export default HeroSection;
