import './styles.css';
import {Button, TextField, Typography} from '@material-ui/core'; //importing material ui component
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const GameModule = (props) => {
  const { img, alt, module_name, module_description } = props.data;
  console.log(module_name);
  return (
    <div className='game-card-evolution'>
      <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
        component="img"
        height="250"
        image={img}
        alt={alt}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {module_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {module_description}
        </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
  </div>
  );
}

export default GameModule;
