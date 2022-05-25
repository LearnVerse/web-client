import React from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';
import '../../styles.scss';

const unityContext = new UnityContext({
  loaderUrl: 'build/Client.loader.js',
  dataUrl: 'build/Client.data',
  frameworkUrl: 'build/Client.framework.js',
  codeUrl: 'build/Client.wasm',
});

function UnityCanvasEvolution() {
  return (
    <div className="canvas-wrapper">
      <Unity className="interface" unityContext={unityContext} />
    </div>
  );
}

export default UnityCanvasEvolution;
