import { Reveal } from "./Reveal";

export function SectionHeading({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <p className="mb-5 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.22em] text-walnut">
        <span>{index}</span>
        <span className="h-px w-10 bg-walnut/60" aria-hidden="true" />
        <span>{label}</span>
      </p>
      <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-paper sm:text-5xl md:text-6xl">
        {title}
      </h2>
    </Reveal>
  );
}
