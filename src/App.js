import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import HeroSection from "./Components/HeroSection/HereSection";
import About from "./Components/AboutSection/About";

const LandingPage = () => {
  return (
    <Box className="parent">
      <HeroSection />
      <About/>
    </Box>
  );
};

export default LandingPage;
