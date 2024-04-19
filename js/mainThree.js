import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Function to create a scene for each planet
function createSceneForPlanet(planetData) {
    const scene = new THREE.Scene();
    const aspectRatio = 1;
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);

    const minSize = Math.min(window.innerWidth, window.innerHeight);
    const newSize = minSize * 0.5;

    let object;

    const loader = new GLTFLoader();

    loader.load(
        `../models/${planetFolderName}/scene.gltf`,
        function (gltf) {
            object = gltf.scene;
            scene.add(object);
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
            console.error(error);
        }
    );

    const renderer = new THREE.WebGLRenderer({ alpha: false });
    renderer.setSize(newSize, newSize);
    renderer.setPixelRatio(window.devicePixelRatio * 2);

    document.getElementById(`${planetData.planetFolderName}-container`).appendChild(renderer.domElement);

    camera.position.z = 220; // Adjust the camera position as needed

    const topLight = new THREE.DirectionalLight(0xc4c4c4, 8);
    topLight.position.set(150, 100, 120);
    topLight.castShadow = true;
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x333333, 5);
    scene.add(ambientLight);

    function animate() {
        requestAnimationFrame(animate);
        object.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();
}

// Fetching the JSON data
fetch('./planeter.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch planets data');
        }
        return response.json();
    })
    .then(planetsData => {
        // Loop through the planets data and create a scene for each planet
        planetsData.forEach(planetData => {
            createSceneForPlanet(planetData);
        });
    })
    .catch(error => {
        console.error('Error fetching planets data:', error);
    });
