import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsMobile, usePrefersReducedMotion } from "../hooks/useMediaQuery";

export default function CustomCursor() {
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();
  const enabled = !isMobile && !reducedMotion;

  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 600, damping: 45, mass: 0.4 });
  const dotY = useSpring(y, { stiffness: 600, damping: 45, mass: 0.4 });
  const ringX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [role='button']"));
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.documentElement.addEventListener("mouseleave", leave);
    document.body.classList.add("custom-cursor-active");

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] rounded-full"
        style={{ x: dotX, y: dotY, width: 8, height: 8, marginLeft: -4, marginTop: -4, background: "var(--accent)" }}
        animate={{ opacity: visible ? 1 : 0, scale: hovering ? 0 : 1 }}
        transition={{ opacity: { duration: 0.2 }, scale: { type: "spring", stiffness: 400, damping: 25 } }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] rounded-full border"
        style={{ x: ringX, y: ringY, width: 36, height: 36, marginLeft: -18, marginTop: -18, borderColor: "var(--accent)" }}
        animate={{ opacity: visible ? (hovering ? 0.7 : 0.35) : 0, scale: hovering ? 1.7 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
      />
    </>
  );
}
