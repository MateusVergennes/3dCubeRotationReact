import React, { useRef } from 'react';
import { Canvas, useFrame, extend } from 'react-three-fiber';
import { BoxGeometry, Mesh, MeshBasicMaterial, DoubleSide, PerspectiveCamera } from 'three';
import 'bootstrap/dist/css/bootstrap.min.css';

extend({ BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera });

function Cube() {
  const cubeRef = useRef();

  useFrame(({ camera }) => {
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;

    // Ajustar a posição da câmera para manter o cubo visível
    camera.position.z = 10;
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[6, 6, 6]} />
      <meshBasicMaterial color="blue" side={DoubleSide} />
    </mesh>
  );
}

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Cubo Girando</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Canvas>
            <Cube />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default App;
