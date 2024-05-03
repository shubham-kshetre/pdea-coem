import React, { useState } from 'react';
import EventCarousel from '../Carousel/EventCarousel'; // Import your EventCarousel component
import EventCarousel1 from '../Carousel/EventCarousel1'
import '../Carousel/EventCarousel.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import EventCarousel2 from '../Carousel/EventCarousel2'

const MultiCarousel = () => {
  const [activeCarousel, setActiveCarousel] = useState(1);

  const handleCarouselChange = (carouselNumber) => {
    setActiveCarousel(carouselNumber);
  };

  return (
    <div>
      <div className="carousel-buttons">
        <Button variant="contained" sx={{}} onClick={() => handleCarouselChange(1)}>Carousel 1</Button>
        <Button variant="contained" onClick={() => handleCarouselChange(2)}>Carousel 2</Button>
        <Button variant="contained" onClick={() => handleCarouselChange(3)}>Carousel 3</Button>
      </div>
      {activeCarousel === 1 && <EventCarousel />}
      {activeCarousel === 2 && <EventCarousel1 />}
      {activeCarousel === 3 && <EventCarousel2 />}
    </div>
  );
};

export default MultiCarousel;
