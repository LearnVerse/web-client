import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Selection from './components/selection';
import Room from './components/room';
import Game from './components/game';

function fallBack() {
  return <div>URL not found</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/room/:partyId" element={<Room />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={fallBack()} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
