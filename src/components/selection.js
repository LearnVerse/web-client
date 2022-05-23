/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { connect } from 'react-redux';
import { MODULES } from '../constants';
import { createParty } from '../actions';
import LearnVerseLogo from '../assets/learnverse_logo.png';
import GameModule from './gameModule';
import '../styles.scss';

const Selection = (props) => {
  const [name, setName] = useState('');
  const [numPlayers, setNumPlayers] = useState('');

  const handleSubmission = () => {
    props.createParty(name, 'Evolution', numPlayers);
  };

  return (
    <div className="selection-container">
      <div><img className="logo" src={LearnVerseLogo} alt="LearnVerse logo" /></div>
      <div className="horizontally-centered">
        <h1>Choose Your Module!</h1>
      </div>
      <div className="horizontally-centered">
        {Object.values(MODULES).map((module, index) => {
          if (index > 0) return <GameModule key={index} data={module} right />;
          return <GameModule key={index} data={module} />;
        })}
      </div>
      <div className="horizontally-centered">
        <TextField label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField className="right" label="Number of Players" variant="outlined" value={numPlayers} onChange={(e) => setNumPlayers(e.target.value)} />
      </div>
      <div className="horizontally-centered"><Button variant="contained" size="large" onClick={() => handleSubmission()}>Create Game</Button></div>
    </div>
  );
};

export default connect(null, { createParty })(Selection);
