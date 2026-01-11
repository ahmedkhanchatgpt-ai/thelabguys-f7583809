import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sphere, Torus, Icosahedron, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

interface MousePosition {
  x: number;
  y: number;
}

function FloatingShape({ position, color, speed = 1, distort = 0.4, type = 'sphere', mouseInfluence = 0.5 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  distort?: number;
  type?: 'sphere' | 'torus' | 'icosahedron' | 'octahedron';
  mouseInfluence?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
    if (groupRef.current) {
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        position[0] + mouse.x * mouseInfluence,
        0.05
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        position[1] + mouse.y * mouseInfluence,
        0.05
      );
    }
  });

  const renderShape = () => {
    const materialProps = {
      color,
      roughness: 0.1,
      metalness: 0.9,
    };

    switch (type) {
      case 'torus':
        return (
          <mesh ref={meshRef}>
            <torusGeometry args={[1, 0.4, 16, 32]} />
            <meshStandardMaterial {...materialProps} roughness={0.2} metalness={0.8} />
          </mesh>
        );
      case 'icosahedron':
        return (
          <mesh ref={meshRef}>
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
        );
      case 'octahedron':
        return (
          <mesh ref={meshRef}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial {...materialProps} roughness={0.3} metalness={0.7} />
          </mesh>
        );
      default:
        return (
          <mesh ref={meshRef}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
        );
    }
  };

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef} position={position} scale={0.8}>
        {renderShape()}
      </group>
    </Float>
  );
}

function ParticleField() {
  const count = 100;
  const pointsRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();

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
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02 + mouse.x * 0.1;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01 + mouse.y * 0.1;
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

function MouseLight() {
  const lightRef = useRef<THREE.PointLight>(null);
  const { mouse } = useThree();

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.x = THREE.MathUtils.lerp(lightRef.current.position.x, mouse.x * 8, 0.1);
      lightRef.current.position.y = THREE.MathUtils.lerp(lightRef.current.position.y, mouse.y * 5, 0.1);
    }
  });

  return <pointLight ref={lightRef} position={[0, 0, 5]} intensity={1.5} color="#ffffff" distance={15} />;
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
      <spotLight position={[0, 10, 0]} intensity={0.8} color="#ec4899" angle={0.5} />
      <MouseLight />
      
      <FloatingShape position={[-4, 2, -2]} color="#a855f7" speed={0.8} type="sphere" mouseInfluence={1.2} />
      <FloatingShape position={[4, -1, -3]} color="#06b6d4" speed={1.2} type="icosahedron" mouseInfluence={0.8} />
      <FloatingShape position={[-3, -2, -1]} color="#ec4899" speed={0.6} type="torus" distort={0.3} mouseInfluence={1.5} />
      <FloatingShape position={[3, 2, -4]} color="#22c55e" speed={1} type="octahedron" mouseInfluence={0.6} />
      <FloatingShape position={[0, -3, -2]} color="#f59e0b" speed={0.9} type="sphere" distort={0.5} mouseInfluence={1} />
      
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
