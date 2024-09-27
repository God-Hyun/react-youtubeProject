import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:term" element={<SearchResults />} />
    </Routes>
  );
};

export default AppRouter;
