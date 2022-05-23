import React from 'react';
import {
  Card, CardContent, CardMedia, CardActionArea, Typography,
} from '@mui/material'; // importing material ui component
import '../styles.scss';

function GameModule(props) {
  const {
    picture, alt, name, description,
  } = props.data;
  const { right } = props;
  return (
    <div className={right && 'right'}>
      <Card sx={{ height: 300, width: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={picture}
            alt={alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">{name}</Typography>
            <Typography variant="body2" color="text.secondary">{description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default GameModule;
