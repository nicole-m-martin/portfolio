import React from 'react';
import nic from '../assets/NicMartin.png';

const About = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <h1 class="title-font font-Poppins font-extrabold sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Hi There!👋
        </h1>
        <img
          class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-lg border ring-4 ring-blue-500"
          alt="nicole blonde"
          src={nic}
        />
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font font-Pt sm:text-4xl text-2xl mb-4 font-medium text-gray-900">
            Software Engineer
          </h1>
          <p class="border-2 rounded border-black ring-2 ring-yellow-300 bg-gradient-to-r from-blue-300 to-green-300 text-black font-Pt p-2">
            My name is <span className="font-black ">Nicole Martin</span>, and I
            love creating things. From sewing, drawing, crafting to now building
            apps and websites...I love to explore. Puzzles and using my brain is
            fun, and when I told my senior dev friend that, he told me I picked
            a good field. You never stop learning! I found that out quick with
            programming and I am here for it! I love change and finding all the
            good in Tech. I believe that there is room for everyone and I'm
            excited to be a part of building the future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
