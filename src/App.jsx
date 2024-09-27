import React from 'react';
import AppRouter from './router';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;