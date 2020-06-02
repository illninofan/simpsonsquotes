import React, { useState, useEffect, Fragment } from 'react';
import logo from './SimpsonsLogo.svg';
import classes from './App.module.css';
import dq from './DisplayQuote.module.css';

const API = 'https://thesimpsonsquoteapi.glitch.me/quotes'

function App() {

  const [ quote, getQuote ] = useState([])

  const fetchData = async () => {
    const response = await fetch(API)
    const data = await response.json()
    getQuote(data)
  }

  useEffect(() => {
    fetchData()
  }, [getQuote]);

  return (
    <div className={classes.App}>
      <header>
        <img src={logo} alt="Simpsons Logo" />
      </header>
      <button onClick={fetchData} className={dq.DisplayQuote}>Get Quote</button>
      {quote.map(q => {

        const charquote = q.quote
        const image = q.image
        const character = q.character

        return (
          <Fragment>
          <p>{charquote}</p>
          <img
          className={dq.charImage}
          src={image}
          alt={character}
          />
          </Fragment>
        )
      })}
    </div>
  );
}

export default App;
