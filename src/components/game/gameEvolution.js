import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import { Player } from 'video-react';
import { MODULES } from '../../constants';
import { getPartyStatus, playVideo } from '../../actions';
import UnityCanvasEvolution from './unityCanvasEvolution';
import LearnVerseLogo from '../../assets/learnverse_logo.png';
import '../../styles.scss';

const GameEvolution = (props) => {
  const game = 'evolution';
  const address = localStorage.getItem('address');
  const partyId = localStorage.getItem('partyId');
  const { isInstructor, showVideo } = props;
  const { fontFamily, fontSize } = MODULES[game];

  useEffect(() => {
    props.getPartyStatus(partyId);
  });

  const instructorShowVideo = () => {
    props.playVideo(partyId);
  };

  return (
    <div>
      {console.log(showVideo)}
      {!showVideo
        ? (
          <div className="game-container">
            <div><img className="logo" src={LearnVerseLogo} alt="LearnVerse logo" /></div>
            <div className="horizontally-centered">
              <div className="game-info">
                <div style={{ fontFamily, fontSize }}>Welcome to Dino Adventure!</div>
                <div style={{ fontFamily, fontSize }}>IP Address: {address}</div>
              </div>
            </div>
            <div className="horizontally-centered"><UnityCanvasEvolution /></div>
            {isInstructor
            && (
              <div className="horizontally-centered">
                <Button variant="contained" size="large" onClick={() => instructorShowVideo()}>Show Video</Button>
                <Button variant="contained" size="large">End Game</Button>
              </div>
            )}
          </div>
        )
        : (
          <Player>
            <source src="https://www.youtube.com/watch?v=jQxnlWc0VsM&ab_channel=LeoLeo" />
          </Player>
        )}
    </div>
  );
};

const mapStateToProps = (reduxState) => {
  return {
    isInstructor: reduxState.userState.isInstructor,
    showVideo: reduxState.partyState.showVideo,
  };
};

export default connect(mapStateToProps, { getPartyStatus, playVideo })(GameEvolution);
