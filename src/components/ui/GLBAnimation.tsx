'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';

function Model() {
  const { scene } = useGLTF('/animation.glb');
  
  // Apply materials and settings to the model
  scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return <primitive object={scene} scale={[1.5, 1.5, 1.5]} position={[0, 0, 0]} />;
}

export default function GLBAnimation() {
  return (
    <div className="w-full h-[400px] relative">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Stage environment="sunset" intensity={0.6} adjustCamera={false}>
            <Model />
          </Stage>
          <OrbitControls 
            enablePan={false} 
            enableZoom={false} 
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={2}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Preload the model
useGLTF.preload('/animation.glb');