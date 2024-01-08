const SubjectModel = require('../models/attendance');

exports.saveSubject = async (subject) => {

    const subjectToSave = new SubjectModel({
        name: subject.name,
        totalLectures: subject.totalLectures,
        attendedLectures: subject.attendedLectures,
        percentage: subject.percentage
    });

    return subjectToSave.save()
}

exports.updateTotalLecute