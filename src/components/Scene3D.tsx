import { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface MousePosition {
  x: number;
  y: number;
}

// Performance detection hook
function usePerformanceMode() {
  const [isLowPerf, setIsLowPerf] = useState(false);
  
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    // Check for mobile or low-end device indicators
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const hasLowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
    const hasLowCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
    
    setIsLowPerf(prefersReducedMotion || isMobile || hasLowMemory || hasLowCores);
  }, []);
  
  return isLowPerf;
}

function FloatingShape({ position, color, speed = 1, type = 'sphere', mouseInfluence = 0.5, isLowPerf = false }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  type?: 'sphere' | 'torus' | 'icosahedron' | 'octahedron';
  mouseInfluence?: number;
  isLowPerf?: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      // Slower rotation on low-perf devices
      const rotSpeed = isLowPerf ? 0.1 : 0.2;
      meshRef.current.rotation.x = state.clock.elapsedTime * rotSpeed * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * (rotSpeed * 1.5) * speed;
    }
    if (groupRef.current && !isLowPerf) {
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        position[0] + mouse.x * mouseInfluence,
        0.03
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        position[1] + mouse.y * mouseInfluence,
        0.03
      );
    }
  });

  const materialProps = {
    color,
    roughness: 0.2,
    metalness: 0.8,
  };

  // Reduced geometry detail for low-perf devices
  const segments = isLowPerf ? 16 : 32;

  const renderShape = () => {
    switch (type) {
      case 'torus':
        return (
          <mesh ref={meshRef}>
            <torusGeometry args={[1, 0.4, isLowPerf ? 8 : 16, segments]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
        );
      case 'icosahedron':
        return (
          <mesh ref={meshRef}>
            <icosahedronGeometry args={[1, isLowPerf ? 0 : 1]} />
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
    <Float speed={isLowPerf ? speed * 0.5 : speed} rotationIntensity={isLowPerf ? 0.2 : 0.5} floatIntensity={isLowPerf ? 0.5 : 1}>
      <group ref={groupRef} position={position} scale={0.8}>
        {renderShape()}
      </group>
    </Float>
  );
}

function ParticleField({ isLowPerf = false }: { isLowPerf?: boolean }) {
  const count = isLowPerf ? 30 : 100;
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
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      const rotSpeed = isLowPerf ? 0.01 : 0.02;
      pointsRef.current.rotation.y = state.clock.elapsedTime * rotSpeed + (isLowPerf ? 0 : mouse.x * 0.1);
      pointsRef.current.rotation.x = state.clock.elapsedTime * (rotSpeed * 0.5) + (isLowPerf ? 0 : mouse.y * 0.1);
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
        size={isLowPerf ? 0.08 : 0.05}
        color="#a855f7"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function MouseLight({ isLowPerf = false }: { isLowPerf?: boolean }) {
  const lightRef = useRef<THREE.PointLight>(null);
  const { mouse } = useThree();

  useFrame(() => {
    if (lightRef.current && !isLowPerf) {
      lightRef.current.position.x = THREE.MathUtils.lerp(lightRef.current.position.x, mouse.x * 8, 0.05);
      lightRef.current.position.y = THREE.MathUtils.lerp(lightRef.current.position.y, mouse.y * 5, 0.05);
    }
  });

  return <pointLight ref={lightRef} position={[0, 0, 5]} intensity={1.5} color="#ffffff" distance={15} />;
}

function Scene({ isLowPerf = false }: { isLowPerf?: boolean }) {
  // Fewer shapes on low-perf devices
  const shapes = isLowPerf ? [
    { position: [-3, 1, -2] as [number, number, number], color: "#a855f7", speed: 0.5, type: 'sphere' as const, mouseInfluence: 0 },
    { position: [3, -1, -3] as [number, number, number], color: "#06b6d4", speed: 0.6, type: 'icosahedron' as const, mouseInfluence: 0 },
    { position: [0, -2, -2] as [number, number, number], color: "#f59e0b", speed: 0.4, type: 'octahedron' as const, mouseInfluence: 0 },
  ] : [
    { position: [-4, 2, -2] as [number, number, number], color: "#a855f7", speed: 0.8, type: 'sphere' as const, mouseInfluence: 1.2 },
    { position: [4, -1, -3] as [number, number, number], color: "#06b6d4", speed: 1.2, type: 'icosahedron' as const, mouseInfluence: 0.8 },
    { position: [-3, -2, -1] as [number, number, number], color: "#ec4899", speed: 0.6, type: 'torus' as const, mouseInfluence: 1.5 },
    { position: [3, 2, -4] as [number, number, number], color: "#22c55e", speed: 1, type: 'octahedron' as const, mouseInfluence: 0.6 },
    { position: [0, -3, -2] as [number, number, number], color: "#f59e0b", speed: 0.9, type: 'sphere' as const, mouseInfluence: 1 },
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
      {!isLowPerf && <spotLight position={[0, 10, 0]} intensity={0.8} color="#ec4899" angle={0.5} />}
      <MouseLight isLowPerf={isLowPerf} />
      
      {shapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} isLowPerf={isLowPerf} />
      ))}
      
      <ParticleField isLowPerf={isLowPerf} />
    </>
  );
}

const Scene3D = () => {
  const isLowPerf = usePerformanceMode();
  
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
        dpr={isLowPerf ? 1 : [1, 2]}
        frameloop={isLowPerf ? "demand" : "always"}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <Scene isLowPerf={isLowPerf} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
