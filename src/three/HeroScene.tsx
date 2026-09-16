import { Canvas } from "@react-three/fiber";
import Sculpture from "./Sculpture";
import OrbitDots from "./OrbitDots";
import CameraRig from "./CameraRig";

interface HeroSceneProps {
  motion: boolean;
  isMobile?: boolean;
}

export default function HeroScene({ motion, isMobile = false }: HeroSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0.15, 4.6], fov: 42 }}
      dpr={[1, isMobile ? 1.3 : 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 3, 2]} intensity={2} color="#fff0f0" />
      <directionalLight position={[-3, -2, -2]} intensity={0.6} color="#ffd166" />
      <Sculpture motion={motion} color="#ff4d6d" colorAccent="#ffd166" />
      <OrbitDots radius={2.15} tilt={0.4} speed={0.09} count={5} color="#ffd166" motion={motion} />
      <OrbitDots radius={2.55} tilt={-0.35} speed={-0.06} count={3} color="#f5f0ee" motion={motion} />
      <CameraRig motion={motion} />
    </Canvas>
  );
}
