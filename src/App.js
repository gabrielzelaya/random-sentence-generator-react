import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const handleClick = () => {
    getQuote();
  };

  return (
    <div id="quote-box" className="container">
      <div id="text" className="quote">
        <p>"{quote}"</p>
      </div>
      <div id="author" className="author">
        <p>- {author}</p>
      </div>
      <div className="buttons">
        <button id="new-quote" className="btn" onClick={handleClick}>
          New Quote
        </button>
        <a
          id="tweet-quote"
          className="btn"
          href={`https://twitter.com/intent/tweet?text="${quote}" - ${author}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet Quote
        </a>
      </div>
    </div>
  );
};

export default App;


//code by gabriel zelaya 