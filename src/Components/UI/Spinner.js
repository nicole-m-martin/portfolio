import React from 'react';
import Timer from '../../assets/timer.gif';

const Spinner = () => {
  return (
    <div>
      <img
        src={Timer}
        alt="Loading...."
        style={{ width: '100px', margin: 'auto', display: 'block' }}
      />
    </div>
  );
};

export default Spinner;
