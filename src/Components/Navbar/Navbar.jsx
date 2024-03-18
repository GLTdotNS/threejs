import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaCog } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { SiAboutdotme } from "react-icons/si";
import { FaBlog } from "react-icons/fa";
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
                className="profile-link"
              >
                NONCREATIVEBLOG
              </Link>
            </li>
            <li>
              {" "}
              <Link
                onClick={toggleProfileMenu}
                to="/voluspa"
                className="profile-link"
              >
                VOLUSPA
              </Link>
            </li>
            <li>
              {" "}
              <Link
                onClick={toggleProfileMenu}
                to="/strive"
                className="profile-link"
              >
                STRIVENEX
              </Link>
            </li>
            <li>
              {" "}
              <Link
                onClick={toggleProfileMenu}
                to="/seethem"
                className="profile-link"
              >
                SEETHEM
              </Link>
            </li>
            <button onClick={toggleProfileMenu}>close</button>
          </ul>
        </div>
      )}

      <Link to="/settings" className="nav-item">
        <FaBlog />

        <span>Blog</span>
      </Link>
      <Link to="/messages" className="nav-item">
        <FaEnvelope />
        <span>Contacts</span>
      </Link>
    </div>
  );
};

export default BottomNavbar;
