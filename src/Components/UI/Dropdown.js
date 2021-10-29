import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-gray-100'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link className="p-4 hover:bg-pink-300 font-mono" to="/projects">
        Portfolio
      </Link>
      <Link className="p-4 hover:bg-yellow-300 font-mono" to="/about">
        About
      </Link>
      <Link className="p-4 hover:bg-blue-300 font-mono" to="/resume">
        Resume
      </Link>
      <Link className="p-4 hover:bg-green-300 font-mono" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
