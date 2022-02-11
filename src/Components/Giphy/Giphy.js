import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Giphy = () => {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=1`
      );
      console.log(results);
      setGifs(results.data.data);
    };
    fetchData();
  }, []);

  const renderGifs = () => {
    return gifs.map((gif) => {
      return (
        <div key={gif.id} className="gifs">
          <img src={gif.images.fixed_height.url} alt="gif" />
        </div>
      );
    });
  };

  return (
    <div>
      <div>{renderGifs()}</div>
    </div>
  );
};

export default Giphy;
