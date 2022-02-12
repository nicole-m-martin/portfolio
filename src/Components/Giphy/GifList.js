import React from 'react';
import Gifs from './Gifs';

const GifList = ({ gifs }) => {
  return (
    <>
      <section>
        <ul>
          {gifs.map(({ id, img }) => (
            <li style={{ listStyle: 'none' }} key={id}>
              <Gifs id={id} img={img} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default GifList;
