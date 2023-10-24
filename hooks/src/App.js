import './App.css';
import React, { useState } from 'react';
import UseEffect from './components/UseEffect';
import UseEffect2 from './components/UseEffectDOMEvent';
import UseEffectDOMEvent from './components/UseEffectDOMEvent';
import UseEffectWithDeps from './components/UseEffectWithDeps';

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="container">
      <button onClick={() => setToggle(!toggle)}>Toggle Component</button>
      {toggle && <UseEffectWithDeps />}
    </div>
  );
}

export default App;
