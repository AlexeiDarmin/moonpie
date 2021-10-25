import React from 'react';
import moonpieSrc from './images/moonpie.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={moonpieSrc} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          All your moonpie are belong to us.
        </a>
      </header>
    </div>
  );
}

export default App;
