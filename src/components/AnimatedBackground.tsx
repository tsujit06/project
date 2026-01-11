'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Text } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'hero' | 'section' | 'subtle';
}

const FloatingElements = () => (
  <>
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[0.5]} position={[-2, 1, 0]}>
        <MeshDistortMaterial
          color="#003366"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
        />
      </Sphere>
    </Float>
    <Float speed={1.2} rotationIntensity={1.5} floatIntensity={1.5}>
      <Sphere args={[0.3]} position={[2, -1, 0]}>
        <MeshDistortMaterial
          color="#FF6600"
          attach="material"
          distort={0.3}
          speed={1.8}
          roughness={0.1}
        />
      </Sphere>
    </Float>
    <Float speed={1.6} rotationIntensity={0.8} floatIntensity={2.5}>
      <Sphere args={[0.4]} position={[0, 2, -1]}>
        <MeshDistortMaterial
          color="#6B46C1"
          attach="material"
          distort={0.5}
          speed={1.2}
          roughness={0.3}
        />
      </Sphere>
    </Float>
  </>
);

const AnimatedBackground = ({ children, className = '', variant = 'subtle' }: AnimatedBackgroundProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const renderCanvas = () => {
    switch (variant) {
      case 'hero':
        return (
          <Canvas camera={{ position: [0, 0, 5] }} className="opacity-30">
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1.2} />
            <pointLight position={[-10, -10, -10]} intensity={0.8} color="#FF6600" />
            <FloatingElements />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          </Canvas>
        );
      case 'section':
        return (
          <Canvas camera={{ position: [0, 0, 8] }} className="opacity-20">
            <ambientLight intensity={0.4} />
            <pointLight position={[5, 5, 5]} intensity={0.8} />
            <Float speed={0.8} rotationIntensity={0.5} floatIntensity={1}>
              <Sphere args={[0.8]} position={[0, 0, 0]}>
                <MeshDistortMaterial
                  color="#6B46C1"
                  attach="material"
                  distort={0.2}
                  speed={1}
                  roughness={0.1}
                />
              </Sphere>
            </Float>
          </Canvas>
        );
      default:
        return (
          <Canvas camera={{ position: [0, 0, 10] }} className="opacity-10">
            <ambientLight intensity={0.3} />
            <pointLight position={[3, 3, 3]} intensity={0.5} />
            <Sphere args={[0.6]} position={[0, 0, 0]}>
              <MeshDistortMaterial
                color="#003366"
                attach="material"
                distort={0.1}
                speed={0.5}
                roughness={0.2}
              />
            </Sphere>
          </Canvas>
        );
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ y }}
    >
      <div className="absolute inset-0">
        {renderCanvas()}
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default AnimatedBackground;