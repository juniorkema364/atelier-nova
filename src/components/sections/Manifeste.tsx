import Reveal from "../ui/Reveal";
import SplitReveal from "../ui/SplitReveal";
import { MANIFESTE } from "../../data/content";

export default function Manifeste() {
  return (
    <section data-theme="light" className="relative bg-theme section-pad border-t border-line">
      <div className="container-x">
        <Reveal>
          <div className="eyebrow mb-6">{MANIFESTE.eyebrow}</div>
        </Reveal>
        <SplitReveal text={MANIFESTE.titre} className="display-2 max-w-4xl" />
        <Reveal delay={0.15} className="mt-10 grid md:grid-cols-2 gap-10 max-w-4xl">
          <p className="body-lg">{MANIFESTE.paragraphe1}</p>
          <p className="body-lg">{MANIFESTE.paragraphe2}</p>
        </Reveal>
      </div>
    </section>
  );
}
