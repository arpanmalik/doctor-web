import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Appointment from "./Components/Appointments/Appointment";
import SingleDoctor from "./Components/SingleDoctor/SingleDoctor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/single-doctor" element={<SingleDoctor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
