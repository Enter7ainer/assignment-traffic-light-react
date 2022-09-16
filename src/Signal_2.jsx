import Lamp from './Lamp';
import React, { useEffect, useState } from 'react';

// Define the duration of lamp lighting in seconds.
const durations = [2000, 2000, 1000];

// Iterate through each lamp light.
function cycleLamps(colour, setColour, count, setCount) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setColour((colour + 1) % 3);
      setCount(count + 1);
    }, durations[colour]);

    // Clean up.
    if (count === 2) clearTimeout(timer);
  }, [count]);
}

// Define the lamp to signal.
const Signal_2 = () => {
  const [colour, setColour] = useState(1);
  const [count, setCount] = useState(0);

  // Run the lamp light change.
  cycleLamps(colour, setColour, count, setCount);

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
