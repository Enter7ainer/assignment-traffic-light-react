import React from 'react';

// If the lamp is inactive, display the colour with a 50% opacity.
const Lamp = ({ colour, active }) => (
  <div
    className="lamp"
    style={{ backgroundColor: colour, opacity: active ? 1 : 0.5 }}
  />
);

export default Lamp;
/*
  Refactored by Thomas EC. Smith on September 12th 2022
  For the attention of Martin Bohgard at Devise Stockholm.
*/