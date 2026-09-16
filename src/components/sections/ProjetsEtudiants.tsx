import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import SectionHeading from "../ui/SectionHeading";
import { PROJETS_ETUDIANTS } from "../../data/content";

interface ProjetsEtudiantsProps {
  isMobile: boolean;
}

function ProjetCard({ p, i }: { p: (typeof PROJETS_ETUDIANTS)[number]; i: number }) {
  return (
    <div className="shrink-0 w-[78vw] sm:w-[46vw] lg:w-[26vw] border-2 border-line rounded-2xl surface-theme p-8 flex flex-col justify-between min-h-[360px] relative overflow-hidden">
      <div className="giant-number absolute -bottom-4 -right-2 text-8xl">{String(i + 1).padStart(2, "0")}</div>
      <div className="relative">
        <div className="flex items-start justify-between mb-8">
          <span className="eyebrow">{p.categorie}</span>
          <span className="text-dim text-xs">{p.annee}</span>
        </div>
        <h3 className="display-3 mb-4" style={{ fontSize: "clamp(1.2rem,1.8vw,1.5rem)" }}>
          {p.nom}
        </h3>
        <p className="text-dim text-sm leading-relaxed">{p.description}</p>
      </div>
    </div>
  );
}

export default function ProjetsEtudiants({ isMobile }: ProjetsEtudiantsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isMobile) return;
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      const distance = () => track.scrollWidth - window.innerWidth + 96;

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      return () => tween.kill();
    }, sectionRef);

    const t = setTimeout(() => ScrollTrigger.refresh(), 200);
    return () => {
      clearTimeout(t);
      ctx.revert();
    };
  }, [isMobile]);

  if (isMobile) {
    return (
      <section id="projets" data-theme="light" className="relative bg-theme section-pad border-t border-line">
        <div className="container-x">
          <SectionHeading eyebrow="Portfolio étudiant" title="Ce que nos étudiants réalisent en atelier." description="Glissez pour explorer." />
        </div>
        <div className="mt-12 flex gap-5 overflow-x-auto px-5 pb-4 snap-x snap-mandatory">
          {PROJETS_ETUDIANTS.map((p, i) => (
            <div key={p.nom} className="snap-start">
              <ProjetCard p={p} i={i} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="projets" ref={sectionRef} data-theme="light" className="relative bg-theme border-t border-line h-[100svh] overflow-hidden">
      <div className="h-full flex flex-col justify-center">
        <div className="container-x mb-10">
          <SectionHeading eyebrow="Portfolio étudiant" title="Ce que nos étudiants réalisent en atelier." description="Défilez pour parcourir la sélection." />
        </div>
        <div ref={trackRef} className="flex gap-6 pl-6 sm:pl-10 lg:pl-16 w-max">
          {PROJETS_ETUDIANTS.map((p, i) => (
            <ProjetCard key={p.nom} p={p} i={i} />
          ))}
          <div className="w-[10vw] shrink-0" />
        </div>
      </div>
    </section>
  );
}
