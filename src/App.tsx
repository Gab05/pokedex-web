import React from 'react';
import pokeballLogo from './assets/pokeball.png';
import { Navbar } from './components/navbar/Navbar'
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Welcome!</h1>
        <img src={pokeballLogo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
