
document.addEventListener("DOMContentLoaded", function () {

    const whateverBtn = document.querySelector("#whateverBtn");
 
     const produktSektion = document.getElementById("ol-section");
     produktSektion.classList.add("produkt-section");
 

 
 
 whateverBtn.addEventListener("click",() => {
     const url = "../json/ol.json";
     
     fetch(url)
         .then(res => res.json())
         .then(json => {
 
             console.log(json);
             
             
                 
 
                 const produktKort = document.createElement("figure");
                 produktKort.classList.add("produkt-kort");
                 
 
                 
                 const olImage = document.createElement("img");
                 olImage.classList.add("billede-af-produkt");
                 olImage.src = `../media/ol/${value.img}`;
                 olImage.alt = `${value.brandname} ${value.model}`;
                 
                 const produktContainer = document.createElement("div");
                 produktContainer.classList.add("produkt");
                 
                 const overskrift = document.createElement("h2");
                 overskrift.classList.add("produkt-navn");
                 overskrift.innerHTML = `${value.model}`;
                 
                 const produktBeskrivelse = document.createElement("p");
                 produktBeskrivelse.classList.add("produkt-beskrivelse");
                 produktBeskrivelse.innerHTML = `${value.infoTekst}`;
                 
                 const produktHumle = document.createElement("p");
                 produktHumle.classList.add("humle-sort");
                 produktHumle.innerHTML = `Humle: ${value.humle}`;
                 
                 const produktAlkohol = document.createElement("p");
                 produktAlkohol.classList.add("alkohol-procent");
                 produktAlkohol.innerHTML = `${value.alkohol}`;
                 
                 const koebBtn = document.createElement("button");
                 koebBtn.classList.add("køb-knap");
                 koebBtn.innerHTML = `køb`;
 
                 produktContainer.appendChild(overskrift);
                 produktContainer.appendChild(produktBeskrivelse);
                 produktContainer.appendChild(produktHumle);
                 produktContainer.appendChild(produktAlkohol);
                 produktContainer.appendChild(koebBtn);
 

         
                 produktSektion.appendChild(produktKort);
              
 
 
            
 
 
         })
         .catch(error => console.error("error:", error));
 });
 });
 
 
 
 
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
  
    containerDiv.id = containerId;
    document.body.appendChild(containerDiv);
    renderPlanetScene(planet, containerId);
});


