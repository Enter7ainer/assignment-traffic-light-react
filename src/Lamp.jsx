import React from 'react';

const Lamp = ({ colour, active }) => (
  <div
    className="lamp"
    style={{ backgroundColor: colour, opacity: active ? 1 : 0.5 }}
  />
);

export default Lamp;
