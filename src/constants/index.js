/* eslint-disable import/no-duplicates */
import evolutionPicture from '../assets/module_evolution.png';
import evolutionBackground from '../assets/module_evolution_background.png';
import gravityPicture from '../assets/module_gravity.png';
import gravityBackground from '../assets/module_gravity.png';

const ROOT_URL = 'http://localhost:3000/';

const ROUTES = {
  HOME: '/',
  SELECTION: '/selection',
  ROOM: '/room',
  GAME: '/game',
};

const MODULE_ASSETS = {
  evolution: {
    picture: evolutionPicture,
    background: evolutionBackground,
    fontFamily: 'EvolutionFont',
    fontSize: '2rem',
  },
  gravity: {
    picture: gravityPicture,
    background: gravityBackground,
    fontFamily: 'GravityFont',
    fontSize: '1.5rem',
  },
};

export {
  ROOT_URL,
  ROUTES,
  MODULE_ASSETS,
};
