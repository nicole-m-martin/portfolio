import React from 'react';
import nm from '../../assets/nm-logo.png';
import { Link } from 'react-router-dom';

function Nav({ toggle, toggleTheme, theme }) {
  console.log(theme);
  return (
    <nav className={styles.main_nav}>
      <Link to="/" className="pl-8">
        <img src={nm} alt="nicole" className={styles.logo} />
      </Link>
      <button className="font-Pt" onClick={toggleTheme}>
      {theme === 'light' ? 
      <i className="fas fa-sun"></i> : 
      <i className="fas fa-moon"></i>
    }
        <p className="font-Pt">{theme === 'light' ? 'Light Mode!' : 'Dark Mode!'}</p>
      </button>
      {/* Hamburger */}
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
      <div className={styles.link_div}>
        <Link className={styles.portfolio} to="/projects">
          Portfolio
        </Link>
        <Link className={styles.about} to="/about">
          About
        </Link>
        <Link className={styles.resume} target={'_blank'} to="/resume.pdf">
          Resume
        </Link>
        <Link className={styles.connect} to="/contact">
          Connect
        </Link>
        {/* <Link className={styles.blog} to="/blogs">
          Blog
        </Link> */}
      </div>
    </nav>
  );
}

const styles = {
  main_nav:
    'flex justify-between items-center h-15 bg-white text-black relative shadow-sm font-Pt bg-green-200 dark:bg-blue-300 sticky top-0',
  logo: 'h-12 hover:bg-green-300 dark:hover:bg-blue-400',
  link_div: 'pr-8 md:block hidden',
  portfolio: 'p-4 hover:bg-pink-300',
  about: 'p-4 hover:bg-yellow-300',
  resume: 'p-4 hover:bg-blue-300 dark:hover:bg-blue-400',
  connect: 'p-4 hover:bg-green-300',
  blog: 'p-4 hover:bg-green-300',
};

export default Nav;
