import {Button, TextField, Typography} from '@material-ui/core'; //importing material ui component
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import './styles.css';
import { useState } from "react";

function Selection() {
  const [moduleName, setModuleName] = useState('Gravity!');
  const [address, setAddress] = useState('100.100.100.100');
  const isInstructor = true;

  return (
    <div className='containerSelection'>
      <div>
        <div className="header">
          <Typography variant="h4">LearnVerse - Choose Your adventure: {moduleName}</Typography>
        </div>
        <div className='game-card'>
          <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
            component="img"
            height="250"
            image={require("../../assets/gravityMay9.png")}
            alt="Space Module"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Gravity Attack
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Space Module teaches students about gravity in space. They will learn about how masses of planets affect gravity. 
            </Typography>
            </CardContent>
          </CardActionArea>
          </Card>
        </div>
        <div className='input-fields'>
          <TextField id="outlined-basic" label="Enter Instructor Name" variant="outlined" />
          <TextField id="outlined-basic" label="Enter Number of Students" variant="outlined" />
        </div>
        <div className="create-button">
          <Button variant="contained" size="large">Create Game</Button>
        </div> 
      </div>
    </div>
  );
}

export default Selection;
