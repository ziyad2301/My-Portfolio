// src/components/Navbar.jsx

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiCode } from 'react-icons/fi'; // Import the new icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'Home', path: '#home' },
    { title: 'About', path: '#about' },
    { title: 'Projects', path: '#projects' },
    { title: 'Experience', path: '#experience' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="md:flex items-center justify-between py-4 px-10
                      bg-gray-900/20 backdrop-blur-lg shadow-lg border-b border-gray-800/50">
        {/* Logo Section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center text-white">
          <span className="text-3xl text-primary mr-2">
            <FiCode />
          </span>
          Mohammed Ziyad
        </div>

        {/* Mobile Menu Icon */}
        <div onClick={() => setIsOpen(!isOpen)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white">
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static 
                       bg-gray-900/80 md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9
                       transition-all duration-500 ease-in ${isOpen ? 'top-20' : 'top-[-490px]'}`}>
          {navLinks.map((link) => (
            <li key={link.title} className="md:ml-8 text-xl md:my-0 my-7">
              <a href={link.path} className="text-gray-200 hover:text-primary duration-300">
                {link.title}
              </a>
            </li>
          ))}
          <li className="md:ml-8">
            <a href="#contact" className="bg-primary text-white font-semibold px-6 py-2 rounded-full
                                          hover:bg-violet-700 duration-300">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
