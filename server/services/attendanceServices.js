const SubjectModel = require('../models/attendance');

exports.saveSubject = async (subject) => {
    const subjectToSave = new SubjectModel({
        name: subject.name,
        totalLectures: subject.totalLectures,
        attendedLectures: subject.attendedLectures
    });

    return subjectToSave.save()
}