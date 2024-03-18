import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Strive from "./Components/Strive/Strive";
import Hero from "./Components/Hero/Hero";
import Blog from "./Components/Blog/Blog";
import Voluspa from "./Components/Voluspa/Voluspa";
import Seethem from "./Components/Seethem/Seethem";
import "./App.css";
import BottomNavbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <BottomNavbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/strivenex" element={<Strive />} />
          <Route path="/voluspa" element={<Voluspa />} />
          <Route path="/seethem" element={<Seethem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
