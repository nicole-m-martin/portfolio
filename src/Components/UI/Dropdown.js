import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center sticky top-0'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link className={styles.projectTab} to="/projects">
        Portfolio
      </Link>
      <Link className={styles.aboutTab} to="/about">
        About
      </Link>
      <Link className={styles.resumeTab} target={'_blank'} to="/resume.pdf">
        Resume
      </Link>
      <Link className={styles.contactTab} to="/contact">
        Contact
      </Link>
    </div>
  );
};

const styles = {
  projectTab:
    'p-4 hover:bg-pink-300 dark:hover:bg-pink-300 dark:hover:text-black bg-white dark:bg-gray-500 dark:text-white font-Pt',
  aboutTab:
    'p-4 hover:bg-yellow-300 dark:hover:bg-yellow-300 dark:hover:text-black bg-white dark:bg-gray-500 dark:text-white font-Pt',
  resumeTab:
    'p-4 hover:bg-blue-300 dark:hover:bg-blue-300 dark:hover:text-black bg-white dark:bg-gray-500 dark:text-white font-Pt',
  contactTab:
    'p-4 hover:bg-green-300 dark:hover:bg-green-300 dark:hover:text-black bg-white dark:bg-gray-500 dark:text-white font-Pt',
};

export default Dropdown;
