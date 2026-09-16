import SectionHeading from "../ui/SectionHeading";
import { EQUIPE } from "../../data/content";

function initiales(nom: string) {
  return nom
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
}

export default function Equipe() {
  return (
    <section id="equipe" data-theme="light" className="relative bg-theme section-pad border-t border-line">
      <div className="container-x">
        <SectionHeading eyebrow="Équipe de direction" title="Les personnes qui font tourner l'école." />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-line" style={{ background: "var(--line)" }}>
          {EQUIPE.map((membre) => (
            <div key={membre.nom} className="group relative surface-theme aspect-[4/5] overflow-hidden">
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex items-center justify-center w-12 h-12 border border-line rounded-full font-display text-sm text-dim group-hover:border-accent group-hover:text-accent transition-colors duration-300">
                  {initiales(membre.nom)}
                </div>
                <div>
                  <div className="font-display text-lg text-ink">{membre.nom}</div>
                  <div className="text-accent text-sm mt-1">{membre.role}</div>
                </div>
              </div>

              <div className="absolute inset-0 bg-theme p-6 flex items-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                <div>
                  <div className="text-accent text-sm mb-3">{membre.role}</div>
                  <div className="font-display text-base text-ink mb-3">{membre.nom}</div>
                  <p className="text-dim text-sm leading-relaxed">{membre.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
