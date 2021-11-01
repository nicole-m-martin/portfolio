import React from 'react';
import Tech from '../Components/Tech';
import Code from '../../src/assets/code2.png';

function Home({ toggleTheme }) {
  return (
    <>
      <div className="bg-white dark:bg-gray-600 grid place-items-center">
        <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl text-gray-900 dark:text-white font-Pt font-extrabold m-14">
          Hello World🌎
        </h1>

        <p className="text-lg font-Poppins italic text-gray-600 dark:text-gray-300">
          I'm{' '}
          <span className="text-blue-500 dark:text-white text-lg">Nicole</span>{' '}
          and I love coffee and coding.
        </p>
        <img src={Code} alt="comp" />
        <h3 className="m-5 text-lg font-Poppins py-2 text-gray-600 dark:text-gray-300">
          💛 Tech I love 💛
        </h3>
        <section className="grid grid-flow-row grid-cols-3 grid-rows-1 gap-10 sm:gap-9 border-2 rounded border-black ring-2 ring-blue-300 bg-gradient-to-r from-blue-300 to-green-400  font-Pt dark:font-Pt p-2 text-gray-600 dark:text-white">
          <Tech one="HTML5" two="CSS3" three="Javascript" four="React" />
          <Tech
            one="Node.js"
            two="Express.js"
            three="Material-UI"
            four="TailwindCSS"
          />
          <Tech one="Redux" two="Supertest" three="Jest" four="Git/GitHub" />
        </section>

        <span className="mt-28 sm:my-28"></span>
      </div>
    </>
  );
}

export default Home;
