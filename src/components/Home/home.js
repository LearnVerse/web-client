import './styles.css';
import {Button, TextField} from '@material-ui/core'; //importing material ui component

function Home() {
  return (
    <div className='container-home'>
      <img className='learnverseBannerHome' src={require('../../assets/learnverse_logo_banner.png')}/>
      <div className='input-home'>
        <TextField className="home-name" id="outlined-basic" label="Enter Name" variant="outlined" />
        <TextField id="outlined-basic" label="Enter Game Pin" variant="outlined" />
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
