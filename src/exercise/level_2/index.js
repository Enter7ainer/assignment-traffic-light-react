import React, { useState } from 'react';

import '../exercise.css';

export default () => {
  const [show, setShow] = useState(false);

  return (
    <div className={`exercises ${show && 'active'}`}>
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
              Display traffic lights with timing intervals of two seconds delay
              on red, one second delay on yellow, and two seconds delay on
              green. The animation goes back and forth, repeating forever. The
              colour sequence is done using React states, not CSS animations.
            </p>
            <h2>Solution</h2>
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
