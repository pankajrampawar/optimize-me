const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

router.post('/addSubject', attendanceController.addSubject);
router.post('/updateAttendance', attendanceController.updateAttendance);

module.exports = router;