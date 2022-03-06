import Unity, { UnityContext } from "react-unity-webgl";

import './styles.css';

const unityContext = new UnityContext({
  loaderUrl: "build/build.loader.js",
  dataUrl: "build/build.data",
  frameworkUrl: "build/build.framework.js",
  codeUrl: "build/build.wasm",
});

function UnityCanvas() {
  return (
    <div className='wrapper'>
      <Unity className='interface' unityContext={unityContext} />
    </div>
  );
}

export default UnityCanvas;
