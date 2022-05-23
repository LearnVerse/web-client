import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants';
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
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SELECTION} element={<Selection />} />
        <Route path={ROUTES.ROOM} element={<Room />} />
        <Route path={ROUTES.GAME} element={<Game />} />
        <Route path="*" element={fallBack()} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
