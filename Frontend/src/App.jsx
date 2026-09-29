import { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import { getAllStudents } from "./api/studentApi";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const fetchStudents = async () => {
    const res = await getAllStudents();
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container">
      <h1>Student Management System</h1>

      <StudentForm
        onStudentAdded={fetchStudents}
        editingStudent={editingStudent}
        clearEdit={() => setEditingStudent(null)}
      />

      <StudentList
        students={students}
        onEdit={setEditingStudent}
      />
    </div>
  );
}

export default App;