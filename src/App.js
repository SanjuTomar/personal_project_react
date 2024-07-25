import "./App.css";
import { Routes, Route } from "react-router-dom";

import Students from "./Students/index";
import Teachers from "./Teachers/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
      </Routes>
    </div>
  );
}

export default App;
