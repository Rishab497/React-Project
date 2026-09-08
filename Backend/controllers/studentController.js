const Student = require("../models/Student");
// Add a new student
const addStudent = async (req, res) => {
try {
const student = new Student(req.body);
const savedStudent = await student.save();
res.status(201).json(savedStudent);
} catch (err) {
res.status(400).json({ message: err.message });
}
};
module.exports = { addStudent };