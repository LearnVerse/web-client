import LearnVerseLogo from '../../assets/learnverse_logo.png'; 

import './styles.css';

function Sidebar() {
  return (
    <div>
      <div className='learnverse-logo'>
        <img className='learnverse-logo-image' src={LearnVerseLogo} alt="LearnVerse Logo" />
      </div>
      <div className='sidebar-menu'>
        <div className='sidebar-menu-element'>Home</div>
        <div className='sidebar-menu-element'>About</div>
        <div className='sidebar-menu-element'>FAQ</div>
        <div className='sidebar-menu-element'>Contact</div>
      </div>
    </div>
  );
}

export default Sidebar;
