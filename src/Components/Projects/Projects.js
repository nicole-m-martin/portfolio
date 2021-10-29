import React from 'react';
import { projectArray } from './projectData';
import ProjectItem from './ProjectItem';
// import Beatwavez from '../../assets/beatwavez.png';

const Projects = () => {
  return (
    <div>
      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div class="text-center pb-12">
          <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Here are some of my projects
          </h1>

          <div class="m-3">
            {projectArray.map((project) => (
              <ProjectItem
                image={project.image}
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
