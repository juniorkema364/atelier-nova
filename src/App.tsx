import { useEffect, useMemo } from "react";
import { useIsMobile, usePrefersReducedMotion } from "./hooks/useMediaQuery";
import { useSmoothScroll } from "./lib/useSmoothScroll";
import { useScrollTheme } from "./lib/theme";
import { isWebGLAvailable } from "./lib/webgl";
import { ECOLE } from "./data/content";

import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/sections/Hero";
import Manifeste from "./components/sections/Manifeste";
import Histoire from "./components/sections/Histoire";
import Expertises from "./components/sections/Expertises";
import Programmes from "./components/sections/Programmes";
import ChiffresCles from "./components/sections/ChiffresCles";
import ProjetsEtudiants from "./components/sections/ProjetsEtudiants";
import CaseStudy from "./components/sections/CaseStudy";
import VieCampus from "./components/sections/VieCampus";
import Equipe from "./components/sections/Equipe";
import Admissions from "./components/sections/Admissions";
import Partenaires from "./components/sections/Partenaires";
import Actualites from "./components/sections/Actualites";
import FAQ from "./components/sections/FAQ";
import CTAFooter from "./components/sections/CTAFooter";

function App() {
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();
  const motionEnabled = !reducedMotion;
  const showCanvas = useMemo(() => isWebGLAvailable(), []);

  useSmoothScroll(true);
  useScrollTheme();

  useEffect(() => {
    document.title = `${ECOLE.nom} — ${ECOLE.nomComplet}`;
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero motionEnabled={motionEnabled} showCanvas={showCanvas} isMobile={isMobile} />
        <Manifeste />
        <Histoire />
        <Expertises />
        <Programmes />
        <ChiffresCles />
        <ProjetsEtudiants isMobile={isMobile} />
        <CaseStudy />
        <VieCampus />
        <Equipe />
        <Admissions />
        <Partenaires />
        <Actualites />
        <FAQ />
        <CTAFooter />
      </main>
    </>
  );
}

export default App;
