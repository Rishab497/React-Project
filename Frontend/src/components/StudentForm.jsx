import { useState, useEffect } from "react";
import { createStudent, updateStudent } from "../api/studentApi";
function StudentForm({ onStudentAdded, editingStudent, clearEdit }) {
const [formData, setFormData] = useState({
name: "", rollNo: "", course: "", year: "", email: "",
});
useEffect(() => {
if (editingStudent) setFormData(editingStudent);
}, [editingStudent]);
const handleChange = (e) =>
setFormData({ ...formData, [e.target.name]: e.target.value });
const handleSubmit = async (e) => {
e.preventDefault();
if (editingStudent) {
await updateStudent(editingStudent._id, formData);
clearEdit();
} else {
await createStudent(formData);
}
setFormData({
name: "", rollNo: "", course: "", year: "", email: "",
});
onStudentAdded();
};
return (
<form className="student-form" onSubmit={handleSubmit}>
<h2>{editingStudent ? "Edit Student" : "Add Student"}</h2>
<input
name="name"
placeholder="Name"
value={formData.name}
onChange={handleChange}
required
/>
<input
name="rollNo"
placeholder="Roll No"
value={formData.rollNo}
onChange={handleChange}
required
/>
<input
name="course"
placeholder="Course"
value={formData.course}
onChange={handleChange}

required
/>
<input
name="year"
type="number"
placeholder="Year"
value={formData.year}
onChange={handleChange}
required
/>
<input
name="email"
type="email"
placeholder="Email"
value={formData.email}
onChange={handleChange}
required
/>
<button type="submit">
{editingStudent ? "Update Student" : "Add Student"}
</button>
</form>
);
}
export default StudentForm;