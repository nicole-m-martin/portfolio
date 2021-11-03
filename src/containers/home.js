import React from 'react';
import Tech from '../Components/Tech';
import Code from '../../src/assets/code2.png';

function Home() {
  return (
    <>
      <div className="bg-white dark:bg-gray-600 h-screen">
        <div className="bg-white dark:bg-gray-600 grid place-items-center">
          <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl text-gray-900 dark:text-white font-Pt font-extrabold lg:m-14 md:m-16 sm:mt-16">
            Hello World🌎
          </h1>

          <p className="text-lg font-Poppins italic text-gray-600 dark:text-gray-300 mt-10 sm:mt-2">
            I'm{' '}
            <span className="text-green-400 dark:text-blue-400 text-lg">
              Nicole
            </span>{' '}
            and I love coffee and coding.
          </p>
          <img src={Code} alt="comp" />
          <h3 className="text-lg font-Poppins text-gray-600 dark:text-gray-300 mt-4">
            💙 Tech I love 💙
          </h3>
          <section className="grid grid-flow-row grid-cols-3 grid-rows-1 gap-10 sm:gap-2 border-2 my-2 rounded border-black ring-2 ring-green-400 bg-gradient-to-r from-blue-300 to-green-300 font-Pt dark:font-Pt p-2 text-gray-600 dark:text-white dark:ring-blue-400">
            <Tech one="HTML5" two="CSS3" three="Javascript" four="React" />
            <Tech
              one="Node.js"
              two="Express.js"
              three="Material-UI"
              four="TailwindCSS"
            />
            <Tech one="Redux" two="Supertest" three="Jest" four="Git/GitHub" />
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
