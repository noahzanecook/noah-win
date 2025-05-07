
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

type ModelProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
}

const Torus = ({ position = [0, 0, 0], rotation = [0, 0, 0], color = '#cccccc' }: ModelProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh position={position} rotation={rotation} ref={meshRef}>
      <torusGeometry args={[1, 0.4, 16, 50]} />
      <meshStandardMaterial color={color as any} />
    </mesh>
  );
};

const Cube = ({ position = [0, 0, 0], rotation = [0, 0, 0], color = '#999999' }: ModelProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh position={position} rotation={rotation} ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color={color as any} />
    </mesh>
  );
};

type ThreeSceneProps = {
  sceneType?: 'torus' | 'cube' | 'both';
}

const ThreeScene = ({ sceneType = 'both' }: ThreeSceneProps) => {
  return (
    <div className="canvas-wrapper">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        
        {/* Display different models based on sceneType */}
        {(sceneType === 'torus' || sceneType === 'both') && (
          <Torus position={[-1.5, 0, 0]} />
        )}
        
        {(sceneType === 'cube' || sceneType === 'both') && (
          <Cube position={[1.5, 0, 0]} />
        )}
        
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
