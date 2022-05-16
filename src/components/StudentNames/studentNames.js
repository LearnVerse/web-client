import { StarRounded } from "@material-ui/icons";
import Unity, { UnityContext } from "react-unity-webgl";

import './styles.css';

const unityContext = new UnityContext({
  loaderUrl: "build/Client.loader.js",
  dataUrl: "build/Client.data",
  frameworkUrl: "build/Client.framework.js",
  codeUrl: "build/Client.wasm",
});

function StudentNames() {
  return (
    <div className='studentNames'>
        Waiting for classmates to join game...
    </div>
  );
}

export default StudentNames;
