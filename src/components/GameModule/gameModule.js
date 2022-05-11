import './styles.css';
import {Button, TextField, Typography} from '@material-ui/core'; //importing material ui component
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

function GameModule() {
  return (
    <div className='game-card-evolution'>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
        component="img"
        height="250"
        image={require("../../assets/evolutionMay10.png")}
        alt="Evolution Module"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Dino Survivor
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Evolution Module teaches kids bout the theory of evolution and the pressures of natural selection. 
        </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
  </div>
  );
}

export default GameModule;
