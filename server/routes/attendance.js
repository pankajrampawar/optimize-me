const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

router.post('/addSubject', attendanceController.addSubject);

module.exports = router;