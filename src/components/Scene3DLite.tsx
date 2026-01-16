import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Lightweight particle-only scene for lower-end devices
function LiteParticles() {
  const count = 40;
  const pointsRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.01;
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
        size={0.1}
        color="#a855f7"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

const Scene3DLite = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
        dpr={1}
        frameloop="demand"
        performance={{ min: 0.5 }}
      >
        <LiteParticles />
      </Canvas>
    </div>
  );
};

export default Scene3DLite;
