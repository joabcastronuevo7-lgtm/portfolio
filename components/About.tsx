import { about } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { education } = about;
  return (
    <section id="about" className="border-t border-line py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01" label="About" title="A Little About Me" />

        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr] md:gap-20">
          <div className="space-y-6 text-lg leading-relaxed text-paper/85">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className={i === 0 ? "font-display text-2xl leading-snug text-paper md:text-3xl" : ""}>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <aside className="relative rounded-sm border border-line bg-raise p-8">
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.22em] text-walnut">Education</p>
              <h3 className="font-display text-2xl leading-snug text-paper">{education.degree}</h3>
              <p className="mt-3 text-stone">{education.school}</p>
              <p className="mt-1 font-mono text-sm text-walnut">{education.period}</p>
              <span aria-hidden="true" className="absolute -top-px left-8 h-px w-16 bg-walnut" />
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
