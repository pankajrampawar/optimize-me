const attendanceServices = require('../services/attendanceServices');

exports.addSubject = async (req, res) => {
    try {
        const subject = req.body;

        const response = await attendanceServices.saveSubject(subject)

        console.log(response);
        res.status(200).json({ message: response });
    } catch (error) {
        res.status(500).json({message: "internal server error", error});
    }   
};

exports.updateAttendance = async (req, res) => {
    try {
        const { attendance, subjectId } = req.body;

        const response = await attendanceServices.updateAttendance(attendance, subjectId);

        res.status(200).json({ message: "updated the attendance", response} );
    } catch (error) {
        res.status(500).json({ message: "some error occured", error });
    }
};

exports.deleteSubject = async (req, res) => {
    try {
        const { subjectId } = req.body;
        const response = await attendanceServices.deleteSubject(subjectId);

        res.status(200).json({ mesage: "subject delted successfully", response });
    } catch (error) {
        res.status(500).json({ message: "Internal server error, please try again later" , error });
    }
};

exports.getSubjectDetails = async (req, res) => {
    try {
        const subjectId = req.params.id;

        const response = await attendanceServices.getSubjectDetails(subjectId);
        
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: "internal server error", error });
    }
}