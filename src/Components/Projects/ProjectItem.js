import React from 'react';

const ProjectItem = ({ image, name, stack, description, github, deployed }) => {
  return (
    <>
      <div className="container mt-5 mx-auto px-2">
        <div className="md:flex">
          <div className="flex-1 text-gray-700 text-center bg-yellow-300 px-5 py-5 m-2 rounded">
            <div className="lg:flex lg:items-center">
              <div className="lg:flex-shrink-0"></div>
              <div className="flex flex-wrap justify-center">
                <img className="rounded-lg lg:w-64" src={image} />
                <h1 className="font-bold font-mono text-xl mb-2">{name}</h1>
                <p className="text-gray-700 text-base">{stack}</p>
                <p>{description}</p>
                <a
                  className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
                  href={github}
                >
                  Github
                </a>
                <a
                  className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
                  href={deployed}
                >
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

export default ProjectItem;
