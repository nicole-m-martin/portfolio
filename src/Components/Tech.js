import React from 'react';

const Tech = ({ one, two, three, four, five }) => {
  return (
    <div>
      <ul>
      <li className="text-blue-500">{one}</li>
        <li>{two}</li>
        <li>{three}</li>
        <li>{four}</li>
        <li>{five}</li>
      </ul>
    </div>
  );
};

export default Tech;
