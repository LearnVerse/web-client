import './styles.css';
import {Button, TextField} from '@material-ui/core'; //importing material ui component

function Home() {
  return (
    <div className='input-fields'>
      <TextField id="outlined-basic" label="Enter Name" variant="outlined" />
      <TextField id="outlined-basic" label="Enter Game Pin" variant="outlined" />
      <div className="end-button">
            <Button variant="contained" size="large">Join Game</Button>
          </div> 
      <a href="card.html">If you are an instructor, click here to create a new game</a>
    </div>
  );
}

export default Home;
