import React, { useState } from "react";
import axios from "axios";
import "./StudentForm.css"; // Import CSS for form

const StudentForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleAddStudent = async () => {
    try {
      const response = await axios.post("http://localhost:8080/students", { name, age });
      setMessage(`Student added: ${response.data.id}`);
    } catch (error) {
      setMessage("Error adding student");
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Student</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <button className="btn add" onClick={handleAddStudent}>Submit</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default StudentForm;
