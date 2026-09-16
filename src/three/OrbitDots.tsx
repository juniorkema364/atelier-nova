import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface OrbitDotsProps {
  radius: number;
  tilt: number;
  speed: number;
  count: number;
  color: string;
  motion: boolean;
}

export default function OrbitDots({ radius, tilt, speed, count, color, motion }: OrbitDotsProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (motion && groupRef.current) {
      groupRef.current.rotation.z += delta * speed;
    }
  });

  const dots = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const angle = (i / count) * Math.PI * 2 + i * 0.9;
      return [Math.cos(angle) * radius, Math.sin(angle) * radius, 0] as [number, number, number];
    });
  }, [radius, count]);

  return (
    <group rotation={[tilt, 0.3, 0]}>
      <group ref={groupRef}>
        {dots.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.025, 8, 8]} />
            <meshBasicMaterial color={color} />
          </mesh>
        ))}
      </group>
    </group>
  );
}
