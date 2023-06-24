import { VRButton } from 'three/addons/webxr/VRButton.js';

document.body.appendChild( VRButton.createButton( renderer ) );
//THIS CODE ENABLE XR RENDERING
renderer.xr.enabled = true;
