import React from 'react';

const TeacherCard = ({ image, name, position }) => {
  return (
    <div className="text-center">
      <img className="mx-auto rounded-full w-24 h-24" src={image} alt={name} />
      <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>
      <p className="mt-1 text-sm text-gray-500">{position}</p>
    </div>
  );
};

export default TeacherCard;
