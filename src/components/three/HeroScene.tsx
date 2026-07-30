"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, PerspectiveCamera } from "@react-three/drei";
import { Ribbon } from "./Ribbon";

export function HeroScene() {
  const [shouldRender, setShouldRender] = useState(false);
  const [inView, setInView] = useState(true);
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only render on desktop to save mobile performance
    const checkMobile = () => window.innerWidth > 768;
    setShouldRender(checkMobile());
    
    // Handle resize to mount/unmount if crossing breakpoint
    const handleResize = () => setShouldRender(checkMobile());
    window.addEventListener('resize', handleResize);

    // Performance optimization: Stop rendering frames when out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { rootMargin: "0px" } // Exactly when it leaves the screen
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="canvas-container hidden md:block">
      {shouldRender && (
        <Canvas 
          frameloop={inView ? "always" : "demand"} 
          dpr={[1, 1]} 
          gl={{ antialias: false, powerPreference: 'high-performance' }}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
          
          {/* Soft studio lighting */}
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#77AEB3" />
          
          <Suspense fallback={null}>
            <Environment preset="city" />
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
              <Ribbon />
            </Float>
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}
