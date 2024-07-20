const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  image: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  tags: { type: [String], required: true } // Added tags as an array of strings
});

module.exports = mongoose.model('Faculty', FacultySchema);
