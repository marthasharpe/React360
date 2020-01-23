// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const leftPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  leftPanel.setAngle(-1, 0);

  const rightPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  rightPanel.setAngle(1, 0);

  const centerPanel = new Surface(600, 600, Surface.SurfaceShape.Flat);
  centerPanel.setAngle(0, 0);

  const backPanel = new Surface(600, 600, Surface.SurfaceShape.Flat);
  backPanel.setAngle(-3, 0);

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('Increment'),
    leftPanel,
  );

  r360.renderToSurface(
    r360.createRoot('Decrement'),
    rightPanel,
  );

  r360.renderToSurface(
    r360.createRoot('Counter'),
    centerPanel,
  );

  r360.renderToSurface(
    r360.createRoot('KeepCounting'),
    backPanel,
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
