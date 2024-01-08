const mongoose = require('mongoose')

const SubjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    totalLectures: {
        type: String,
        required: true
    },
    attendedLectures: {
        type: String,
        required: true
    },
    percentage: {
        type: String,
        required: true
    }
});

const SubjectModel = mongoose.model('Subject', SubjectSchema)

module.exports = SubjectModel;

