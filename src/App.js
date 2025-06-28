import React from 'react';
import './App.css';
import Gallery from './components/Gallery';
import QuoteGenerator from './components/QuoteGenerator';

function App() {
  return (
    <div className="App">
      <h1>✨ React Project: Quote & Gallery</h1>
      <QuoteGenerator />
      <Gallery />
    </div>
  );
}

export default App;
