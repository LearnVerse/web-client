import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import { MODULES } from '../../constants';
import UnityCanvasGravity from './unityCanvasGravity';
import LearnVerseLogo from '../../assets/learnverse_logo.png';
import '../../styles.scss';

const GameGravity = (props) => {
  const game = 'gravity';
  const { isInstructor } = props;
  const address = localStorage.getItem('address');
  const { fontFamily, fontSize } = MODULES[game];

  return (
    <div className="game-container">
      <div><img className="logo" src={LearnVerseLogo} alt="LearnVerse logo" /></div>
      <div className="horizontally-centered">
        <div className="game-info">
          <div style={{ fontFamily, fontSize }}>Welcome to Space Attack!</div>
          <div style={{ fontFamily, fontSize }}>IP Address: {address}</div>
        </div>
      </div>
      <div className="horizontally-centered"><UnityCanvasGravity /></div>
      {isInstructor
        && (
          <div className="horizontally-centered">
            <Button variant="contained" size="large">End Game</Button>
          </div>
        )}
    </div>
  );
};

const mapStateToProps = (reduxState) => {
  return {
    isInstructor: reduxState.userState.isInstructor,
  };
};

export default connect(mapStateToProps, null)(GameGravity);
