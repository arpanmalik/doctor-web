import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Appointment from "./Components/Appointments/Appointment";
import SingleDoctor from "./Components/SingleDoctor/SingleDoctor";
import Profile from "./Components/Profile/Profile";
import Shop from "./Components/Shop/Shop";
import AppointmentAll from "./Components/Appointments/AppointmentAll";
import SingleProduct from "./Components/Shop/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/single-doctor" element={<SingleDoctor />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/appointment-all" element={<AppointmentAll />} />
        <Route path="/single-product" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
