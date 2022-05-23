import React from 'react';
import {
  Card, CardContent, CardMedia, CardActionArea, Typography,
} from '@mui/material'; // importing material ui component
import '../styles.scss';

function GameModule(props) {
  const {
    img, alt, moduleName, moduleDescription,
  } = props.data;
  const { right } = props;
  console.log(right);
  return (
    <div className={right && 'right'}>
      <Card sx={{ height: 300, width: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={img}
            alt={alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">{moduleName}</Typography>
            <Typography variant="body2" color="text.secondary">{moduleDescription}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default GameModule;
