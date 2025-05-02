import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Color } from 'three';

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <div style={{ 
      position: 'relative',
      width: '100vw',
      height: 'calc(100vh - 4rem)',
      marginTop: '41rem',
      zIndex: 0,
      overflow: 'hidden'
    }}>
      <Canvas 
        camera={{ position: [0, 0, 5] }} 
        gl={{ setClearColor: new Color('#1e90ff') }}
        style={{ width: '100%', height: '100%' }}
      >
        <color attach="background" args={['#1e90ff']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingCube />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
