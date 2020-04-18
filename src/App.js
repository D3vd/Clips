import React, { useState, useEffect } from 'react';

import './app.scss';

import Header from './components/Header';
import Books from './components/Books';
import Clips from './components/Clips';

function App() {
  const [file, setFile] = useState('');
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    parseFile(file);
  }, [file]);

  const parseFile = (file) => {
    let quotesRaw = file.split('==========');
    // Do Not Parse if the array is empty
    if (quotesRaw.length < 2) return;

    let quotes = quotesRaw
      // eslint-disable-next-line
      .map((quoteRaw) => {
        let quoteDirty = quoteRaw.split('\n');
        // Remove empty quotes from array
        quoteRaw = quoteDirty.filter((q) => {
          return q.length > 1;
        });

        let book = quoteRaw[0];
        let quote = quoteRaw[2];
        let location = '';
        let time = '';

        let locationsRaw = quoteRaw[1];

        if (
          (book !== undefined) &
          (quote !== undefined) &
          (locationsRaw !== undefined)
        ) {
          let locationsArray = locationsRaw.split(' ');
          location = locationsArray[5].replace(/\r?\n|\r/g, '');
          time = locationsArray
            .slice(9, 15)
            .join(' ')
            .replace(/\r?\n|\r/g, '');

          return {
            book: book.replace(/\r?\n|\r/g, ''),
            quote: quote.replace(/\r?\n|\r/g, ''),
            location,
            time,
          };
        }
      })
      .filter((q) => q);

    setQuotes(quotes);
  };

  return (
    <div className="App">
      <Header setFile={setFile} />
      <div className="content">
        <Books />
        <Clips />
      </div>
    </div>
  );
}

export default App;
