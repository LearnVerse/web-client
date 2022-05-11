import UnityCanvas from "../UnityCanvas/unitycanvas";
import {Button} from '@material-ui/core'; //importing material ui component
import { Typography } from '@mui/material';

import './styles.css';
import { useState } from "react";

function Game() {
  const [moduleName, setModuleName] = useState('Jungle!');
  const [address, setAddress] = useState('100.100.100.100');
  const isInstructor = true;
  const isEvolution = true;
  const isSpace = false;



  return (
    <div>
      <div>
        <img className="learnverseBannerGame"src={require('../../assets/learnverse_logo_banner.png')}/>
      </div>
      <div className="header">
      {isEvolution
        && (
          <div className="header">
            <div className="font-jungle">Your adventure: {moduleName}</div>
            <div className="font-jungle">IP Address: {address}</div>
          </div> 
        )
      }
      {isSpace
        && (
          <div className="header">
            <div className="font-space">Your adventure: {moduleName}</div>
            <div className="font-space">IP Address: {address}</div>
          </div> 
           
        )
      }
      </div>
      <div><UnityCanvas /></div>
      {isInstructor
        && (
          <div className="end-button">
            <Button variant="contained" size="large">End Game</Button>
          </div>  
        )
      }

    </div>
  );
}

export default Game;
