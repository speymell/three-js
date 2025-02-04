// app.js
// Set up the scene
const scene = new THREE.Scene(); //  w   w   w . d    em   o   2 s   . c o    m

// Set up the camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth / 4, window.innerHeight / 4);
document.getElementById("scene-container").appendChild(renderer.domElement);

scene.background = new THREE.Color(0x0d0d0d); // light blue

// Create a sphere geometry
const radius = 1;
const widthSegments = 32;
const heightSegments = 32;
const sphereGeometry = new THREE.SphereGeometry(
  radius,
  widthSegments,
  heightSegments
);

// Create a material
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

// Load the texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("moonbump2k.jpg");

// Assign the texture to the material
material.map = texture;

// Create a mesh
const sphereMesh = new THREE.Mesh(sphereGeometry, material);
sphereMesh.scale.set(2, 2, 2);

// Add the mesh to the scene
scene.add(sphereMesh);

// Render the scene
function animate() {
  requestAnimationFrame(animate);
  sphereMesh.rotation.x += 0.01;
  sphereMesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
