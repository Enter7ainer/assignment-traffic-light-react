import React, { useState } from 'react';
import Trafficlight from '../Trafficlight';

import '../style.css';
import '../../instructions/style.css';

export default () => {
  // Define the number of lamps in use, and their colour names.
  const colours = ['red', 'yellow', 'green'];

  const [show, setShow] = useState(false);
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
            {/* Signalling box */}
            <div className="signal">
              {/* Map the lamp colours to the trafficlight. */}
              {colours.map((colour) => {
                return <Trafficlight colour={colour} />;
              })}
            </div>
            {/* End signalling box */}
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
