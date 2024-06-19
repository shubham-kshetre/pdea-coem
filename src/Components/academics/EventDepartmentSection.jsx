import React from 'react';
import EventCard from '../EventCard/EventCard';

const EventDepartmentSection = ({events}) => {

  return (
    <div className="py-12 bg-white">
        <h2 className='text-center text-4xl font-bold '>Latest Event's</h2>
        <div className="pt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {events.map((event) => (
                    <EventCard
                    key={event.id}
                    id={event.id}
                    date={event.date}
                    title={event.title}
                    description={event.description}
                    />
                ))}
          </div>
        </div>
      </div>
    
  );
};

export default EventDepartmentSection;
