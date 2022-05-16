import './styles.css';
import {Grid, Button, TextField} from '@material-ui/core'; //importing material ui component

function Home() {
  return (
    <div className='container-home'>
      <img className='learnverseBannerHome' src={require('../../assets/learnverse_logo_banner.png')}/>
      <div className='input-home'>
        <Grid container direction={"row"} spacing={4}>
            <Grid item>
            <TextField label="Enter Name" variant="outlined" />
            </Grid>
            <Grid item>
            <TextField label="Enter Game Pin" variant="outlined" />
            </Grid>
        </Grid>
      </div>
      <div className="button-home">
            <Button variant="contained" size="large">Join Game</Button>
      </div> 
      <div className='click-selectpage'>
        <a href="selection">If you are an instructor, click here to create a new game</a>
      </div>
    </div>
  );
}

export default Home;
