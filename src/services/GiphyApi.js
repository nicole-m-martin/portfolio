import { gifInfo } from './utils';
import axios from 'axios';

export const getGifs = async () => {
  const response = await axios(
    `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=25`
  );

  const results = gifInfo(response);
  console.log(results);

  return results;
};
