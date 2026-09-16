import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SculptureProps {
  motion: boolean;
  color: string;
  colorAccent: string;
}

export default function Sculpture({ motion, color, colorAccent }: SculptureProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (motion && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.18;
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.00025) * 0.25;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <torusKnotGeometry args={[1.05, 0.34, 180, 24, 2, 3]} />
        <meshStandardMaterial color={color} metalness={0.55} roughness={0.28} />
      </mesh>
      <mesh>
        <torusKnotGeometry args={[1.06, 0.345, 60, 8, 2, 3]} />
        <meshBasicMaterial color={colorAccent} wireframe transparent opacity={0.35} />
      </mesh>
    </group>
  );
}
