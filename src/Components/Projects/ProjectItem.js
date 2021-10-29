import React from 'react';

const ProjectItem = ({ src, name, stack, description, github, deployed }) => {
  return (
    <>
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="flex flex-wrap text-black text-center bg-green-200 px-5 py-5 m-2 rounded border-2 border-black ring-2 ring-pink-300">
            <div className="lg:flex lg:items-center">
              <div className="flex flex-wrap justify-center">
                <img
                  className="h-90 rounded w-full object-cover object-center mb-6"
                  src={src}
                  alt="pic"
                />
                <h1 className="font-extrabold text-black font-Pt text-3xl m-2 lg:grid-row-2">
                  {name}
                </h1>
                <p className="text-gray-700 font-Pt text-base m-3">{stack}</p>
                <p className="font-Poppins m-3">{description}</p>
                <a
                  className="block mt-1 text-lg leading-tight font-semibold 
                  font-Poppins text-gray-900 hover:bg-pink-300 m-5"
                  href={github}
                >
                  Github
                </a>
                <a
                  className="block mt-1 text-lg leading-tight font-semibold font-Poppins text-gray-900 hover:bg-yellow-300 m-3"
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
