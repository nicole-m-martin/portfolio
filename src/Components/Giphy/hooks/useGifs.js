// import { useState, useEffect } from 'react';
// import { getGifs } from '../services/GiphyApi';

// Custom hook to load gifs on homepage

// export const useGifs = () => {
//   const [loading, setLoading] = useState(true);
//   const [gifs, setGifs] = useState([]);

//   const [currentGif, setCurrentGif] = useState(1);
//   const [gifPerPage, setGifsPerPage] = useState(10);

//   const indexOfLastGif = currentGif * gifPerPage;
//   const indexOfFirstGif = indexOfLastGif - gifPerPage;

// page 1 gif 1 - 1
// page 2 gif 2 - 2
// useEffect(() => {
//   setLoading(true);
//   getGifs()
//     .then((gifs) => setGifs(gifs))
//     .finally(() => setLoading(false))
//     .catch((error) => console.log('Error fetching from Giphy: ', error));
// }, []);

//   return {
//     loading,
//     setLoading,
//     gifs,
//     setGifs,
//     currentGif,
//     setCurrentGif,
//     gifPerPage,
//     setGifsPerPage,
//   };
// };
