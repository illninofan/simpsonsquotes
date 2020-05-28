import React from 'react';
import logo from './SimpsonsLogo.svg';
import classes from './App.module.css';
import DisplayQuote from './DisplayQuote';

function App() {
  return (
    <div className={classes.App}>
      <header>
        <img src={logo} alt="Simpsons Logo" />
      </header>

      <DisplayQuote />
    </div>
  );
}

export default App;
