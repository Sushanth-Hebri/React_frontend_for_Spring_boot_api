import React, { useState } from "react";
import axios from "axios";
import "./StudentDetails.css"; // Import CSS for details

const StudentDetails = () => {
  const [id, setId] = useState("");
  const [student, setStudent] = useState(null);

  const handleGetStudent = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/students/${id}`);
      setStudent(response.data);
    } catch (error) {
      setStudent(null);
    }
  };

  return (
    <div className="details-container">
      <h2>Get Student by ID</h2>
      <input type="text" placeholder="Enter ID" value={id} onChange={(e) => setId(e.target.value)} />
      <button className="btn get" onClick={handleGetStudent}>Search</button>
      {student && <p>Name: {student.name}, Age: {student.age}</p>}
    </div>
  );
};

export default StudentDetails;
