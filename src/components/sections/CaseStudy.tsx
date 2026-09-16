import Reveal from "../ui/Reveal";
import SplitReveal from "../ui/SplitReveal";
import { CASE_STUDY } from "../../data/content";

export default function CaseStudy() {
  return (
    <section id="etude-de-cas" data-theme="dark" className="relative bg-theme section-pad border-t border-line overflow-hidden">
      <div className="container-x relative">
        <Reveal>
          <div className="eyebrow mb-6">{CASE_STUDY.eyebrow}</div>
        </Reveal>
        <SplitReveal text={CASE_STUDY.titre} className="display-1 max-w-4xl" />

        <Reveal delay={0.1} className="flex flex-wrap gap-10 mt-10 text-sm">
          <div>
            <div className="text-dim mb-1 text-xs uppercase tracking-wide">Client</div>
            <div className="text-ink font-medium">{CASE_STUDY.client}</div>
          </div>
          <div>
            <div className="text-dim mb-1 text-xs uppercase tracking-wide">Secteur</div>
            <div className="text-ink font-medium">{CASE_STUDY.secteur}</div>
          </div>
          <div>
            <div className="text-dim mb-1 text-xs uppercase tracking-wide">Année</div>
            <div className="text-ink font-medium">{CASE_STUDY.annee}</div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-6 mt-16">
          <Reveal className="tilt-1">
            <div className="rounded-2xl p-8 h-full" style={{ background: "var(--accent)", color: "var(--bg)" }}>
              <div className="text-xs uppercase tracking-wide font-bold mb-4 opacity-70">Le problème</div>
              <p className="text-sm leading-relaxed font-medium">{CASE_STUDY.probleme}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="tilt-2 border-2 border-line rounded-2xl p-8 surface-theme">
            <div className="eyebrow mb-4">L'approche</div>
            <p className="text-dim text-sm leading-relaxed">{CASE_STUDY.approche}</p>
          </Reveal>
          <Reveal delay={0.16} className="tilt-3">
            <div className="rounded-2xl p-8 h-full" style={{ background: "var(--accent2)", color: "var(--bg)" }}>
              <div className="text-xs uppercase tracking-wide font-bold mb-4 opacity-70">La solution</div>
              <p className="text-sm leading-relaxed font-medium">{CASE_STUDY.solution}</p>
            </div>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start mt-16">
          <Reveal>
            <div className="eyebrow mb-6">Résultats</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {CASE_STUDY.resultats.map((r) => (
                <div key={r.label}>
                  <div className="display-2 text-accent" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)" }}>
                    {r.valeur}
                  </div>
                  <div className="text-dim text-xs mt-2">{r.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="border-2 border-line rounded-2xl p-8 surface-theme">
            <div className="text-3xl text-accent font-display mb-4 leading-none">"</div>
            <p className="display-3 mb-6" style={{ fontSize: "clamp(1.05rem,1.6vw,1.3rem)" }}>
              {CASE_STUDY.citation}
            </p>
            <div className="text-dim text-sm">— {CASE_STUDY.citationAuteur}</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
