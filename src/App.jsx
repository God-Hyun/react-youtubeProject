import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AppRouter from './router';
import './App.css';
import './components/Header.css';
import './components/Sidebar.css';
import './components/VideoGrid.css';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Sidebar />
        <div className="main-content">
          <AppRouter />
        </div>
      </div>
    </Router>
  );
}

export default App;