import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { TIMELINE } from "../../data/content";

const TILTS = ["tilt-1", "tilt-2", "tilt-3"];

export default function Histoire() {
  return (
    <section id="histoire" data-theme="light" className="relative bg-theme section-pad border-t border-line overflow-hidden">
      <div className="container-x">
        <SectionHeading
          eyebrow="Notre histoire"
          title="Quinze ans à faire évoluer notre pédagogie."
          description="Une école qui s'est transformée à chaque décennie, sans jamais renoncer à sa promesse d'origine."
        />

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.annee} delay={i * 0.05} y={24}>
              <div className={`${TILTS[i % 3]} border-2 border-line rounded-2xl p-7 surface-theme relative`}>
                <div className="giant-number absolute -top-2 -right-2 text-6xl select-none">{String(i + 1).padStart(2, "0")}</div>
                <div className="eyebrow mb-3 relative">{t.annee}</div>
                <h3 className="display-3 mb-3 relative" style={{ fontSize: "clamp(1.1rem,1.6vw,1.35rem)" }}>
                  {t.titre}
                </h3>
                <p className="text-dim text-sm leading-relaxed relative">{t.texte}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
