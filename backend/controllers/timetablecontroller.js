const Timetable = require('../models/Timetable');

// Add a lecture
exports.addLecture = async (req, res) => {
  try {
    const lecture = new Timetable(req.body);
    await lecture.save();
    res.status(201).json({ message: 'Lecture added successfully!', lecture });
  } catch (error) {
    res.status(500).json({ message: 'Error adding lecture.', error });
  }
};

// Remove a lecture
exports.removeLecture = async (req, res) => {
  try {
    const { id } = req.params;
    await Timetable.findByIdAndDelete(id);
    res.status(200).json({ message: 'Lecture removed successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing lecture.', error });
  }
};

// Get all lectures
exports.getTimetable = async (req, res) => {
  try {
    const timetable = await Timetable.find();
    res.status(200).json(timetable);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching timetable.', error });
  }
};
