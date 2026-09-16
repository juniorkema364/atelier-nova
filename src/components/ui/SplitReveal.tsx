import { Fragment, useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";

interface SplitRevealProps {
  text: string;
  className?: string;
  start?: string;
  stagger?: number;
  trigger?: "scroll" | "immediate";
  delay?: number;
}

export default function SplitReveal({
  text,
  className = "",
  start = "top 85%",
  stagger = 0.035,
  trigger = "scroll",
  delay = 0,
}: SplitRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const spans = el.querySelectorAll(".sr-word-inner");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        spans,
        { yPercent: 112 },
        {
          yPercent: 0,
          duration: 1,
          stagger,
          delay,
          ease: "power4.out",
          scrollTrigger:
            trigger === "scroll"
              ? { trigger: el, start, toggleActions: "play none none reverse" }
              : undefined,
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [text, start, stagger, trigger, delay]);

  return (
    <div ref={containerRef} className={className}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
            <span className="sr-word-inner" style={{ display: "inline-block" }}>
              {w}
            </span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </div>
  );
}
