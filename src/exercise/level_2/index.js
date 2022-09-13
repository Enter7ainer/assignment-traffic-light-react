import React, { useState } from 'react';
import Trafficlight from '../Trafficlight';

import '../style.css';
import '../../instructions/style.css';

export default () => {
  // Define the number of lamps to use, with their colour hex values.
  const colours = ['#ff0000', '#fff000', '#2CC52B'];

  // Define the trafficlight signal input state.
  const [light, setLight] = useState({ colours });

  // Define the initial state of the navigation drop-down menu.
  const [show, setShow] = useState(false);

  // Render the Level 2 coding test objective and solution.
  return (
    <div className={`instructions ${show && 'active'}`}>
      <nav>
        <button
          className={show ? 'active' : ''}
          onClick={() => setShow((s) => !s)}
        >
          <span>&#10148;</span>
          Level 2
        </button>
      </nav>
      {show && (
        <>
          <main>
            <h2>Objective</h2>
            <p>
              Display traffic lights with timing intervals of one second delay
              between each colour. The animation repeats forever. The colour
              sequence is done using React states, not CSS animations.
            </p>
            <h2>Solution</h2>
            <div className="sign">
              {/* Map the lamp colours to the trafficlight signal. */}
              {colours.map((colour) => {
                return (
                  <Trafficlight
                    colour={colour}
                    light={light}
                    setLight={setLight}
                  />
                );
              })}
            </div>
          </main>
        </>
      )}
    </div>
  );
};
/*
  Written by Thomas EC. Smith on September 12th 2022
  For the attention of Martin Bohgard at Devise Stockholm.
*/
