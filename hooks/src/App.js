import './App.css';
import { useState, createContext } from 'react';
import Panel from './components/Panel';

// App -> Panel -> LoginForm
// state theme
// theme -> Panel
//            => them -> Login


// context API
// 1. createContext
// 2. provider
// 3. consumer



function App() {
  return (
    <div className="container">
      <Panel />
    </div>
  );
}

export default App;
