import React from 'react';
import nm from '../../assets/nm-logo.png';
import { Link } from 'react-router-dom';

function Header({ toggle }) {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono bg-gray-100"
      role="navigation "
    >
      <Link to="/" className="pl-8">
        <img src={nm} alt="nicole" className="h-12" />
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="p-4 hover:bg-pink-400" to="/projects">
          Portfolio
        </Link>
        <Link className="p-4 hover:bg-yellow-400" to="/about">
          About
        </Link>
        <Link className="p-4 hover:bg-blue-400" to="/resume">
          Resume
        </Link>
        <Link className="p-4 hover:bg-green-400" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Header;
