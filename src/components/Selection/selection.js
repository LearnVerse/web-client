import {Grid, Button, TextField, Typography} from '@material-ui/core'; //importing material ui component
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import GameModule from "../GameModule/gameModule";
import './styles.css';
import { useState } from "react";

import evolutionImg from '../../assets/evolutionMay10.png';
import gravityImg from '../../assets/gravityMay9.png';

function Selection() {
  const [moduleName, setModuleName] = useState('Gravity!');
  const [address, setAddress] = useState('100.100.100.100');
  const isInstructor = true;

  const modules = [
    {
      'img': evolutionImg,
      'alt': 'Evolution Module',
      'module_name': 'Dino Adventure',
      'module_description': 'Evolution Module teaches kids about the pressures of natural selection.'
    },
    {
      'img': gravityImg,
      'alt': 'Gravity Module',
      'module_name': 'Space Attack',
      'module_description': 'Space Module teaches students about how masses of planets affect gravity.'
    }
  ]

  return (
    <div className='container-selection'>
      <div>
        <div className="header">
          <div className="logo">
            <img src={require('../../assets/learnverse_logo_banner.png')}/>
          </div>
          <div className='font-coco'>Choose Your Adventure!</div>
        </div>
        <div className="container-card">
          {modules.map((module, index) => {
            return (<GameModule key={index} data={module} />)
          })}
          <div className='input-instructor'>
            <Grid container direction={"row"} spacing={4}>
            <Grid item>
            <TextField label="Instructor Name" variant="outlined" />
            </Grid>
            <Grid item>
            <TextField label="Number of Students" variant="outlined" />
            </Grid>
            <Grid item>
            <Button className='button-createGame'
                    style={{
                      width: "12rem",
                      height: "3.5rem",
                    }} variant="contained">Create Game</Button>
            </Grid>
            </Grid>
          </div> 
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Selection;
