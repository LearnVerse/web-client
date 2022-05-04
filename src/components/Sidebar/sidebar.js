import LearnVerseLogo from '../../assets/learnverse_logo.png';
import {Button} from '@material-ui/core'; //importing material ui component

import { ROOT_URL } from '../../constants';

import './styles.css';

function Sidebar() {
  return (
    <div>
      <div className='learnverse-logo'>
        <img className='learnverse-logo-image' src={LearnVerseLogo} alt="LearnVerse Logo" />
      </div>

      <div className='sidebar-menu'>
        <div className='sidebar-menu-element'><a href={ROOT_URL}>Home</a></div>
        {/* <div className='sidebar-menu-element'><a href='#'>Home</a></div> */}
        <div className='sidebar-menu-element'><a href='#'>About</a></div>
        <div className='sidebar-menu-element'><a href='#'>FAQ</a></div>
        <div className='sidebar-menu-element'><a href='#'>Contact</a></div>
        <Button> <a href={ROOT_URL}>Start Game</a></Button>

      </div>
      
    </div>
  );
}

export default Sidebar;
