import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import { MODULES } from '../constants';
import { getAllPartyMembers } from '../actions';
import LearnVerseLogo from '../assets/learnverse_logo.png';
import '../styles.scss';

const Room = (props) => {
  const { game, partyId } = useParams();
  const { partyMembers } = props;
  const isInstructor = localStorage.getItem('instructor');
  const { fontFamily, fontSize } = MODULES[game];

  useEffect(() => {
    props.getAllPartyMembers(partyId);
  });

  return (
    <div className="room-container">
      <div><img className="logo" src={LearnVerseLogo} alt="LearnVerse logo" /></div>
      <div className="horizontally-centered"><img className="module-image" src={MODULES[game].picture} alt="Module" /></div>
      <div className="horizontally-centered">
        <div>
          <div className="text-centered" style={{ fontFamily, fontSize }}>Welcome to {MODULES[game].name}!</div>
          <div className="text-centered" style={{ fontFamily, fontSize }}>Waiting for all party members to join...</div>
        </div>
      </div>
      <div className="horizontally-centered" style={{ fontFamily, fontSize }}>
        {partyMembers && partyMembers.map((member, index) => {
          return <div key={index} className="name-bubble">{member.name}</div>;
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
};

const mapStateToProps = (reduxState) => {
  return {
    partyMembers: reduxState.partyState.partyMembers,
  };
};

export default connect(mapStateToProps, { getAllPartyMembers })(Room);
