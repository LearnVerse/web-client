/* eslint-disable import/no-duplicates */
import evolutionPicture from '../assets/module_evolution.png';
import evolutionBackground from '../assets/module_evolution_background.png';
import gravityPicture from '../assets/module_gravity.png';
import gravityBackground from '../assets/module_gravity.png';

const ROOT_URL = 'http://localhost:3000/';

const MODULES = {
  evolution: {
    game: 'Evolution',
    name: 'Dino Adventure',
    description: 'Evolution Module teaches kids about the pressures of natural selection.',
    picture: evolutionPicture,
    alt: 'Evolution Module',
    background: evolutionBackground,
    fontFamily: 'EvolutionFont',
    fontSize: '2rem',
  },
  gravity: {
    game: 'Gravity',
    name: 'Space Attack',
    description: 'Space Module teaches students about how masses of planets affect gravity.',
    picture: gravityPicture,
    alt: 'Gravity Module',
    background: gravityBackground,
    fontFamily: 'GravityFont',
    fontSize: '1.5rem',
  },
};

export {
  ROOT_URL,
  MODULES,
};
