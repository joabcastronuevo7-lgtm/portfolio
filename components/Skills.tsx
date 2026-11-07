import { skillGroups } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="border-t border-line py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="03" label="Technical Skills" title="The toolbox" />

        <div className="grid border-l border-t border-line md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.08} className="border-b border-r border-line">
              <section aria-labelledby={`skill-${i}`} className="h-full p-8 transition-colors duration-300 hover:bg-raise">
                <p className="font-mono text-xs text-walnut">{String(i + 1).padStart(2, "0")}</p>
                <h3 id={`skill-${i}`} className="mb-6 mt-3 font-display text-2xl text-paper">
                  {g.title}
                </h3>
                <ul className="space-y-2.5">
                  {g.items.map((s) => (
                    <li key={s} className="flex items-center gap-3 text-stone">
                      <span aria-hidden="true" className="h-px w-4 bg-walnut/70" />
                      {s}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
