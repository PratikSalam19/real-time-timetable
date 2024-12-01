const express = require('express');
const { addLecture, removeLecture, getTimetable } = require('../controllers/timetableController');
const router = express.Router();

router.post('/add', addLecture);
router.delete('/remove/:id', removeLecture);
router.get('/', getTimetable);

module.exports = router;
