/* eslint-disable no-unused-vars */
import React from "react";
import "../assets/css/home.css";
import { Box } from "@mui/material";
import HeroSection from "../Components/HeroSection/HereSection";
import Statistics from "../Components/Statistics/Statistics";
import About from "../Components/AboutSection/About";
import Footer from "../Components/Footer/Footer.jsx";
import EventCarouselNavigator from '../Components/Carousel/EventCarouselNavigator.jsx';
import homeBackgroundImage from '../assets/images/homebackground.jpg';



const Home = () => {
  return (
    <Box className="parent">
      <HeroSection backgroundImage={homeBackgroundImage} Text="Education is key to Success" />

      <About />

      <Box sx={{ height: 800, width: "100%" }}>
        <EventCarouselNavigator />
      </Box>

      <Statistics />
      <Footer/>
      

    </Box>
  );
};

export default Home;
