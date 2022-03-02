import React from 'react';
import { projectArray } from './projectData';
import ProjectItem from './ProjectItem';
import Windows from '../../assets/coding.png';

const Projects = () => {
  return (
    <div className={styles.backgroundDiv}>
      <section className={styles.centerDiv}>
        <div className={styles.textDiv}>
          <h1 className={styles.projectTitle}>Here are some of my projects:</h1>
          <div className={styles.imageCenter}>
            <img
              src={Windows}
              alt="comp windows"
              className={styles.projectImage}
            />
          </div>

          <div class="m-3">
            {projectArray.map(
              ({ id, src, name, stack, description, github, deployed }) => (
                <ProjectItem
                  key={id}
                  src={src}
                  name={name}
                  stack={stack}
                  description={description}
                  github={github}
                  deployed={deployed}
                />
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  backgroundDiv: 'bg-white dark:bg-gray-600',
  centerDiv:
    'max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 bg-white dark:bg-gray-600',
  textDiv: 'text-center pb-12',
  projectTitle:
    'font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 dark:text-white font-Poppins',
  imageCenter: 'flex justify-center',
  projectImage: 'object-center h-60',
};

export default Projects;
