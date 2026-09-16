import Reveal from "../ui/Reveal";
import { PARTENAIRES } from "../../data/content";

export default function Partenaires() {
  const loop = [...PARTENAIRES, ...PARTENAIRES];
  return (
    <section id="partenaires" data-theme="light" className="relative py-16 sm:py-20 bg-theme border-t border-line overflow-hidden">
      <div className="container-x mb-10">
        <Reveal className="eyebrow">Ils nous font confiance</Reveal>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10" style={{ background: "linear-gradient(to right, var(--bg), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10" style={{ background: "linear-gradient(to left, var(--bg), transparent)" }} />
        <div className="flex w-max animate-marquee">
          {loop.map((p, i) => (
            <div key={p + i} className="font-display text-2xl sm:text-3xl text-dim px-10 sm:px-14 shrink-0 tracking-tight">
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
