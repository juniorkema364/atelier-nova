import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

interface CameraRigProps {
  motion: boolean;
  baseZ?: number;
}

export default function CameraRig({ motion, baseZ = 4.6 }: CameraRigProps) {
  const { camera, pointer, size } = useThree();
  const angle = useRef(0);

  useEffect(() => {
    const aspect = size.width / size.height;
    const zFactor = Math.min(4.5, Math.max(1, 1.8 / aspect));
    camera.position.z = baseZ * zFactor;
  }, [size.width, size.height, camera, baseZ]);

  useFrame((_, delta) => {
    if (motion) angle.current += delta * 0.015;
    const targetX = Math.sin(angle.current) * 0.5 + pointer.x * 0.3;
    const targetY = 0.15 + pointer.y * 0.18;
    camera.position.x += (targetX - camera.position.x) * 0.02;
    camera.position.y += (targetY - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return null;
}
