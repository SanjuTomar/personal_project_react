import "./App.css";
import { Routes, Route } from "react-router-dom";

import Index from "./Records/index";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
