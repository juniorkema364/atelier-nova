import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import SplitReveal from "../ui/SplitReveal";
import CanvasBoundary from "../CanvasBoundary";
import Magnetic from "../ui/Magnetic";
import { ECOLE } from "../../data/content";
import { scrollToId } from "../../lib/lenisSingleton";

const HeroScene = lazy(() => import("../../three/HeroScene"));

interface HeroProps {
  motionEnabled: boolean;
  showCanvas: boolean;
  isMobile: boolean;
}

export default function Hero({ motionEnabled, showCanvas, isMobile }: HeroProps) {
  return (
    <section id="top" data-theme="dark" className="relative bg-theme pt-[calc(var(--nav-h)+40px)] sm:pt-[calc(var(--nav-h)+64px)]">
      <div className="container-x grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-10 items-center pb-16 sm:pb-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow mb-6"
          >
            {ECOLE.ville} — Fondée en {ECOLE.fondation}
          </motion.div>

          <SplitReveal
            text={ECOLE.accroche}
            className="display-1"
            trigger="immediate"
            delay={0.15}
            stagger={0.03}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="body-lg mt-8 max-w-lg"
          >
            {ECOLE.heroParagraphe}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-wrap items-center gap-4 mt-10"
          >
            <Magnetic onClick={() => scrollToId("programmes")} className="btn btn-primary">
              Découvrir nos formations
            </Magnetic>
            <Magnetic onClick={() => scrollToId("chiffres")} className="btn btn-ghost">
              L'école en chiffres
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative aspect-square rounded-2xl border border-line overflow-hidden"
          style={{ background: "var(--surface)" }}
        >
          {showCanvas ? (
            <CanvasBoundary fallback={<div className="absolute inset-0 hero-fallback" />}>
              <Suspense fallback={null}>
                <HeroScene motion={motionEnabled} isMobile={isMobile} />
              </Suspense>
            </CanvasBoundary>
          ) : (
            <div className="absolute inset-0 hero-fallback" />
          )}
        </motion.div>
      </div>
    </section>
  );
}
