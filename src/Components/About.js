import React from 'react';
import nic from '../assets/NicMartin.png';

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <h1 className="title-font font-Poppins font-extrabold sm:text-5xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
          Hi There!👋
        </h1>

        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-lg border ring-4 ring-green-400 dark:ring-blue-500 my-5"
          alt="nicole blonde"
          src={nic}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font font-Pt sm:text-4xl text-2xl mb-4 font-medium text-gray-600 dark:text-gray-300">
            Software Engineer
          </h1>
          <p className="border-2 rounded border-black ring-2 ring-green-400 dark:ring-blue-500 bg-gradient-to-r from-blue-300 to-green-300 text-black dark:text-black font-Pt p-2 my-7 ">
            My name is{' '}
            <span className="text-gray-900 dark:text-white ">
              Nicole Martin
            </span>
            , and I love creating things. From sewing, drawing, crafting to now
            building apps and websites...I'm always exploring new ways to
            brighten the world. I appreciate change, learning new things daily,
            and finding all the good in Tech. I study full-stack, but really
            enjoy front-end development. I believe that there is room for
            everyone here in the Tech world and I'm excited to be a part of
            building the future.
          </p>
          <p className="border-2 rounded border-black ring-2 ring-yellow-300 dark:ring-pink-400 bg-gradient-to-r from-yellow-300 to-pink-300 text-black dark:text-black font-Pt p-2">
            When I'm not coding, I like to hang with my two dogs (Cooper and
            Ruby), hike in the beautiful PNW, drink too much coffee,
            rollerblade, dance, meet new friends, pretend to be Lisa Simpson,
            eat and cook vegan food, play video games, rescue animals, and
            explore my amazing hometown of Portland, OR. Always up for
            adventure!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
