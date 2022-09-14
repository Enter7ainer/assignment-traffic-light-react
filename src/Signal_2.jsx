import Lamp from './Lamp';
import React, { useEffect, useState } from 'react';

// Define the duration of lamp lighting in seconds.
const durations = [2000, 2000, 1000];

// Define the lamp to signal.
const Signal_2 = () => {
  const [colour, setColour] = useState(1);

  // Iterate through each lamp light.
  useEffect(() => {
    const timer = setTimeout(() => {
      setColour((colour + 1) % 3);
    }, durations[colour]);

    // Clean up.
    return () => {
      clearTimeout(timer);
    };
  });

  // Signal the lamps!
  return (
    <div>
      <Lamp colour="#ff0000" active={colour === 0} />
      <Lamp colour="#fff000" active={colour === 2} />
      <Lamp colour="#2CC52B" active={colour === 1} />
    </div>
  );
};

export default Signal_2;
