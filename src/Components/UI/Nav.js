import React from 'react';
import nm from '../../assets/nm-logo.png';
import { Link } from 'react-router-dom';

function Nav({ toggle, toggleTheme }) {
  return (
    <nav className="flex justify-between items-center h-15 bg-white text-black relative shadow-sm font-Pt bg-green-200 dark:bg-blue-300 sticky top-0">
      <Link to="/" className="pl-8">
        <img
          src={nm}
          alt="nicole"
          className="h-12 hover:bg-green-300 dark:hover:bg-blue-400"
        />
      </Link>
      <button className="font-Pt" onClick={toggleTheme}>
        <i className="fas fa-moon"></i>
        <p className="font-Pt">Dark Mode!</p>
      </button>
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
        <Link className="p-4 hover:bg-pink-300" to="/projects">
          Portfolio
        </Link>
        <Link className="p-4 hover:bg-yellow-300" to="/about">
          About
        </Link>
        <Link
          className="p-4 hover:bg-blue-300 dark:hover:bg-blue-400"
          target={'_blank'}
          to="/resume.pdf"
        >
          Resume
        </Link>
        <Link className="p-4 hover:bg-green-300" to="/contact">
          Connect
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
