import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import { FAQ as FAQ_ITEMS } from "../../data/content";

export default function FAQSection() {
  const [ouvert, setOuvert] = useState<number | null>(0);

  return (
    <section id="faq" data-theme="light" className="relative bg-theme section-pad border-t border-line">
      <div className="container-x">
        <SectionHeading eyebrow="Questions fréquentes" title="Tout ce qu'on nous demande avant de candidater." />

        <div className="mt-16 max-w-3xl border-t border-line">
          {FAQ_ITEMS.map((item, i) => {
            const estOuvert = ouvert === i;
            return (
              <div key={item.q} className="border-b border-line">
                <button
                  onClick={() => setOuvert(estOuvert ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left focus-ring"
                  aria-expanded={estOuvert}
                >
                  <span className="font-display text-base sm:text-lg pr-6">{item.q}</span>
                  <span
                    className={`shrink-0 w-7 h-7 border border-line rounded-full flex items-center justify-center transition-transform duration-400 ${
                      estOuvert ? "rotate-45 border-accent text-accent" : "text-dim"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                  style={{ gridTemplateRows: estOuvert ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="text-dim text-sm leading-relaxed pb-6 max-w-xl">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
