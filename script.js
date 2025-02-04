const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth / 4, window.innerHeight / 4);
document.getElementById("scene-container").appendChild(renderer.domElement);

scene.background = new THREE.Color(0x0d0d0d);

const radius = 1;
const widthSegments = 32;
const heightSegments = 32;
const sphereGeometry = new THREE.SphereGeometry(
  radius,
  widthSegments,
  heightSegments
);

const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("moonbump2k.jpg");

material.map = texture;

const sphereMesh = new THREE.Mesh(sphereGeometry, material);
sphereMesh.scale.set(2, 2, 2);

scene.add(sphereMesh);

function animate() {
  requestAnimationFrame(animate);
  sphereMesh.rotation.x += 0.01;
  sphereMesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
