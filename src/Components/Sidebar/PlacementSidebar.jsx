import React from 'react';

const Sidebar = ({ onSectionChange }) => {
  const sections = [
    'About Training & Placement',
    'Training Programme',
    'Placed Students',
    'MOU',
    'Campus Report',
    'IIPC Cell',
    'Our Recruiters',
    'Entrepreneurs',
  ];


  return (
    <div
      className={`sidebar flex flex-col gap-3 p-4 rounded-lg shadow-md font-light text-md cursor-pointer bg-white`}
    >
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => onSectionChange(section)}
          className={`text-left py-2 px-4 text-black hover:bg-gray-100 hover:text-blue-500 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-500`}
        >
          {section}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
