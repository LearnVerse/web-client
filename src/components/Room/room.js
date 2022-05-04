import Sidebar from "../Sidebar/sidebar";
import UnityCanvas from "../UnityCanvas/unitycanvas";
import Instructions from "../Instructions/instructions";

import './styles.css';

function Room() {
  return (
    <div className="container">
      <div className="sidebar"><Sidebar /></div>
      <div className="canvas"><UnityCanvas /></div>
      <div className="instructions"><Instructions /></div>
      {/* <div className="gameCard"><Cards /></div> */}
    </div>
  );
}

export default Room;
