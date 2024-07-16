import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DepartmentTemplate from '../../../PageTemplate/DepartmentTemplate';
import { It } from '../../../data/hod';
import { itDepartmentData } from '../../../data/department'

const IT = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events');
        const filteredEvents = response.data.filter(event => event.tags && event.tags.includes('Information Technology'));
        setEvents(filteredEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);


  return (
    <DepartmentTemplate 
      cardsData={It}
      title={itDepartmentData.title} 
      description={itDepartmentData.description}
      teachers={itDepartmentData.teachers}
      events={events}
      galleryImages={itDepartmentData.galleryImages}
      
      />
  );
};

export default IT;
