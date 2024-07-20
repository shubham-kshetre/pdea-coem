import React, { useState } from 'react';
import axios from 'axios';

const departments = [
  "First Year Engineering",
  "Computer Engineering",
  "Electronics and Telecommunication Engineering",
  "Information Technology",
  "Instrumentation and Control",
  "M. B. A",
  "Mechanical Engineering"
];

const AddFaculty = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');
  const [tags, setTags] = useState([]);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleTagChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setTags([...tags, value]);
    } else {
      setTags(tags.filter(tag => tag !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/faculty', { name, position, image, email, tags }, { withCredentials: true });
      setMessageType('success');
      setMessage('Faculty member added successfully');
      setName('');
      setPosition('');
      setImage('');
      setEmail('');
      setTags([]);
    } catch (error) {
      console.error('Error adding faculty:', error);
      setMessageType('error');
      setMessage('Failed to add faculty member');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center text-text-color">Add Faculty Member</h2>
      {message && (
        <p className={`mb-4 text-center ${messageType === 'success' ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
          {departments.map((department, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                value={department}
                checked={tags.includes(department)}
                onChange={handleTagChange}
                className="form-checkbox h-4 w-4 text-orange-400 transition duration-150 ease-in-out"
              />
              <span className="ml-2">{department}</span>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-orange-400 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
        >
          Add Faculty
        </button>
      </form>
    </div>
  );
};

export default AddFaculty;
