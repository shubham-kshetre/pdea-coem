import React from 'react';
import { FiBell, FiCalendar } from 'react-icons/fi'; // Import additional icons
import { useNavigate } from 'react-router-dom';

const AdminOptionContent = () => {
  const navigate = useNavigate();

  const adminOptions = [
    { title: 'Create Notification', icon: <FiBell />, path: '/admin/create-notification' },
    { title: 'Create Event', icon: <FiCalendar />, path: '/admin/create-event' },
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-text-color">Admin Options</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adminOptions.map((option, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
            onClick={() => handleCardClick(option.path)}
          >
            <div className="flex items-center justify-between">
              <div className="text-4xl text-cta-color">{option.icon}</div>
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-text-color">{option.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOptionContent;
