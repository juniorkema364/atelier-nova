import Reveal from "../ui/Reveal";
import SplitReveal from "../ui/SplitReveal";
import ParallaxImage from "../ui/ParallaxImage";
import { VIE_CAMPUS } from "../../data/content";

const IMG_COURTYARD = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Founders_courtyard_Ashesi.jpg/1280px-Founders_courtyard_Ashesi.jpg";
const IMG_ENTRANCE = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/KNUST_main_entrance_with_Kwame_Nkrumah_Memorial_Park.jpg/1280px-KNUST_main_entrance_with_Kwame_Nkrumah_Memorial_Park.jpg";

export default function VieCampus() {
  return (
    <section data-theme="light" className="relative bg-theme section-pad border-t border-line overflow-hidden">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
          <div>
            <Reveal>
              <div className="eyebrow mb-6">{VIE_CAMPUS.eyebrow}</div>
            </Reveal>
            <SplitReveal text={VIE_CAMPUS.titre} className="display-2" />
            <Reveal delay={0.15} className="body-lg mt-8 max-w-md">
              {VIE_CAMPUS.intro}
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-8 mt-14">
              {VIE_CAMPUS.points.map((p, i) => (
                <Reveal key={p.titre} delay={i * 0.06} className="border-t-2 border-line pt-6">
                  <h3 className="text-ink font-medium mb-2">{p.titre}</h3>
                  <p className="text-dim text-sm leading-relaxed">{p.description}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="relative pt-10 pb-16">
            <div className="giant-number absolute -top-4 -right-2 select-none pointer-events-none" style={{ fontSize: "9rem" }}>
              02
            </div>
            <Reveal delay={0.1} className="tilt-2 relative rounded-2xl overflow-hidden border-2 border-ink z-10">
              <ParallaxImage
                src={IMG_COURTYARD}
                alt="Cour d'un campus créatif en Afrique"
                className="aspect-[5/4]"
                strength={16}
              />
            </Reveal>
            <Reveal delay={0.2} className="tilt-3 relative rounded-2xl overflow-hidden border-2 border-ink -mt-10 ml-16 w-2/3 z-20 surface-theme">
              <ParallaxImage
                src={IMG_ENTRANCE}
                alt="Espace extérieur d'un campus africain"
                className="aspect-[4/5]"
                strength={24}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
