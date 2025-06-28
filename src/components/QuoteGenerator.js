import React, { useState } from 'react';
import './QuoteGenerator.css'; // ← make sure this import is here

export default function QuoteGenerator() {
  const [quote, setQuote] = useState('');

  const quotes = [
    "Stay hungry, stay foolish.",
    "Do what you can with what you have.",
    "Believe you can and you're halfway there.",
    "The best time to start was yesterday. The next best time is now."
  ];

  const getRandomQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };

  return (
    <div className="quote-container">
      <h2>🎭 Random Quote Generator</h2>
      <button onClick={getRandomQuote} className="new-quote-btn">✨ Generate Quote</button>
      {quote && <p className="quote-text">{quote}</p>}
    </div>
  );
}
