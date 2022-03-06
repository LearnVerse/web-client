import LearnVerseLogo from '../../assets/learnverse_logo.png';
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
        <div className='sidebar-menu-element'>About</div>
        <div className='sidebar-menu-element'>FAQ</div>
        <div className='sidebar-menu-element'>Contact</div>
      </div>
    </div>
  );
}

export default Sidebar;
