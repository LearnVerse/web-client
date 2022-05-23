import React from 'react';
import { Button, TextField } from '@mui/material'; // importing material ui component
import { NavLink } from 'react-router-dom';
import LearnVerseBanner from '../assets/learnverse_logo_banner.png';
import '../styles.scss';

function Home() {
  return (
    <div className="home-container">
      <div className="horizontally-centered"><img className="banner" src={LearnVerseBanner} alt="LearnVerse banner" /></div>
      <div className="horizontally-centered">
        <TextField label="Enter Name" variant="outlined" />
        <TextField className="right" label="Enter Game Pin" variant="outlined" />
      </div>
      <div className="horizontally-centered"><Button variant="contained" size="large">Join Game</Button></div>
      <div className="horizontally-centered"><NavLink to="selection">If you are an instructor, click here to create a new game</NavLink></div>
    </div>
  );
}

export default Home;
