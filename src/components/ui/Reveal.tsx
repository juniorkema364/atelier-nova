import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "../../lib/gsap";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  start?: string;
}

export default function Reveal({
  children,
  delay = 0,
  y = 32,
  duration = 1,
  className = "",
  start = "top 85%",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start, toggleActions: "play none none reverse" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [delay, y, duration, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
