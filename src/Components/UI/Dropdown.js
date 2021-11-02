import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen ? 'grid grid-rows-4 text-center items-center' : 'hidden'
      }
      onClick={toggle}
    >
      <Link
        className="p-4 hover:bg-pink-300 dark:hover:bg-pink-300 dark:hover:text-black bg-white dark:bg-gray-500 dark:text-white font-Pt"
        to="/projects"
      >
        Portfolio
      </Link>
      <Link
        className="p-4 hover:bg-yellow-300 dark:hover:bg-yellow-300 dark:hover:text-black bg-white dark:bg-gray-500 dark:text-white font-Pt"
        to="/about"
      >
        About
      </Link>
      <Link
        className="p-4 hover:bg-blue-300 dark:hover:bg-blue-300 dark:hover:text-black bg-white dark:bg-gray-500 dark:text-white font-Pt"
        target={'_blank'}
        to="/resume.pdf"
      >
        Resume
      </Link>
      <Link
        className="p-4 hover:bg-green-300 dark:hover:bg-green-300 dark:hover:text-black bg-white dark:bg-gray-500 dark:text-white font-Pt"
        to="/contact"
      >
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
