import React, { useState } from "react";
import axios from "axios";
import "./StudentList.css"; // Import CSS for list

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const handleGetAllStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/students");
      setStudents(response.data);
    } catch (error) {
      setStudents([]);
    }
  };

  return (
    <div className="list-container">
      <h2>All Students</h2>
      <button className="btn getAll" onClick={handleGetAllStudents}>Fetch Students</button>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name} - {student.age} years</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
