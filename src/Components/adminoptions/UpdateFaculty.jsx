import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateFaculty = () => {
  const [facultyList, setFacultyList] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/faculty');
        setFacultyList(response.data);
      } catch (error) {
        console.error('Error fetching faculty:', error);
        setMessageType('error');
        setMessage('Failed to fetch faculty members');
      }
    };

    fetchFaculty();
  }, []);

  const handleUpdate = async () => {
    if (!selectedFaculty || !name || !position || !image || !email) {
      setMessageType('error');
      setMessage('Please fill in all fields');
      return;
    }

    try {
      await axios.put(`http://localhost:5000/api/faculty/${selectedFaculty}`, { name, position, image, email });
      setMessageType('success');
      setMessage('Faculty member updated successfully');
      setSelectedFaculty('');
      setName('');
      setPosition('');
      setImage('');
      setEmail('');
    } catch (error) {
      console.error('Error updating faculty:', error);
      setMessageType('error');
      setMessage('Failed to update faculty member');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Update Faculty Member</h2>
      {message && (
        <p className={`mb-4 text-center ${messageType === 'success' ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </p>
      )}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Select Faculty</label>
        <select
          value={selectedFaculty}
          onChange={(e) => {
            setSelectedFaculty(e.target.value);
            const selected = facultyList.find(faculty => faculty._id === e.target.value);
            if (selected) {
              setName(selected.name);
              setPosition(selected.position);
              setImage(selected.image);
              setEmail(selected.email);
            }
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Faculty</option>
          {facultyList.map(faculty => (
            <option key={faculty._id} value={faculty._id}>
              {faculty.name} ({faculty.email})
            </option>
          ))}
        </select>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          onClick={handleUpdate}
          className="w-full mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-orange-400 hover:bg-orange-700"
        >
          Update Faculty
        </button>
      </div>
    </div>
  );
};

export default UpdateFaculty;
