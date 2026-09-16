import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import SplitReveal from "../ui/SplitReveal";
import Reveal from "../ui/Reveal";
import { ECOLE, FOOTER_COLONNES } from "../../data/content";
import { scrollToId } from "../../lib/lenisSingleton";

export default function CTAFooter() {
  const [email, setEmail] = useState("");
  const [envoye, setEnvoye] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setEnvoye(true);
  };

  return (
    <section id="contact" data-theme="dark" className="relative bg-theme">
      <div className="section-pad">
        <div className="container-x text-center">
          <Reveal>
            <div className="eyebrow mb-8 justify-center flex">Rejoignez-nous</div>
          </Reveal>
          <SplitReveal
            text="Prêt à écrire la suite de votre parcours ?"
            className="display-1 mx-auto max-w-4xl"
          />
          <Reveal delay={0.2} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="btn btn-primary">
              Candidater maintenant
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToId("programmes")}
              className="btn btn-ghost"
            >
              Voir les formations
            </motion.button>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-line pt-16 pb-10">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-12 pb-14 border-b border-line">
            <div>
              <div className="font-display text-xl text-ink mb-4">{ECOLE.nom}</div>
              <p className="text-dim text-sm leading-relaxed max-w-xs">{ECOLE.nomComplet}</p>
              <p className="text-dim text-sm mt-4">{ECOLE.ville}</p>
            </div>

            {FOOTER_COLONNES.map((col) => (
              <div key={col.titre}>
                <div className="text-[11px] uppercase tracking-wider text-dim mb-5">{col.titre}</div>
                <ul className="space-y-3">
                  {col.liens.map((l) => (
                    <li key={l.label}>
                      <button
                        onClick={() => scrollToId(l.id)}
                        className="text-sm text-ink/80 hover:text-accent transition-colors duration-300"
                      >
                        {l.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <div className="text-[11px] uppercase tracking-wider text-dim mb-5">Newsletter</div>
              {envoye ? (
                <p className="text-sm text-accent">Merci, votre inscription est confirmée.</p>
              ) : (
                <form onSubmit={onSubmit} className="flex border border-line rounded-full overflow-hidden">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vous@exemple.com"
                    aria-label="Adresse e-mail"
                    className="w-full bg-transparent px-4 py-2.5 text-sm outline-none"
                  />
                  <button type="submit" className="px-4 text-accent shrink-0">
                    →
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
            <p className="text-dim text-xs">
              © {new Date().getFullYear()} {ECOLE.nomComplet}. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-dim text-xs">
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-ink transition-colors">
                Mentions légales
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-ink transition-colors">
                Confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
