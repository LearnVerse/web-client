import React from 'react';
import { Button } from '@mui/material'; // importing material ui component
import LearnVerseLogo from '../assets/learnverse_logo.png';
import { MODULE_ASSETS } from '../constants';
import '../styles.scss';

function Room() {
  const module = 'evolution';
  const moduleName = 'Gravity Attack';
  const isInstructor = true;
  const { fontFamily, fontSize } = MODULE_ASSETS[module];
  const students = ['Jack', 'Susan', 'Rick'];

  return (
    <div className="room-container">
      <div><img className="logo" src={LearnVerseLogo} alt="LearnVerse logo" /></div>
      <div className="horizontally-centered"><img className="module-image" src={MODULE_ASSETS[module].picture} alt="Module" /></div>
      <div className="horizontally-centered">
        <div>
          <div className="text-centered" style={{ fontFamily, fontSize }}>Welcome to {moduleName}!</div>
          <div className="text-centered" style={{ fontFamily, fontSize }}>Waiting for all party members to join...</div>
        </div>
      </div>
      <div className="horizontally-centered" style={{ fontFamily, fontSize }}>
        {students.map((student) => {
          return <div className="name-bubble">{student}</div>;
        })}
      </div>
      {isInstructor
        && (
          <div className="horizontally-centered">
            <Button variant="contained" size="large">Start Game</Button>
          </div>
        )}
    </div>
  );
}

export default Room;
