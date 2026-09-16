import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  strength?: number;
}

export default function ParallaxImage({ src, alt, className = "", strength = 18 }: ParallaxImageProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { yPercent: -strength },
        {
          yPercent: strength,
          ease: "none",
          scrollTrigger: { trigger: wrap, start: "top bottom", end: "bottom top", scrub: true },
        }
      );
    }, wrap);
    return () => ctx.revert();
  }, [strength]);

  return (
    <div ref={wrapRef} className={`overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
        style={{ transform: "scale(1.3)" }}
      />
    </div>
  );
}
