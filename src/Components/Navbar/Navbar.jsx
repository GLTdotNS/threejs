import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaCog } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { SiAboutdotme } from "react-icons/si";
import { FaBlog } from "react-icons/fa";
import { FaReact, FaPython } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";

import "./Navbar.css";

const BottomNavbar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  useEffect(() => {
    const btns = document.getElementsByClassName("nav-item");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }, []);

  const profileRef = useRef();

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <div className="orbitron bottom-navbar">
      <Link
        to="/"
        className="nav-item active"
        onClick={() => setShowProfileMenu(false)}
      >
        <SiAboutdotme />

        <span>About</span>
      </Link>

      <div
        onClick={toggleProfileMenu}
        className="nav-item profile-item"
        ref={profileRef}
      >
        <GoProjectSymlink />

        <span>Projects</span>
      </div>
      {showProfileMenu && (
        <div className="profile-menu font-bold">
          <ul>
            <li>
              <Link
                onClick={toggleProfileMenu}
                to="/blog"
                className="profile-link flex items-center"
              >
                <span style={{ marginRight: "0.5rem" }}>
                  <FaReact size={25} className="text-sky-500" />
                </span>
                <span>NONCREATIVEBLOG</span>
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleProfileMenu}
                to="/voluspa"
                className="profile-link flex items-center"
              >
                <span style={{ marginRight: "0.5rem" }}>
                  <FaReact size={25} className="text-sky-500" />
                </span>
                <span className="uppercase">Völuspá</span>
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleProfileMenu}
                to="/strivenex"
                className="profile-link flex items-center"
              >
                <span style={{ marginRight: "0.5rem" }}>
                  <FaReact size={25} className="text-sky-500" />
                </span>
                <span>STRIVENEX</span>
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleProfileMenu}
                to="/seethem"
                className="profile-link flex items-center"
              >
                <span style={{ marginRight: "0.5rem" }}>
                  <FaPython size={25} className="text-yellow-300" />
                </span>
                <span>SEETHEM</span>
              </Link>
            </li>
            <button onClick={toggleProfileMenu}>close</button>
          </ul>
        </div>
      )}

      <Link to="https://www.noncreativeblog.net/" className="nav-item">
        <FaBlog />

        <span>Blog</span>
      </Link>
      <Link
        to="https://www.linkedin.com/in/georgi-tonkov/"
        className="nav-item"
      >
        <FaEnvelope />
        <span>Contacts</span>
      </Link>
    </div>
  );
};

export default BottomNavbar;
