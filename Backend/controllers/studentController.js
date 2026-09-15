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

// Get all students
const getStudents = async (req, res) => {
    try {
        const students = await Student.find().sort({ createdAt: -1 });
        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { addStudent, getStudents };