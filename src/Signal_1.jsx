import Lamp from './Lamp';
import React, { useState, useEffect } from 'react';

// Define the duration of lamp lighting.
const lightDurations = [1000, 1000, 1000];

// Define the initial lamp to light.
const Signal_1 = ({ initialValue }) => {
  const [colourIndex, setColourIndex] = useState(initialValue);

  // 
  useEffect(() => {
    const timer = setTimeout(() => {
      setColourIndex((colourIndex + 1) % 3);
    }, lightDurations[colourIndex]);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div>
      <Lamp colour="#ff0000" active={colourIndex === 1} />
      <Lamp colour="#fff000" active={colourIndex === 2} />
      <Lamp colour="#2CC52B" active={colourIndex === 0} />
    </div>
  );
};

export default Signal_1;
