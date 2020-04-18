import React, { useState, useEffect } from 'react';

import './app.scss';

import Header from './components/Header';
import Books from './components/Books';
import Clips from './components/Clips';

function App() {
  const [file, setFile] = useState('');

  useEffect(() => {
    console.log(file);
  }, [file]);

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
