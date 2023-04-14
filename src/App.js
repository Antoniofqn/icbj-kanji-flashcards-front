import React from 'react';
import Flashcards from './components/Flashcards';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flashcards App</h1>
      </header>
      <main>
        <Flashcards />
      </main>
    </div>
  );
}

export default App;
