import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sphere, Torus, Icosahedron, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, color, speed = 1, distort = 0.4, type = 'sphere' }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  distort?: number;
  type?: 'sphere' | 'torus' | 'icosahedron' | 'octahedron';
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  const Shape = useMemo(() => {
    switch (type) {
      case 'torus':
        return (
          <Torus args={[1, 0.4, 16, 32]} ref={meshRef}>
            <MeshDistortMaterial
              color={color}
              attach="material"
              distort={distort}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Torus>
        );
      case 'icosahedron':
        return (
          <Icosahedron args={[1, 1]} ref={meshRef}>
            <MeshWobbleMaterial
              color={color}
              attach="material"
              factor={0.4}
              speed={2}
              roughness={0.1}
              metalness={0.9}
            />
          </Icosahedron>
        );
      case 'octahedron':
        return (
          <Octahedron args={[1, 0]} ref={meshRef}>
            <MeshDistortMaterial
              color={color}
              attach="material"
              distort={distort * 0.5}
              speed={3}
              roughness={0.3}
              metalness={0.7}
            />
          </Octahedron>
        );
      default:
        return (
          <Sphere args={[1, 32, 32]} ref={meshRef}>
            <MeshDistortMaterial
              color={color}
              attach="material"
              distort={distort}
              speed={2}
              roughness={0.1}
              metalness={0.9}
            />
          </Sphere>
        );
    }
  }, [type, color, distort]);

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position} scale={0.8}>
        {Shape}
      </group>
    </Float>
  );
}

function ParticleField() {
  const count = 100;
  const pointsRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#a855f7"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
      <spotLight position={[0, 10, 0]} intensity={0.8} color="#ec4899" angle={0.5} />
      
      <FloatingShape position={[-4, 2, -2]} color="#a855f7" speed={0.8} type="sphere" />
      <FloatingShape position={[4, -1, -3]} color="#06b6d4" speed={1.2} type="icosahedron" />
      <FloatingShape position={[-3, -2, -1]} color="#ec4899" speed={0.6} type="torus" distort={0.3} />
      <FloatingShape position={[3, 2, -4]} color="#22c55e" speed={1} type="octahedron" />
      <FloatingShape position={[0, -3, -2]} color="#f59e0b" speed={0.9} type="sphere" distort={0.5} />
      
      <ParticleField />
    </>
  );
}

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Scene3D;
