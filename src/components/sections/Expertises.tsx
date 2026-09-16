import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { ECOLE, EXPERTISES } from "../../data/content";

export default function Expertises() {
  return (
    <section data-theme="light" className="relative bg-theme section-pad border-t border-line">
      <div className="container-x">
        <SectionHeading eyebrow={`Pourquoi ${ECOLE.nom}`} title="Quatre choix pédagogiques qui nous distinguent." />

        <div className="mt-16 grid sm:grid-cols-6 gap-5 sm:gap-6">
          {EXPERTISES.map((e, i) => (
            <Reveal
              key={e.titre}
              delay={i * 0.06}
              className={i % 2 === 0 ? "sm:col-span-4" : "sm:col-span-2"}
            >
              <motion.div
                whileHover={{ y: -6, rotate: i % 2 === 0 ? -0.6 : 0.6 }}
                className="border-2 border-line rounded-2xl p-8 sm:p-10 surface-theme h-full relative overflow-hidden"
              >
                <div className="giant-number absolute bottom-2 right-4 text-8xl">{String(i + 1).padStart(2, "0")}</div>
                <div className="eyebrow mb-4 relative">EXPERTISE_{String(i + 1).padStart(2, "0")}</div>
                <h3 className="display-3 mb-4 relative max-w-md">{e.titre}</h3>
                <p className="text-dim text-sm leading-relaxed relative max-w-md">{e.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
