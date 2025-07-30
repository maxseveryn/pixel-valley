import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage.jsx";

import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./pages/About/About.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";

export function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}
