import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants';
import Home from './components/Home/home';
import Game from './components/Game/game';
import Room from './components/Room/room';

const FallBack = () => {
  return <div>URL not found</div>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.GAME} element={<Game />} />
        <Route path={ROUTES.ROOM} element={<Room />} />
        <Route path='*' element={FallBack()} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
