import { ArrowDownRight } from "lucide-react";
import { FeaturedClashbound } from "./FeaturedClashbound";
import { FeaturedUpQuizie } from "./FeaturedUpQuizie";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { StatusBadge } from "./Tag";

export function Projects() {
  return (
    <section id="projects" className="border-t border-line py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="02" label="Featured Projects" title="Selected work" />

        <FeaturedUpQuizie />

        <hr className="my-24 border-line md:my-32" />

        <FeaturedClashbound />

        <hr className="my-24 border-line md:my-32" />

        {/* Project 03 is a concept: compact entry that points to the desk preview */}
        <Reveal>
          <article aria-labelledby="desk-project-title" className="grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
            <span className="font-mono text-sm text-walnut">03</span>
            <div>
              <div className="mb-4 flex flex-wrap gap-3">
                <StatusBadge>Concept / Planned</StatusBadge>
              </div>
              <h3 id="desk-project-title" className="font-display text-4xl tracking-tight text-paper md:text-6xl">
                Personal Desk Workspace
              </h3>
              <p className="mt-4 max-w-2xl text-stone">
                An interactive digital workspace inspired by a realistic wooden desk and corkboard wall. An idea for a
                future application, not yet built.
              </p>
            </div>
            <a
              href="#desk"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-walnut transition-colors hover:text-paper"
            >
              See the concept <ArrowDownRight size={16} />
            </a>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
