import React from 'react';
import nic from '../assets/NicMartin.png';
// import social from '../assets/socialBanner.png';

const About = () => {
  return (
    <section className={styles.container_div}>
      <div className={styles.center_div}>
        <h1 className={styles.title}>Hi There!👋</h1>
        {/* <img className="hidden" src={social} alt="social" /> */}
        <img className={styles.image_nicole} alt="nicole blonde" src={nic} />
        <div className={styles.text_center}>
          <h1 className={styles.job_title}>Software Developer</h1>
          <p className={styles.bio}>
            My name is{' '}
            <span className={styles.nicole_title}>Nicole Martin</span>, and I
            love creating things. From sewing, drawing, crafting to now building
            apps and websites...I'm always exploring new ways to brighten the
            world. I appreciate change, learning new things daily, and finding
            all the good in Tech. I study full-stack, but really enjoy front-end
            development. I believe that there is room for everyone here in the
            Tech community and I'm excited to be a part of building the future.
          </p>
          <p className={styles.hobbies}>
            When I'm not coding, I like to hang with my two dogs (Cooper and
            Ruby) and partner Greg. You can find me hiking in the beautiful PNW,
            drinking too much coffee, rollerblading, dancing, meeting new
            friends, pretending to be Lisa Simpson, eating and cooking vegan
            food, playing video games, rescuing animals, and exploring my
            amazing hometown of Portland, OR. Always up for adventure!
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container_div: 'bg-white dark:bg-gray-600 body-font',
  center_div:
    'container mx-auto flex px-5 py-24 items-center justify-center flex-col',
  title:
    'title-font font-Poppins font-extrabold sm:text-5xl text-3xl mb-4 font-medium text-gray-900 dark:text-white',
  image_nicole:
    'lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-lg border ring-4 ring-green-400 dark:ring-blue-500 my-5',
  text_center: 'text-center lg:w-2/3 w-full',
  job_title:
    'title-font font-Pt sm:text-4xl text-2xl mb-4 font-medium text-gray-600 dark:text-gray-300',
  bio: 'border-2 rounded border-black ring-2 ring-green-400 dark:ring-blue-500 bg-gradient-to-r from-blue-300 to-green-300 text-black dark:text-black font-Pt p-2 my-7',
  nicole_title: 'text-gray-900 dark:text-white',
  hobbies:
    'border-2 rounded border-black ring-2 ring-yellow-300 dark:ring-pink-400 bg-gradient-to-r from-yellow-300 to-pink-300 text-black dark:text-black font-Pt p-2',
};

export default About;
