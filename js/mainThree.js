import * as THREE from 'three';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';




//Create a Three.JS Scene
const scene = new THREE.Scene();
//create a new camera with positions and angles

const aspectRatio = 1;
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);

const minSize = Math.min(window.innerWidth, window.innerHeight);
const newSize = minSize * 0.48;

//Keep the 3D object on a global variable so we can access it later
let object;

//Set which object to render
let objToRender = "jupiter";


//Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

//Load the file
loader.load(
  `../models/${objToRender}/scene.gltf`,
  function (gltf) {
    //If the file is loaded, add it to the scene
    object = gltf.scene;
    scene.add(object);
  }
);

//Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true  }); //Alpha: true allows for the transparent background
renderer.setSize(newSize, newSize);
renderer.setPixelRatio(window.devicePixelRatio * 2);

//Add the renderer to the DOM
document.getElementById("container3D").appendChild(renderer.domElement);


//Set how far the camera will be from the 03D model
camera.position.z = objToRender === objToRender ? 220 : 500;

//Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.DirectionalLight(0xc4c4c4, 8); // (color, intensity)
topLight.position.set(150, 100, 120) //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, objToRender === objToRender ? 5 : 1);
scene.add(ambientLight);


//Render the scene
function animate() {
  requestAnimationFrame(animate);
  //Here we could add some code to update the scene, adding some automatic movement

  object.rotation.y += 0.01;
  renderer.render(scene, camera);
  

}

//Start the 3D rendering
animate();