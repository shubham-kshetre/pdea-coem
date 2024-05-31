import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Academics from './pages/Academics';
import Admission from './pages/Admission';
import ContactUs from './pages/ContactUs'; // fixed the typo here
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Hostels from './pages/Hostels';
import Placements from './pages/Placements';
import Scholarship from './pages/Scholarship';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/hostels" element={<Hostels />} />
        <Route path="/placements" element={<Placements />} /> {/* fixed the typo here */}
        <Route path="/scholarship" element={<Scholarship />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
