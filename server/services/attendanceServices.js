const mongoose  = require('mongoose');
const SubjectModel = require('../models/attendance');

exports.saveSubject = async (subject) => {

    const subjectToSave = new SubjectModel({
        name: subject.name,
        totalLectures: subject.totalLectures,
        attendedLectures: subject.attendedLectures,
        percentage: subject.percentage
    });

    return subjectToSave.save()
};

exports.updateAttendance = async (attendance, subjectId) => {
    try {
        const updatedSubject = await SubjectModel.findByIdAndUpdate(
            subjectId,
            { $set: {
                totalLectures: attendance.totalLectures,
                attendedLectures: attendance.attendedLectures,
                percentage: attendance.percentage
            }},
            { new: true }
        );

        return updatedSubject;
    } catch (error) {
        throw new Error('unable to update the mongo');
    }
};
