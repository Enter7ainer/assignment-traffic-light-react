import React, { useState } from 'react';

import './style.css';

const level1 = 'https://i.imgur.com/59qzX4i.gif';
const level2 = 'https://i.imgur.com/C0nXGDS.gif';

const content = [
  <ol>
    <li>Re-create the design to the right.</li>
    <li>
      "Light up" each colored light one by one on a 1 second interval and then
      repeat forever.
    </li>
  </ol>,
  <ol>
    <li>
      Modify <strong>level 1</strong> to stay 2 seconds on red, 1 second on
      yellow and 2 seconds on green.
    </li>
    <li>
      Make the animation go back-and-forth (and then repeat) rather than only
      going forwards.
    </li>
  </ol>,
];

const Button = ({ level, children, set }) => (
  <button
    className={children === level ? 'active' : ''}
    onClick={() => set(children)}
  >
    Level {children}
  </button>
);

const Color = ({ color }) => (
  <li>
    <span
      style={{
        background: color,
      }}
    />
    {color}
  </li>
);

export default () => {
  const [show, setShow] = useState(false);
  const [level, setLevel] = useState(1);

  return (
    <div className={`instructions ${show && 'active'}`}>
      <nav>
        <button
          className={show ? 'active' : ''}
          onClick={() => setShow((s) => !s)}
        >
          <span>&#10148;</span>
          Instructions
        </button>
      </nav>
      {show && (
        <>
          <main>
            <h2>
              Instructions
              <nav>
                <Button level={level} set={setLevel}>
                  {1}
                </Button>
                <Button level={level} set={setLevel}>
                  {2}
                </Button>
              </nav>
            </h2>
            {content[level - 1]}
            <p>
              <em>Note</em>Color sequence must be done using React states, not
              CSS animations.
            </p>
            <aside>
              <h3>Colors</h3>
              <ul>
                <Color color="#444" />
                <Color color="#000" />
                <Color color="#ff0000" />
                <Color color="#fff000" />
                <Color color="#2CC52B" />
              </ul>
              <footer>
                <em>Tip</em>Use <pre>opacity: 0.5</pre> for inactive color
                state.
              </footer>
            </aside>
          </main>
          <section>
            <img src={level === 1 ? level1 : level2} />
            <h4>Level {level}</h4>
          </section>
        </>
      )}
    </div>
  );
};
