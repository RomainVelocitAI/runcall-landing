'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Money falling animation component
function FallingMoney() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef} castShadow>
          <cylinderGeometry args={[0.8, 0.8, 0.15, 32]} />
          <meshStandardMaterial 
            color="#FFD700" 
            metalness={0.8}
            roughness={0.2}
            emissive="#FFD700"
            emissiveIntensity={0.1}
          />
        </mesh>
      </Float>
      {/* Additional floating coins in background */}
      <mesh position={[1.2, 0.5, -0.5]} rotation={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.1, 32]} />
        <meshStandardMaterial color="#FFD700" metalness={0.7} roughness={0.3} opacity={0.6} transparent />
      </mesh>
      <mesh position={[-1, -0.3, -0.8]} rotation={[0.2, -0.3, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.08, 32]} />
        <meshStandardMaterial color="#FFD700" metalness={0.7} roughness={0.3} opacity={0.4} transparent />
      </mesh>
    </group>
  );
}

// Descending chart animation component
function DescendingChart() {
  const groupRef = useRef<THREE.Group>(null);
  const barsRef = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
    barsRef.current.forEach((bar, i) => {
      if (bar) {
        const targetScale = 1 - Math.sin(state.clock.elapsedTime * 2 + i * 0.5) * 0.2;
        bar.scale.y = targetScale;
        bar.position.y = (targetScale * 0.8) - 0.4;
      }
    });
  });

  const bars = useMemo(() => {
    const heights = [1.6, 1.2, 0.8];
    const colors = ['#FF6B6B', '#FF5252', '#FF3838'];
    
    return heights.map((height, i) => ({
      position: [(i - 1) * 0.7, height * 0.4 - 0.4, 0] as [number, number, number],
      scale: [0.5, height, 0.5] as [number, number, number],
      color: colors[i]
    }));
  }, []);

  return (
    <group ref={groupRef}>
      {bars.map((bar, i) => (
        <mesh
          key={i}
          ref={(el) => { if (el) barsRef.current[i] = el; }}
          position={bar.position}
          scale={bar.scale}
          castShadow
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial 
            color={bar.color}
            emissive={bar.color}
            emissiveIntensity={0.1}
            metalness={0.3}
            roughness={0.7}
          />
        </mesh>
      ))}
      {/* Base line */}
      <mesh position={[0, -0.8, 0]}>
        <boxGeometry args={[3, 0.05, 0.5]} />
        <meshStandardMaterial color="#334155" metalness={0.5} roughness={0.5} />
      </mesh>
    </group>
  );
}

// Spinning clock animation component
function SpinningClock() {
  const clockRef = useRef<THREE.Group>(null);
  const hourHandRef = useRef<THREE.Mesh>(null);
  const minuteHandRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (clockRef.current) {
      clockRef.current.rotation.z -= 0.01;
      clockRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (hourHandRef.current) {
      hourHandRef.current.rotation.z = -state.clock.elapsedTime * 0.5;
    }
    if (minuteHandRef.current) {
      minuteHandRef.current.rotation.z = -state.clock.elapsedTime * 2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
      <group ref={clockRef}>
        {/* Clock face */}
        <mesh castShadow>
          <torusGeometry args={[1, 0.15, 8, 30]} />
          <meshStandardMaterial 
            color="#00B4D8"
            metalness={0.7}
            roughness={0.2}
            emissive="#00B4D8"
            emissiveIntensity={0.15}
          />
        </mesh>
        {/* Clock center */}
        <mesh>
          <cylinderGeometry args={[0.1, 0.1, 0.3, 16]} />
          <meshStandardMaterial color="#003459" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Hour hand */}
        <mesh ref={hourHandRef} position={[0, 0.3, 0.1]}>
          <boxGeometry args={[0.08, 0.6, 0.05]} />
          <meshStandardMaterial color="#003459" metalness={0.6} roughness={0.4} />
        </mesh>
        {/* Minute hand */}
        <mesh ref={minuteHandRef} position={[0, 0.4, 0.15]}>
          <boxGeometry args={[0.06, 0.8, 0.05]} />
          <meshStandardMaterial color="#007090" metalness={0.6} roughness={0.4} />
        </mesh>
      </group>
    </Float>
  );
}

interface Icon3DProps {
  type: 'money' | 'chart' | 'clock';
  className?: string;
}

export function Icon3D({ type, className = '' }: Icon3DProps) {
  return (
    <div className={`w-32 h-32 ${className}`}>
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#00B4D8" />
        
        {type === 'money' && <FallingMoney />}
        {type === 'chart' && <DescendingChart />}
        {type === 'clock' && <SpinningClock />}
      </Canvas>
    </div>
  );
}