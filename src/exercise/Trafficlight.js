import React from 'react';

import './style.css';

// Define our lamps for colour cycling.
const Trafficlight = ({ colour, light, time }) => {

  // requestAnimationFrame(signal);

  // If the lamp has been signalled, display the light colour in full.
  if (colour === light) {
    return <div className="lamp" style={{ backgroundColor: colour }}></div>;
  }

  // Display the lamp light colour with a 50% opacity applied to it.
  return (
    <div
      className="lamp"
      style={{ backgroundColor: colour, opacity: 0.5 }}
    ></div>
  );
};

export default Trafficlight;
/*
  Written by Thomas EC. Smith (TECSmith) on September 12th 2022
  For the attention of Martin Bohgard at Devise Stockholm.
*/
