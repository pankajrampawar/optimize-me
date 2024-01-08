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
    
}