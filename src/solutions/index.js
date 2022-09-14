import React, { useState } from 'react';
import Signal_1 from '../Signal_1';
import Signal_2 from '../Signal_2';

import './solutions.css';

export default () => {
  // Define the initial state of the navigation drop-down menu.
  const [show, setShow] = useState(false);

  // Render the code test definitions and solutions.
  return (
    <div className={`solutions ${show && 'active'}`}>
      <nav>
        <button
          className={show ? 'active' : ''}
          onClick={() => setShow((s) => !s)}
        >
          <span>&#10148;</span>
          Solutions
        </button>
      </nav>
      {show && (
        <>
          <main>
            <h2>Level 1</h2>
            <p>
              Display traffic lights with timing intervals of one second delay
              between each colour. The animation repeats forever. The colour
              sequence is done using React states, not CSS animations.
            </p>
            <div className="sign">
              <Signal_1 />
            </div>
            <h2>Level 2</h2>
            <p>
              Display traffic lights with timing intervals of two seconds delay
              on red, one second delay on yellow, and two seconds delay on
              green. The animation goes back and forth, repeating forever. The
              colour sequence is done using React states, not CSS animations.
            </p>
            <div className="sign">
              <Signal_2 />
            </div>
          </main>
        </>
      )}
    </div>
  );
};
/*
  Refactored by Thomas EC. Smith on September 12th 2022
  For the attention of Martin Bohgard at Devise Stockholm.
*/
