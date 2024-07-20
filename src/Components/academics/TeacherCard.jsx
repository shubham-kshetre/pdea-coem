import React from 'react';

const TeacherCard = ({ teacher }) => {
  if (!teacher) return null; // Handle undefined teacher

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center text-center">
      <img src={teacher.image} alt={teacher.name} className="w-32 h-32 object-cover rounded-full mb-4" />
      <h3 className="text-lg font-semibold text-gray-800">{teacher.name}</h3>
      <p className="text-gray-600">{teacher.position}</p>
      <p className="text-gray-500 text-sm">{teacher.email}</p> {/* Display email */}
    </div>
  );
};

export default TeacherCard;
