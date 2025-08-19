'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface IconProps {
  type: 'money' | 'chart' | 'clock';
  className?: string;
}

export const ProblemIcon3D = ({ type, className = '' }: IconProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      50,
      1, // aspect ratio 1:1 for icon
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(120, 120);
    renderer.setPixelRatio(window.devicePixelRatio);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0x00B4D8, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    let mesh: THREE.Mesh;

    if (type === 'money') {
      // Falling coins animation
      const geometry = new THREE.CylinderGeometry(0.8, 0.8, 0.1, 32);
      const material = new THREE.MeshPhongMaterial({ 
        color: 0xFFD700,
        shininess: 100,
        specular: 0x222222
      });
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
    } else if (type === 'chart') {
      // Descending bar chart
      const group = new THREE.Group();
      const barMaterial = new THREE.MeshPhongMaterial({ color: 0xFF4444 });
      
      for (let i = 0; i < 3; i++) {
        const height = 2 - i * 0.5;
        const geometry = new THREE.BoxGeometry(0.4, height, 0.4);
        const bar = new THREE.Mesh(geometry, barMaterial);
        bar.position.x = (i - 1) * 0.6;
        bar.position.y = height / 2 - 1;
        group.add(bar);
      }
      scene.add(group);
      mesh = group as any;
    } else {
      // Spinning clock
      const geometry = new THREE.TorusGeometry(1, 0.3, 8, 30);
      const material = new THREE.MeshPhongMaterial({ 
        color: 0x00E5FF,
        shininess: 100,
        specular: 0x111111
      });
      mesh = new THREE.Mesh(geometry, material);
      
      // Clock hands
      const handGeometry = new THREE.BoxGeometry(0.05, 0.8, 0.05);
      const handMaterial = new THREE.MeshPhongMaterial({ color: 0x003459 });
      const hourHand = new THREE.Mesh(handGeometry, handMaterial);
      hourHand.position.y = 0.4;
      mesh.add(hourHand);
      
      scene.add(mesh);
    }

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      if (type === 'money') {
        mesh.rotation.y += 0.02;
        mesh.position.y = Math.sin(Date.now() * 0.001) * 0.3;
      } else if (type === 'chart') {
        mesh.rotation.y = Math.sin(Date.now() * 0.001) * 0.2;
        mesh.children.forEach((bar, i) => {
          bar.scale.y = 1 - Math.sin(Date.now() * 0.001 + i) * 0.1;
        });
      } else {
        mesh.rotation.z += 0.03;
        mesh.rotation.x = Math.sin(Date.now() * 0.0005) * 0.1;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [type]);

  return <div ref={mountRef} className={`inline-block ${className}`} />;
};