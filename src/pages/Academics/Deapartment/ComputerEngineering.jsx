import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DepartmentTemplate from '../../../PageTemplate/DepartmentTemplate';
import { Computer } from '../../../data/hod';
import { computerDepartmentData } from '../../../data/department'

const CompEngg = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events');
        const filteredEvents = response.data.filter(event => event.tags && event.tags.includes('Computer Engineering'));
        setEvents(filteredEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <DepartmentTemplate 
      cardsData={Computer}
      title={computerDepartmentData.title} 
      description={computerDepartmentData.description}
      teachers={computerDepartmentData.teachers}
      events={events}
      galleryImages={computerDepartmentData.galleryImages}
      
      />
  );
};

export default CompEngg;
