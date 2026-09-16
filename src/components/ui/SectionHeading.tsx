import SplitReveal from "./SplitReveal";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}>
      <Reveal>
        <div className="eyebrow mb-4">{eyebrow}</div>
      </Reveal>
      <SplitReveal text={title} className="display-2" />
      {description && (
        <Reveal delay={0.15} className="body-lg mt-6 max-w-xl">
          {description}
        </Reveal>
      )}
    </div>
  );
}
