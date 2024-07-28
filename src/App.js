import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Index from './Records/index'
import UserForm from './Records/UserForm.jsx'
function App() {
  return (
    <div className="App">
       <Routes>
       <Route path="/" element={<Index />} />
       <Route path="/user" element={<UserForm />} />

      </Routes>
    </div>
  );
}

export default App;
