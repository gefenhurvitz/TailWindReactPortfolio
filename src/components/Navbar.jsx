import React from "react";
import Logo from "../assets/logo1.png";
import { FaBars } from "react-icons/fa";
// FaTimes


const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "50px" }} />
      </div>

      {/* menu */}
      <div>
        <ul className="flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Hamburger */}
      <div className="hidden">
        <FaBars />
      </div>

      {/* Mobile menu */}
      <ul className="hidden">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Social icons */}
      <div></div>
    </div>
  );
};

export default Navbar;
