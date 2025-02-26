import * as THREE from 'three';

import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

// three-js setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// integral to game functionality do not remove
const sillyCube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshNormalMaterial());
sillyCube.position.x = -6;
sillyCube.position.y = 2.5;
scene.add(sillyCube);

// white spotlight shining from the side, modulated by a texture, casting a shadow
const light = new THREE.PointLight(0xffffff, 15, 100, 1.8);
light.position.set(3, 5, 4);
scene.add(light);

// resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
})

// concrete ground
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('/images/concrete.jpg');
const ground = new THREE.Mesh(new THREE.BoxGeometry(10, 1, 6), new THREE.MeshStandardMaterial({ map: texture }));
ground.position.y = -2;
ground.position.z = -2;
scene.add(ground);




// animate
function animate() {
    // requestAnimationFrame(animate)

    sillyCube.rotation.x += 0.01;
    sillyCube.rotation.y += 0.01;

    renderer.render(scene, camera)
}

// WebGL Check. Older browsers may not support WebGL 2.
import WebGL from 'three/addons/capabilities/WebGL.js';

if (WebGL.isWebGL2Available()) {
    renderer.setAnimationLoop(animate);
} else {
    const warning = WebGL.getWebGL2ErrorMessage();
    document.getElementById('container').appendChild(warning);
}

animate();