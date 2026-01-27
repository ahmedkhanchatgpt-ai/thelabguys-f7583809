import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { usePerformanceMode } from '@/hooks/usePerformanceMode';

function FloatingShape({ position, color, speed = 1, type = 'sphere', isLowPerf = false }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  type?: 'sphere' | 'torus' | 'icosahedron' | 'octahedron';
  isLowPerf?: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime;
      meshRef.current.rotation.x = t * 0.1 * speed;
      meshRef.current.rotation.y = t * 0.15 * speed;
    }
  });

  const materialProps = {
    color,
    roughness: 0.3,
    metalness: 0.7,
  };

  const segments = isLowPerf ? 12 : 24;

  const renderShape = () => {
    switch (type) {
      case 'torus':
        return (
          <mesh ref={meshRef}>
            <torusGeometry args={[1, 0.4, 8, segments]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
        );
      case 'icosahedron':
        return (
          <mesh ref={meshRef}>
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
        );
      case 'octahedron':
        return (
          <mesh ref={meshRef}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
        );
      default:
        return (
          <mesh ref={meshRef}>
            <sphereGeometry args={[1, segments, segments]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
        );
    }
  };

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={position} scale={0.7}>
        {renderShape()}
      </group>
    </Float>
  );
}

function ParticleField({ isLowPerf = false }: { isLowPerf?: boolean }) {
  const count = isLowPerf ? 20 : 50;
  const pointsRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015;
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
        size={0.08}
        color="#a855f7"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

function Scene({ isLowPerf = false }: { isLowPerf?: boolean }) {
  const shapes = isLowPerf ? [
    { position: [-3, 1, -2] as [number, number, number], color: "#a855f7", speed: 0.4, type: 'sphere' as const },
    { position: [3, -1, -3] as [number, number, number], color: "#06b6d4", speed: 0.5, type: 'icosahedron' as const },
  ] : [
    { position: [-4, 2, -2] as [number, number, number], color: "#a855f7", speed: 0.5, type: 'sphere' as const },
    { position: [4, -1, -3] as [number, number, number], color: "#06b6d4", speed: 0.6, type: 'icosahedron' as const },
    { position: [-3, -2, -1] as [number, number, number], color: "#ec4899", speed: 0.4, type: 'torus' as const },
    { position: [3, 2, -4] as [number, number, number], color: "#22c55e", speed: 0.5, type: 'octahedron' as const },
  ];

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#a855f7" />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#06b6d4" />
      
      {shapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} isLowPerf={isLowPerf} />
      ))}
      
      <ParticleField isLowPerf={isLowPerf} />
    </>
  );
}

const Scene3D = () => {
  const perfLevel = usePerformanceMode();
  const isLowPerf = perfLevel !== 'high';
  
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
        dpr={1}
        frameloop="always"
        performance={{ min: 0.5 }}
        gl={{ antialias: false, powerPreference: 'low-power' }}
      >
        <Suspense fallback={null}>
          <Scene isLowPerf={isLowPerf} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
