import StudentNames from "../StudentNames/studentNames.js";
import {Button} from '@material-ui/core'; //importing material ui component

import './styles.css';
import { useState } from "react";

function Room() {
  const [moduleName, setModuleName] = useState('Jungle!');
  const [address, setAddress] = useState('100.100.100.100');
  const isInstructor = true;
  const fontFamily = "JungleFont";
  const fontSize = "2rem";

  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={require('../../assets/learnverse_logo_banner.png')}/>
        </div>
        <div className="info">
            <div style={{ fontFamily, fontSize }}>Your adventure: {moduleName}</div>
            <div style={{ fontFamily, fontSize }}>IP Address: {address}</div>
        </div>
      </div>
      <div style={{ fontFamily, fontSize }} className="studentNames"><StudentNames /></div>
      {isInstructor
        && (
          <div className="start-button">
            <Button variant="contained" size="large">Start Game</Button>
          </div>)}
    </div>
  );
}

export default Room;
