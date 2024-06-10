import React from 'react';
import Tech from '../Components/Tech';
import Computer from '../../src/assets/computer.png';
// import Spinner from '../Components/UI/Spinner';
// import GifList from '../Components/Giphy/GifList';
// import { useGifs } from '../Components/Giphy/hooks/useGifs';
// import { getGifs } from '../Components/Giphy/services/GiphyApi';

const Home = () => {
  // const [gif, setGif] = useState([]);

  // const clickHandler = async () => {
  //   const newGif = await getGifs();
  //   setGif(newGif);
  // };
  // const { loading, gifs, currentGif, gifPerPage  } = useGifs();

  // if (loading) return <Spinner />;
  return (
    <>
      <div className={styles.mainSection}>
        <div className={styles.innerSection}>
          <h1 className={styles.title}>Hello World 🌎</h1>

          <p className={styles.subtitle}>
            I'm <span className={styles.nicoleColor}>Nicole</span>. It's so nice
            to meet you!
          </p>

          {/* <p className={styles.subtitle}>Check Out My Blog:</p>
          <a href="https://nicsquicktips.hashnode.dev/">Hashnode</a> */}
          <img src={Computer} alt="comp" />
          <h3 className={styles.techNames}>💙 Tech I love 💙</h3>
          <section className={styles.techBox}>
            <Tech one="HTML5" two="CSS3" three="Javascript" four="React" five="Vue.js" />
            <Tech
              one="Next.js"
              two="Node.js"
              three="Express.js"
              four="Material-UI"
              five="TailwindCSS"
            />
            <Tech one="Sass" two="Supertest" three="Jest" four="Git/GitHub" five="SQL" />
          </section>

          {/* <GifList gifs={gifs} loading={loading} /> */}
        </div>
      </div>
    </>
  );
};

const styles = {
  mainSection: 'bg-white dark:bg-gray-600 min-h-screen',
  innerSection: 'bg-white dark:bg-gray-600 grid place-items-center',
  title:
    'lg:text-9xl md:text-7xl sm:text-5xl text-3xl text-gray-900 dark:text-white font-Pt font-extrabold lg:m-8 md:m-16 sm:mt-16',
  subtitle:
    'text-lg font-Poppins italic text-gray-600 dark:text-gray-300 lg:m-2 mt-10 sm:mt-2',
  nicoleColor: 'text-green-400 dark:text-blue-400 text-lg',
  techNames: 'text-lg font-Poppins text-gray-600 dark:text-gray-300 mt-4',
  techBox:
    'grid grid-flow-row grid-cols-3 grid-rows-1 gap-10  sm:gap-4 border-2 my-2 rounded border-black ring-2 ring-green-400 bg-gradient-to-r from-blue-300 to-green-300 font-Pt dark:font-Pt p-2 text-gray-600 dark:text-gray-600 dark:ring-blue-400',
};

export default Home;
