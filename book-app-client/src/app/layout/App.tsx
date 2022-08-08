import React from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from '../features/books/bookList';

function App() {
  return (
    <div className='container'>
        <BookList></BookList>
    </div>
  );
}

export default App;
