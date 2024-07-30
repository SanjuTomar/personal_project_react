import "./App.css";
import { Routes, Route } from "react-router-dom";

import Students from "./Students/index";
import Teachers from "./Teachers/index";
import StudentAttendance from "./Students/StudentAttendance";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/attendance" element={<StudentAttendance/>}/>
      </Routes>
    </div>
  );
}

export default App;
