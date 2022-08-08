import React from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from '../features/books/bookList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookList></BookList>
      </header>
    </div>
  );
}

export default App;
