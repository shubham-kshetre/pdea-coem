import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DepartmentTemplate from '../../../PageTemplate/DepartmentTemplate';
import { eandtc } from '../../../data/hod';
import { eandtcDepartmentData } from '../../../data/department'

const Eandtc = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events');
        const filteredEvents = response.data.filter(event => event.tags && event.tags.includes('Electronics and Telecommunication Engineering'));
        setEvents(filteredEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <DepartmentTemplate 
      cardsData={eandtc}
      title={eandtcDepartmentData.title} 
      description={eandtcDepartmentData.description}
      teachers={eandtcDepartmentData.teachers}
      events={events}
      galleryImages={eandtcDepartmentData.galleryImages}
      
      />
  );
};

export default Eandtc;
