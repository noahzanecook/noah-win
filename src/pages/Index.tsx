
import { motion } from 'framer-motion';
import ThreeScene from '../components/ThreeScene';
import Layout from '../components/Layout';
import { DecorativeCircle, DecorativeSquare, DecorativeDots, DecorativeWave } from '../components/DecorativeShapes';

import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function Cubes() {
  const leftCube = useRef<THREE.Mesh>(null);
  const rightCube = useRef<THREE.Mesh>(null);

  useFrame(({ pointer }) => {
    if (leftCube.current && rightCube.current) {
      // Scale pointer values to make the rotation more noticeable
      leftCube.current.rotation.x = pointer.y * Math.PI;
      leftCube.current.rotation.y = pointer.x * Math.PI;
      rightCube.current.rotation.x = pointer.y * Math.PI;
      rightCube.current.rotation.y = pointer.x * Math.PI;
    }
  });

  return (
    <>
      <mesh ref={leftCube} position={[-3, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <mesh ref={rightCube} position={[3, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="cyan" />
      </mesh>
    </>
  );
}

const Index = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <Layout>
      <div className="relative h-screen w-full">
      <Canvas className="fixed inset-0 z-0" eventSource={document.getElementById('root')!}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Cubes />
      </Canvas>

      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        {/* Center text content */}
        <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              transition={{ duration: 0.6 }}
              className="md:w-2/4 w-full text-center"
            >
              <h1 className="text-6xl font-bold mb-8">Welcome</h1>
              <p className="text-xl mb-10 mx-auto">
                My name is Noah Cook, a passionate software engineer and technology enthusiast based in Atlanta. I was a self-taught programmer as a kid, and now I am studying Computer Science at Georgia Tech.
              </p>
              <p className="text-xl mb-8 mx-auto">
                I like working on projects that challenge me and serve a purpose for others.
                I'm constantly exploring new technologies and design patterns to push the boundaries of what's possible.
              </p>
            </motion.div>
      </div>
    </div>

    </Layout>
  );
};

export default Index;
export { Cubes };
