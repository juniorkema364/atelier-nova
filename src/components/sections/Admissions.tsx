import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { ADMISSIONS_ETAPES, TEMOIGNAGES } from "../../data/content";

function initiales(nom: string) {
  return nom
    .split(" ")
    .map((p) => p[0])
    .join("");
}

export default function Admissions() {
  const [actif, setActif] = useState(0);
  const t = TEMOIGNAGES[actif];

  return (
    <section id="admissions" data-theme="light" className="relative bg-theme section-pad border-t border-line">
      <div className="container-x">
        <SectionHeading
          eyebrow="Admissions"
          title="Quatre étapes pour nous rejoindre."
          description="Un processus simple, pensé pour évaluer votre motivation autant que votre dossier."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ADMISSIONS_ETAPES.map((e, i) => (
            <Reveal key={e.numero} delay={i * 0.06} className="border-t border-line pt-6">
              <div className="font-display text-3xl text-accent mb-4">{e.numero}</div>
              <h3 className="text-ink font-medium mb-2">{e.titre}</h3>
              <p className="text-dim text-sm leading-relaxed">{e.description}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 sm:mt-32 grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">
          <Reveal>
            <div className="eyebrow mb-4">Ils témoignent</div>
            <h3 className="display-3 mb-8">La parole à nos diplômés.</h3>
            <div className="flex lg:flex-col gap-3">
              {TEMOIGNAGES.map((temoin, i) => (
                <button
                  key={temoin.nom}
                  onClick={() => setActif(i)}
                  className={`flex items-center gap-3 text-left rounded-full lg:rounded-lg px-3 py-2 transition-colors duration-300 ${
                    actif === i ? "surface-theme" : ""
                  }`}
                >
                  <span className="w-9 h-9 shrink-0 rounded-full border border-line flex items-center justify-center text-xs font-medium text-ink">
                    {initiales(temoin.nom)}
                  </span>
                  <span className="hidden lg:block text-sm text-dim">{temoin.nom}</span>
                </button>
              ))}
            </div>
          </Reveal>

          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.nom}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="surface-theme border border-line rounded-2xl p-8 sm:p-12"
              >
                <p className="display-3 mb-8" style={{ fontSize: "clamp(1.2rem,2vw,1.6rem)", lineHeight: 1.5 }}>
                  « {t.citation} »
                </p>
                <div className="pt-6 border-t border-line">
                  <div className="text-ink font-medium">{t.nom}</div>
                  <div className="text-dim text-sm mt-1">{t.poste}</div>
                  <div className="text-dim text-xs mt-1">{t.promo}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
