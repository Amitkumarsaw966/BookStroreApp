import React from 'react';
import Home from "./home/Home";
import Course from "./components/Course";
import { Route, Routes } from "react-router-dom";
import Signup from './components/Signup';
import Contact from './components/Contact'; // Import the Contact component

function App() {
  return (
    <>
      {/* Define routes for your application */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/signup" element={<Signup />} />
       
      </Routes>
    </>
  ); 
}

export default App;
