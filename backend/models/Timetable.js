const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  faculty: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
});

module.exports = mongoose.model('Timetable', timetableSchema);
