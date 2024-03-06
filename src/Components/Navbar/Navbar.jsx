import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Projects" },

    { id: 4, text: "Blog" },
    { id: 5, text: "Contacts" },
  ];

  return (
    <div
      className="bg-transparent z-50 p-4 flex justify-between items-center w-full  mx-auto text-white"
      style={{ zIndex: "9999" }}
    >
      <h1 className="w-full text-3xl font-bold text-[]">Kancho Lupcheff</h1>

      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={` bg-gray-800 
       ${
         nav
           ? "fixed md:hidden left-0 top-[60px] w-[100%] h-auto z-10 border-r border-r-gray-900  ease-in-out duration-500"
           : "ease-in-out w-[100%] h-[64px]  z-10 duration-500 fixed left-0  top-[-30%]"
       }
        `}
      >
        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b  hover:bg-gray-700 duration-300 hover:text-slate-100 cursor-pointer border-gray-600"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
