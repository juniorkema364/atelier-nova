import { useLayoutEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import { PROGRAMMES } from "../../data/content";
import { scrollToId } from "../../lib/lenisSingleton";

const TILTS = ["tilt-1", "tilt-2", "tilt-3", "tilt-1"];

export default function Programmes() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const panelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const ctx = gsap.context(() => {
      stepRefs.current.forEach((step, i) => {
        if (!step) return;
        ScrollTrigger.create({
          trigger: step,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });
    }, track);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (!panelRef.current) return;
    gsap.fromTo(panelRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
  }, [active]);

  const program = PROGRAMMES[active];

  return (
    <section id="programmes" data-theme="light" className="relative bg-theme section-pad border-t border-line">
      <div className="container-x">
        <SectionHeading
          eyebrow="Nos formations"
          title="Quatre parcours, une même exigence créative."
          description="Du premier cycle à la formation continue, chaque parcours combine pratique en atelier et exigence professionnelle."
        />
      </div>

      <div ref={trackRef} className="container-x mt-16 grid lg:grid-cols-[1fr_1fr] gap-16">
        <div className="lg:sticky lg:top-[calc(var(--nav-h)+56px)] h-fit order-2 lg:order-1 pt-4">
          <div ref={panelRef} className={`${TILTS[active]} relative overflow-hidden border-2 border-ink rounded-2xl p-8 sm:p-10 surface-theme`}>
            <div className="giant-number absolute -top-2 -right-2 select-none pointer-events-none" style={{ fontSize: "5rem" }}>
              {String(active + 1).padStart(2, "0")}
            </div>
            <div className="flex items-center justify-between mb-6 relative">
              <span className="eyebrow">{program.niveau}</span>
              <span className="text-dim text-sm">{program.duree}</span>
            </div>
            <h3 className="display-3 relative">{program.nom}</h3>
            <p className="text-dim text-sm leading-relaxed mt-6 relative">{program.description}</p>
            <div className="pt-5 mt-6 border-t-2 border-line relative">
              <div className="text-[11px] uppercase tracking-wider text-dim mb-2">Débouchés</div>
              <p className="text-sm text-ink">{program.debouches}</p>
            </div>
            <button onClick={() => scrollToId("admissions")} className="btn btn-primary mt-8 relative">
              Candidater à ce programme
            </button>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex flex-col">
          {PROGRAMMES.map((p, i) => (
            <div
              key={p.nom}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className="min-h-[50vh] lg:min-h-[65vh] flex items-center border-t-2 border-line first:border-t-0"
            >
              <button onClick={() => scrollToId("admissions")} className="text-left w-full group">
                <div
                  className="font-display font-extrabold transition-colors duration-300"
                  style={{
                    fontSize: "clamp(3rem,7vw,5rem)",
                    color: active === i ? "var(--accent)" : "var(--line)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div
                  className="display-3 mt-2 transition-colors duration-300"
                  style={{ color: active === i ? "var(--ink)" : "var(--dim)" }}
                >
                  {p.nom}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
