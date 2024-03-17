import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Hero from "./Components/Hero/Hero";
import Blog from "./Components/Blog/Blog";
import "./App.css";
import BottomNavbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <BottomNavbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
