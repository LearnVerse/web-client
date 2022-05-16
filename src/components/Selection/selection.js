import {Button, TextField, Typography} from '@material-ui/core'; //importing material ui component
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import GameModule from "../GameModule/gameModule";
import './styles.css';
import { useState } from "react";

// import evolutionImg from '../../assets/evolutionMay10.png';
// import gravityImg from '../../assets/gravityMay9.png';


import evolutionImg from './evolutionMay10.png';
import gravityImg from './gravityMay9.png';

function Selection() {
  const [moduleName, setModuleName] = useState('Gravity!');
  const [address, setAddress] = useState('100.100.100.100');
  const isInstructor = true;

  const modules = [
    {
      // 'img': '../../assets/evolutionMay10.png',
      // 'img': './evolutionMay10.png',
      'img': evolutionImg,
      'alt': 'Evolution Module',
      'module_name': 'Evolution',
      'module_description': 'Evolution Module teaches kids bout the theory of evolution and the pressures of natural selection.'
    },
    {
      // 'img': '../../assets/gravityMay9.png',
      // 'img': './gravityMay9.png',
      'img': gravityImg,
      'alt': 'Gravity Module',
      'module_name': 'Gravity',
      'module_description': 'Space Module teaches students about gravity in space. They will learn about how masses of planets affect gravity.'
    }
  ]

  return (
    <div className='container-selection'>
      <div>
        <div className="header">
          <div className='font-coco'>Choose Your Adventure!</div>
        </div>
        <div className="container-card">
          {modules.map((module, index) => {
            return (<GameModule key={index} data={module} />)
          })}
          <div className='input-selection'>
            <TextField id="outlined-basic" label="Instructor Name" variant="outlined" />
            <TextField id="outlined-basic" label="Number of Students" variant="outlined" />
          </div>
          <div className="create-button">
            <Button variant="contained">Create Game</Button>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Selection;
