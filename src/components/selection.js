/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Button, TextField } from '@mui/material';
import GameModule from './gameModule';
import LearnVerseLogo from '../assets/learnverse_logo.png';
import { MODULE_ASSETS } from '../constants';
import '../styles.scss';

function Selection() {
  const modules = [
    {
      img: MODULE_ASSETS.evolution.picture,
      alt: 'Evolution Module',
      moduleName: 'Dino Adventure',
      moduleDescription: 'Evolution Module teaches kids about the pressures of natural selection.',
    },
    {
      img: MODULE_ASSETS.gravity.picture,
      alt: 'Gravity Module',
      moduleName: 'Space Attack',
      moduleDescription: 'Space Module teaches students about how masses of planets affect gravity.',
    },
  ];

  return (
    <div className="selection-container">
      <div><img className="logo" src={LearnVerseLogo} alt="LearnVerse logo" /></div>
      <div className="horizontally-centered">
        <h1>Choose Your Module!</h1>
      </div>
      <div className="horizontally-centered">
        {modules.map((module, index) => {
          if (index > 0) return <GameModule key={index} data={module} right />;
          return <GameModule key={index} data={module} />;
        })}
      </div>
      <div className="horizontally-centered">
        <TextField label="Enter Name" variant="outlined" />
        <TextField className="right" label="Enter Game Pin" variant="outlined" />
      </div>
      <div className="horizontally-centered"><Button variant="contained" size="large">Create Game</Button></div>
    </div>
  );
}

export default Selection;
