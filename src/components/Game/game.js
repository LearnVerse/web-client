import './styles.css';
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "build/Build.loader.js",
  dataUrl: "build/Build.data",
  frameworkUrl: "build/Build.framework.js",
  codeUrl: "build/Build.wasm",
});

function Game() {
  return (
    <div className='unity-wrapper'>
      <Unity className='unity-interface' unityContext={unityContext} />
    </div>
  );
}

export default Game;
