"use client";

import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export function Ribbon() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse, viewport } = useThree();

  // Target values for smooth interpolation
  const target = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Base rotation animation
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
      
      // Interactive mouse follow with lerp for responsiveness
      target.current.x = (mouse.x * viewport.width) / 10;
      target.current.y = (mouse.y * viewport.height) / 10;
      
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, target.current.x, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, target.current.y, 0.05);
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* Reduced segments for better performance (64, 8) */}
      <torusKnotGeometry args={[2, 0.6, 64, 8, 2, 3]} />
      <meshStandardMaterial 
        color="#247C98" 
        emissive="#123B4A"
        emissiveIntensity={0.2}
        roughness={0.2}
        metalness={0.5}
        transparent={true}
        opacity={0.6}
      />
    </mesh>
  );
}
