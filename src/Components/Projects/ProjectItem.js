import React from 'react';

const ProjectItem = ({ src, name, stack, description, github, deployed }) => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.flexBox}>
          <div className={styles.cardBox}>
            <div className={styles.cardInner}>
              <div className={styles.centerDiv}>
                <img className={styles.projectImage} src={src} alt="pic" />
                <h1 className={styles.projectName}>{name}</h1>
                <p className={styles.techStack}>{stack}</p>
                <p className={styles.projectDescription}>{description}</p>
                <a className={styles.githubLink} href={github}>
                  Github
                </a>
                <a className={styles.deployedLink} href={deployed}>
                  Deployed
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  mainContainer: 'container px-5 py-10 mx-auto',
  cardBox:
    'flex flex-wrap text-black text-center bg-gradient-to-r from-yellow-300 to-pink-300  px-5 py-5 m-2 rounded border-2 border-black ring-2 ring-yellow-300 dark:ring-pink-400',
  flexBox: 'flex flex-wrap -m-2',
  cardInner: 'lg:flex lg:items-center',
  centerDiv: 'flex flex-wrap justify-center',
  projectImage: 'h-90 rounded w-full object-cover object-center mb-6',
  projectName:
    'font-extrabold text-black font-Pt text-3xl m-2 lg:grid-row-2 text-gray-900 dark:text-white',
  techStack: 'text-gray-600 dark:text-black font-Pt text-base m-3',
  projectDescription: 'font-Poppins text-gray-600 dark:text-black m-3',
  githubLink:
    'block mt-1 text-lg leading-tight font-semibold font-Pt text-gray-900 dark:text-white hover:bg-pink-300 m-5',
  deployedLink:
    'block mt-1 text-lg leading-tight font-semibold font-Pt text-gray-900 dark:text-white hover:bg-yellow-300 m-5',
};

export default ProjectItem;
