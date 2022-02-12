import { useState, useEffect } from 'react';
import { getGifs } from '../services/GiphyApi';

// Custom hook to load gifs on homepage

export const useGifs = () => {
  const [loading, setLoading] = useState(true);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    getGifs()
      .then((gifs) => setGifs(gifs))
      .finally(() => setLoading(false))
      .catch((error) => console.log('Error fetching from Giphy: ', error));
  }, []);

  return {
    loading,
    setLoading,
    gifs,
    setGifs,
  };
};
