import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; // Updated import path

// Function to create and render a Three.js scene for a planet
function renderPlanetScene(planetName, containerId) {
    const scene = new THREE.Scene();
    const aspectRatio = 1;
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    const minSize = Math.min(window.innerWidth, window.innerHeight);
    const newSize = minSize * 0.48;

    const loader = new GLTFLoader();

    loader.load(
        `../models/${planetName}/scene.gltf`,
        function (gltf) {
            const object = gltf.scene;
            scene.add(object);

            // Adjust camera position based on the object's size
            const boundingBox = new THREE.Box3().setFromObject(object);
            const size = boundingBox.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const fov = camera.fov * (Math.PI / 180);
            let cameraZ = Math.abs(maxDim / Math.sin(fov / 2));
            cameraZ *= 1.2; // Adjusting to provide some space around the object
            camera.position.z = cameraZ;
        }
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(newSize, newSize);
    renderer.setPixelRatio(window.devicePixelRatio * 2);
    document.getElementById(containerId).appendChild(renderer.domElement);

    const topLight = new THREE.DirectionalLight(0xc4c4c4, 8);
    topLight.position.set(150, 100, 120);
    topLight.castShadow = true;
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x333333, 5);
    scene.add(ambientLight);

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();
}

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "solen"]; // Array of planet names

// Loop through each planet and render its scene in its own container
planets.forEach((planet, index) => {
    const containerId = `container3D_${planet}`;
    const containerDiv = document.createElement('div');
    const sectionToContainer = document.createElement("section");
    sectionToContainer.classList.add("slides")
    containerDiv.id.add("container3D");
    sectionToContainer.appendChild(containerDiv)
    // containerDiv.id = containerId;
    // document.body.appendChild(containerDiv);
    renderPlanetScene(planet, containerId);
});

// // containerDiv.classList.add("container3D");
// produktKort.appendChild(olImage);
// produktKort.appendChild(produktContainer);
