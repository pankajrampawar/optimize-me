const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

router.get('/subjectDetails/:id', attendanceController.getSubjectDetails);
router.post('/addSubject', attendanceController.addSubject);
router.post('/updateAttendance', attendanceController.updateAttendance);
router.delete('/deleteSubject', attendanceController.deleteSubject);

module.exports = router;