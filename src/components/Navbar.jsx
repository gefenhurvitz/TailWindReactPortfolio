import React from "react";
import Logo from "../assets/logo1.png";
import { FaBars, FaTimes , FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import {HiOutLineMail} from "react-icons/ai"
import {BsFillPersonLinesFill } from "react-icons/bs"
import { useState } from "react";
// FaTimes


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "50px" }} />
      </div>

      {/* menu */}
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav? <FaBars /> : <FaTimes/>}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-gray-300 flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social icons */}
      <div className="flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-800"  >
            <a className="flex justify-between items-center w-full  text-gray-300"
            href="/">
              Facebook <FaFacebook size={30}/>
            </a>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;
