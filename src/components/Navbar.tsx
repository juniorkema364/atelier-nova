import { useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ECOLE, NAV_LINKS } from "../data/content";
import { scrollToId } from "../lib/lenisSingleton";
import Magnetic from "./ui/Magnetic";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 120], [0, 1]);
  const borderOpacity = useTransform(scrollY, [0, 120], [0, 1]);

  const goTo = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <motion.header className="fixed top-0 left-0 right-0 z-50">
        <motion.div
          className="absolute inset-0 backdrop-blur-md"
          style={{ opacity: bgOpacity, background: "var(--bg)" }}
        />
        <motion.div
          className="absolute inset-x-0 bottom-0 h-px"
          style={{ opacity: borderOpacity, background: "var(--line)" }}
        />
        <div className="container-x relative flex items-center justify-between" style={{ height: "var(--nav-h)" }}>
          <button onClick={() => goTo("top")} className="flex items-baseline gap-2 focus-ring">
            <span className="font-display text-xl text-ink">{ECOLE.nom}</span>
          </button>

          <nav className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => goTo(l.id)}
                className="text-[14px] text-dim hover:text-ink transition-colors duration-300"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Magnetic onClick={() => goTo("contact")} className="btn btn-primary">
              Candidater
            </Magnetic>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center focus-ring"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Ouvrir le menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
              className="w-6 h-px bg-ink block"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="w-6 h-px bg-ink block"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
              className="w-6 h-px bg-ink block"
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-theme"
            style={{ paddingTop: "var(--nav-h)" }}
          >
            <div className="container-x flex flex-col gap-1 pt-10">
              {NAV_LINKS.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                  onClick={() => goTo(l.id)}
                  className="text-left py-4 border-b border-line"
                >
                  <span className="display-3">{l.label}</span>
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * NAV_LINKS.length, duration: 0.4 }}
                onClick={() => goTo("contact")}
                className="btn btn-primary mt-8 self-start"
              >
                Candidater
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
