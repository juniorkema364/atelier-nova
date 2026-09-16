import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { ACTUALITES, ECOLE } from "../../data/content";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" });
}

export default function Actualites() {
  return (
    <section id="actualites" data-theme="light" className="relative bg-theme section-pad border-t border-line">
      <div className="container-x">
        <SectionHeading eyebrow="Actualités" title={`Ce qui se passe en ce moment à ${ECOLE.nom}.`} />

        <div className="mt-16 border-t border-line">
          {ACTUALITES.map((n, i) => (
            <Reveal key={n.titre} delay={i * 0.04}>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="group grid sm:grid-cols-[120px_120px_1fr_auto] items-baseline gap-3 sm:gap-6 border-b border-line py-7"
              >
                <span className="text-dim text-xs">{formatDate(n.date)}</span>
                <span className="eyebrow">{n.categorie}</span>
                <span>
                  <span className="font-display text-lg block group-hover:text-accent transition-colors duration-300" style={{ fontSize: "clamp(1.05rem,1.4vw,1.3rem)" }}>
                    {n.titre}
                  </span>
                  <span className="text-dim text-sm mt-1 block max-w-2xl">{n.extrait}</span>
                </span>
                <span className="hidden sm:block text-dim text-xs group-hover:text-accent group-hover:translate-x-1 transition-all duration-300">
                  LIRE →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
