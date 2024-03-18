import React, { useState, useRef } from "react";
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
  const profileRef = useRef();

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <div className="bottom-navbar">
      <Link to="/" className="nav-item">
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
        <div className="profile-menu">
          <ul>
            <li>
              <Link
                onClick={toggleProfileMenu}
                to="/blog"
                className="profile-link flex items-center"
              >
                <span style={{ marginRight: "0.5rem" }}>
                  <FaReact color="blue" />
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
                  <FaReact color="blue" />
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
                  <FaReact color="blue" />
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
                  <FaPython color="yellow" />
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
