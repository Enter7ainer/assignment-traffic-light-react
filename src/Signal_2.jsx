import Lamp from './Lamp';
import React, { useEffect, useState } from 'react';

// Define the duration of lamp lighting in seconds.
const durations = [2000, 2000, 1000];

// Define the lamp to signal.
const Signal_2 = () => {
  const [colour, setColour] = useState(1);

  // Iterate through each lamp light.
  useEffect(() => {
    var counter = 0;

    const timer = setInterval(() => {
      setColour((colour + 1) % 3);
      counter++;
    }, durations[colour]);

    // Clean up.
    return () => {
      if (counter == 1) {
        clearInterval(timer);
      }
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
/*
  Refactored by Thomas EC. Smith on September 12th 2022
  For the attention of Martin Bohgard at Devise Stockholm.
*/
