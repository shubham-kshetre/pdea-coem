const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  const { title, description, date, link } = req.body;

  try {
    const newEvent = new Event({ title, description, date, link });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 }); // Sort by date in descending order
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
