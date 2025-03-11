import React from "react";
import "./Sidebar.css"; // Import CSS for sidebar

const Sidebar = ({ setAction }) => {
  return (
    <div className="sidebar">
      <h2>Student Database</h2>
      <button onClick={() => setAction("add")} className="btn add">Add Student</button>
      <button onClick={() => setAction("get")} className="btn get">Get Student by ID</button>
      <button onClick={() => setAction("getAll")} className="btn getAll">Get All Students</button>
    </div>
  );
};

export default Sidebar;
