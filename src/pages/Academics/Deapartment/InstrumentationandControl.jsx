import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DepartmentTemplate from '../../../PageTemplate/DepartmentTemplate';
import { Instrumentation } from '../../../data/hod';
import { icDepartmentData } from '../../../data/department'

const InstruControl = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events');
        const filteredEvents = response.data.filter(event => event.tags && event.tags.includes('Instrumentation and Control'));
        setEvents(filteredEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <DepartmentTemplate 
      cardsData={Instrumentation}
      title={icDepartmentData.title} 
      description={icDepartmentData.description}
      teachers={icDepartmentData.teachers}
      events={events}
      galleryImages={icDepartmentData.galleryImages}
      
      />
  );
};

export default InstruControl;
