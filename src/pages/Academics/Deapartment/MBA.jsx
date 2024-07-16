import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DepartmentTemplate from '../../../PageTemplate/DepartmentTemplate';
import { Mba } from '../../../data/hod';
import { mbaDepartmentData } from '../../../data/department'

const MBA = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events');
        const filteredEvents = response.data.filter(event => event.tags && event.tags.includes('M. B. A'));
        setEvents(filteredEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <DepartmentTemplate 
      cardsData={Mba}
      title={mbaDepartmentData.title} 
      description={mbaDepartmentData.description}
      teachers={mbaDepartmentData.teachers}
      events={events}
      galleryImages={mbaDepartmentData.galleryImages}
      
      />
  );
};

export default MBA;
