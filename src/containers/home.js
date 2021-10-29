import React from 'react';
import Tech from '../Components/Tech';
import Code from '../../src/assets/code2.png';

function Home() {
  return (
    <>
      <div className="grid place-items-center">
        <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black font-Pt font-extrabold m-14">
          Hello World🌎
        </h1>
        <p className="text-lg font-Poppins italic ">
          I'm <span className="text-blue-500 text-lg  ">Nicole</span> and I love
          coffee and coding.
        </p>
        <img src={Code} alt="comp" />
        <h3 className="m-5 text-lg font-Poppins py-4 ">
          💛 Tech stuff I love 💛
        </h3>
        <section className="grid grid-flow-row grid-cols-3 grid-rows-1 gap-16 border-2 rounded border-black ring-2 ring-yellow-300 bg-gradient-to-r from-green-300 to-blue-300 font-Pt p-2">
          <Tech one="HTML5" two="CSS3" three="Javascript" four="React" />
          <Tech
            one="Node.js"
            two="Express.js"
            three="Material-UI"
            four="TailwindCSS"
          />
          <Tech one="Redux" two="Supertest" three="Jest" four="Git/GitHub" />
        </section>

        <span className="my-10 sm:my-24"></span>
      </div>
    </>
  );
}

export default Home;
