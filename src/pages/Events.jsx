import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import HeroSection from '../Components/HeroSection/HereSection';
import eventsBackgroundImage from '../assets/images/homebackground.jpg';
import Card from '../Components/EventCard/EventCard';
import Footer from '../Components/Footer/Footer';
import '../assets/css/event.css';

const events = [
    {
      date: "2024-06-26",
      title: "How to make this blog card?",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        date: "2024-06-26",
        title: "How to make this blog card?",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        date: "2024-06-26",
        title: "How to make this blog card?",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        date: "2024-06-26",
        title: "How to make this blog card?",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        date: "2024-06-26",
        title: "How to make this blog card?",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        date: "2024-06-26",
        title: "How to make this blog card?",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

function Events() {
    return (
        <div className='Events'>
            < Navbar />
            <HeroSection backgroundImage={eventsBackgroundImage} Text="Events"/>

            <div className="events-grid">
                {events.map((event, index) => (
                    <Card
                    key={index}
                    date={event.date}
                    title={event.title}
                    description={event.description}
                    />
                ))}
            </div>

            <Footer />
        </div>

    );
}

export default Events;

