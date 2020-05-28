import React, { Fragment, useState, useEffect } from 'react';
import classes from './DisplayQuote.module.css';

const API = 'https://thesimpsonsquoteapi.glitch.me/quotes'

const DisplayQuote = (props) => {

    const [ oldQuote, setQuote ] = useState([]);

    const fetchQuote = async () => {
        const response = await fetch(API, {mode: 'no-cors'})
        const data = await response.json()
        setQuote(data)
    }

    useEffect(() => {
        fetchQuote();
    },[oldQuote]);

    const handleClick = event => {
        setQuote(oldQuote)
    };

    return (
    <Fragment>
        <button onClick={() => handleClick()} className={classes.DisplayQuote}>Get Quote</button>
        <p className={classes.DisplayQuote}>{oldQuote.quote}</p>
    </Fragment>
    )
}

export default DisplayQuote;