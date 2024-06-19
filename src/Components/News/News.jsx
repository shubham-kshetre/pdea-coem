/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect } from 'react';
import './News.css';
import { Link } from 'react-router-dom';
import { officialNotifications } from '../../data/officialNotifications';
import { latestEvents } from '../../data/latestEvents';

const News = () => {
  const [notifications, setNotifications] = useState(officialNotifications);
  const [events, setEvents] = useState(latestEvents);
  const [limitedNotifications, setLimitedNotifications] = useState([]);
  const [limitedEvents, setLimitedEvents] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const response = await fetch({officialNotifications}); // Replace with your JSON file path
      const fetchedNotifications = await response.json();
      setNotifications(fetchedNotifications.sort((a, b) => b.id - a.id)); // Sort by ID (highest first)
    };

    const fetchEvents = async () => {
      const response = await fetch({latestEvents}); // Replace with your JSON file path
      const fetchedEvents = await response.json();
      setEvents(fetchedEvents.sort((a, b) => b.id - a.id)); // Sort by ID (highest first)
    };

    fetchNotifications();
    fetchEvents();
  }, []);

  useEffect(() => {
    setLimitedNotifications(notifications.slice(0, 2)); // Show top 2 notifications
    setLimitedEvents(events.slice(0, 2)); // Show top 2 events
  }, [notifications, events]); // Update limited data on notification/event changes

  return (
    <section className="news-section py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">News & Events</h2>
        <div className="news-grid grid grid-cols-1 md:grid-cols-2 gap-4">
          {notifications.length > 0 && (
            <div className="news-subsection bg-gray-100 rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-center mb-4">Official Notifications</h3>
              <ul role="list" aria-labelledby="official-notifications-title">
                {limitedNotifications.map((notification) => (
                  <li key={notification.id} className="news-card flex bg-white border border-gray-300 hover:border-gray-400 transition duration-300 px-5 py-5 mb-4 focus:outline focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <h4 className="text-base font-medium mr-4">{notification.title}</h4>
                    <p className="text-gray-600 text-base line-clamp-2">{notification.description}</p>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center mt-4"> {/* Center the "Read More" link */}
                <Link to="/notifications" className="news-section-link text-center text-blue-500 hover:text-blue-700 transition duration-300 py-2 px-4 rounded-md">
                  Read More
                </Link>
              </div>
            </div>
          )}
          {events.length > 0 && (
            <div className="news-subsection bg-gray-100 rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-center mb-4">Latest Events</h3>
              <ul role="list" aria-labelledby="latest-events-title">
                {limitedEvents.map((event) => (
                  <li key={event.id} className="news-card flex bg-white border border-gray-300 hover:border-gray-400 transition duration-300 px-5 py-5 mb-4 focus:outline focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <h4 className="text-base font-medium mr-4">{event.title}</h4>
                    <p className="text-gray-600 text-base line-clamp-2">{event.description}</p>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center mt-4"> {/* Center the "Read More" link */}
                <Link to="/events" className="news-section-link text-center text-blue-500 hover:text-blue-700 transition duration-300 py-2 px-4 rounded-md">
                  Read More
                </Link>
              </div>
            </div>
          )}
          {!(notifications.length > 0 || events.length > 0) && ( // Show message if no data
            <p className="text-center text-gray-500">No news or events available yet.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default News;