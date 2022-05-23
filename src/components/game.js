import React from 'react';
import { Button } from '@mui/material';
import UnityCanvas from './unityCanvas';
import LearnVerseLogo from '../assets/learnverse_logo.png';
import '../styles.scss';

function Game() {
  const moduleName = 'Dino Adventure';
  const address = '100.100.100.100';
  const isInstructor = true;
  const fontFamily = 'JungleFont';
  const fontSize = '1.5rem';

  return (
    <div className="game-container">
      <div><img className="logo" src={LearnVerseLogo} alt="LearnVerse logo" /></div>
      <div className="horizontally-centered">
        <div className="game-info">
          <div style={{ fontFamily, fontSize }}>Welcome to {moduleName}!</div>
          <div style={{ fontFamily, fontSize }}>IP Address: {address}</div>
        </div>
      </div>
      <div className="horizontally-centered"><UnityCanvas /></div>
      {isInstructor
        && (
          <div className="horizontally-centered">
            <Button variant="contained" size="large">End Game</Button>
          </div>
        )}
    </div>
  );
}

export default Game;
