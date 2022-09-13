import Lamp from './Lamp';
import React, { useEffect, useState } from 'react';

// Define the duration of lamp lighting.
const lightDurations = [2000, 1000, 2000];

// Define the initial lamp to light.
const Signal_2 = ({ initialValue }) => {
  const [colourIndex, setColourIndex] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setColourIndex((colourIndex + 1) % 3);
    }, lightDurations[colourIndex]);
    return () => {
      clearTimeout(timer);
    };
  });

  // Render the lamps.
  return (
    <div>
      <Lamp colour="#ff0000" active={colourIndex === 0} />
      <Lamp colour="#fff000" active={colourIndex === 2} />
      <Lamp colour="#2CC52B" active={colourIndex === 1} />
    </div>
  );
};

export default Signal_2;
