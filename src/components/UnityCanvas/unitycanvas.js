import Unity, { UnityContext } from "react-unity-webgl";

import './styles.css';

const unityContext = new UnityContext({
  loaderUrl: "build/Client.loader.js",
  dataUrl: "build/Client.data",
  frameworkUrl: "build/Client.framework.js",
  codeUrl: "build/Client.wasm",
});

function UnityCanvas() {
  return (
    <div className='wrapper'>
      <Unity className='interface' unityContext={unityContext} />
    </div>
  );
}

export default UnityCanvas;
