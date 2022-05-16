import { StarRounded } from "@material-ui/icons";
import Unity, { UnityContext } from "react-unity-webgl";
import { useState } from "react";
import './styles.css';

function StudentNames() {
  const [names] = useState('Jack, Susan, Rick');

  return (
    <div>
      <div className='header-studentNames'>
        Waiting for students to join game...
      </div>
      <div className='studentNames'>{names}</div>
    </div>
  );
}

export default StudentNames;
