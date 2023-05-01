import './App.css';
import * as THREE from 'three';

function App() {
  const scene = new THREE.Scene();

  const geometry = new THREE.SphereGeometry(3, 64, 64);

  const material = new THREE.MeshStandardMaterial({
    color: 'pink',
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const camera = new THREE.PerspectiveCamera(45, 800, 600);
  scene.add(camera);

  const canvas = document.querySelector('.webgl');
  const render = new THREE.WebGL1Renderer({ canvas });

  return (
    <>
      <canvas class="webgl"></canvas>
      <p>hey</p>
    </>
  );
}

export default App;
