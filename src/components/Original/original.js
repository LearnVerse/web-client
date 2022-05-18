import Sidebar from "../Sidebar/sidebar";
import UnityCanvas from "../UnityCanvas/unitycanvas";
import Instructions from "../Instructions/instructions";

import './styles.css';

function Original() {
  return (
    <div className="container">
      <div className="sidebar"><Sidebar /></div>
      <div className="canvas"><UnityCanvas /></div>
      <div className="instructions"><Instructions /></div>
    </div>
  );
}

export default Original;
