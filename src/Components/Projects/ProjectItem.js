import React from 'react';

const ProjectItem = ({ image, name, stack, description, github, deployed }) => {
  return (
    <>
      <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="flex-1 text-black text-center bg-green-200 px-5 py-5 m-2 rounded border-2 border-black ring-2 ring-pink-300">
            <div className="lg:flex lg:items-center">
              <div className="flex flex-wrap justify-center">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={image}
                  alt="pic"
                />
                <h1 className="font-extrabold text-black font-Pt text-xl mb-2">
                  {name}
                </h1>
                <p className="text-gray-700 font-Pt text-base">{stack}</p>
                <p>{description}</p>
                <a
                  className="block mt-1 text-lg leading-tight font-semibold 
                  font-Poppins text-gray-900 hover:bg-pink-300 m-3"
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
