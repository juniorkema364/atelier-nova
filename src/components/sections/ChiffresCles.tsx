import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Counter from "../ui/Counter";
import { STATS } from "../../data/content";

export default function ChiffresCles() {
  return (
    <section id="chiffres" data-theme="light" className="relative bg-theme section-pad border-t border-line">
      <div className="container-x">
        <SectionHeading
          eyebrow="L'école en chiffres"
          title="Une école reconnue, un réseau créatif qui compte."
        />

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-line" style={{ background: "var(--line)" }}>
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05} className="surface-theme p-8 sm:p-10">
              <Counter
                value={s.value}
                suffix={s.suffix}
                className="font-display block text-4xl sm:text-5xl text-ink tabular-nums"
              />
              <div className="text-dim text-sm mt-3">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
