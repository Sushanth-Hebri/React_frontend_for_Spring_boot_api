import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";
import StudentList from "./components/StudentList";
import "./App.css"; // Import the custom CSS file

const App = () => {
  const [action, setAction] = useState("");

  return (
    <div className="container">
      <Sidebar setAction={setAction} />
      <div className="content">
        {action === "add" && <StudentForm />}
        {action === "get" && <StudentDetails />}
        {action === "getAll" && <StudentList />}
      </div>
    </div>
  );
};

export default App;
