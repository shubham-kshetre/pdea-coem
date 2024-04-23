import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import HeroSection from "./Components/HeroSection/HereSection";
import About from "./Components/AboutSection/About";
import EventCarousel from "./Components/Carousel/EventCarousel";

const LandingPage = () => {
  return (
    <Box className="parent">
      <HeroSection />
      <About />

      <Box sx={{ height: 700, width: "100%" }}>
        <EventCarousel />
      </Box>
    </Box>
  );
};

export default LandingPage;
