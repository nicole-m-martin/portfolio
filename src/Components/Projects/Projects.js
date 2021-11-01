import React from 'react';
import { projectArray } from './projectData';
import ProjectItem from './ProjectItem';
import Windows from '../../assets/coding.png';

const Projects = () => {
  return (
    <div className="bg-white dark:bg-gray-700">
      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 bg-white dark:bg-gray-700">
        <div class="text-center pb-12">
          <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 dark:text-white font-Poppins">
            Here are some of my projects:
          </h1>
          <div className="flex justify-center">
            <img
              src={Windows}
              alt="comp windows"
              className="object-center h-60"
            />
          </div>

          <div class="m-3">
            {projectArray.map((project) => (
              <ProjectItem
                key={project.id}
                src={project.src}
                name={project.name}
                stack={project.stack}
                description={project.description}
                github={project.github}
                deployed={project.deployed}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
