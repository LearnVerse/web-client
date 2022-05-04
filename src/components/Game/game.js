import UnityCanvas from "../UnityCanvas/unitycanvas";
import {Button} from '@material-ui/core'; //importing material ui component
import { Typography } from '@mui/material';

import './styles.css';
import { useState } from "react";

function Game() {
  const [moduleName, setModuleName] = useState('Gravity!');
  const [address, setAddress] = useState('100.100.100.100');
  const isInstructor = true;

  return (
    <div>
      <div className="header">
        <Typography variant="subtitle1">Module name: {moduleName}</Typography>
        <Typography variant="subtitle1">IP Address: {address}</Typography>
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
