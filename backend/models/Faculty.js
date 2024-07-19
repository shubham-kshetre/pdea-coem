const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  image: { type: String, required: true },
  email: { type: String, unique: true, required: true } // Ensure unique constraint
});

module.exports = mongoose.model('Faculty', FacultySchema);
