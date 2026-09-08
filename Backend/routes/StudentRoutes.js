const express = require("express");
const router = express.Router();
const { addStudent } = require("../controllers/StudentController");
router.post("/", addStudent);
module.exports = router;