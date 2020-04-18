import React from 'react';

import './app.scss';

import Header from './components/Header';
import Books from './components/Books';
import Clips from './components/Clips';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Books />
        <Clips />
      </div>
    </div>
  );
}

export default App;
