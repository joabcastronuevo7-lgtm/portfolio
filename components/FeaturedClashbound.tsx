import { clashbound as p } from "@/lib/content";
import { MediaSlot } from "./MediaSlot";
import { Reveal } from "./Reveal";
import { StatusBadge } from "./Tag";

export function FeaturedClashbound() {
  return (
    <article aria-labelledby="clashbound-title" className="py-6">
      <Reveal>
        <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-3">
          <span className="font-mono text-sm text-walnut">{p.index}</span>
          <StatusBadge tone="stone">{p.kind}</StatusBadge>
          <StatusBadge>{p.status}</StatusBadge>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-stone">Platform · {p.platform}</span>
        </div>
        <h3 id="clashbound-title" className="font-display text-5xl tracking-tight text-paper sm:text-6xl md:text-8xl">
          {p.title}
        </h3>
        <p className="mt-6 max-w-2xl font-display text-2xl leading-snug text-paper md:text-3xl">{p.description}</p>
        <p className="mt-4 max-w-2xl text-sm text-stone">
          Currently under development. Not released or publicly available.
        </p>
      </Reveal>

      {/* gameplay + screenshots */}
      <Reveal delay={0.1} className="mt-12 grid gap-3 md:grid-cols-3 md:grid-rows-2">
        <div className="md:col-span-2 md:row-span-2">
          <MediaSlot item={p.media[0]} aspect="aspect-video md:h-full md:aspect-auto" />
        </div>
        <MediaSlot item={p.media[1]} />
        <MediaSlot item={p.media[2]} />
      </Reveal>

      <Reveal delay={0.1} className="mt-14">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.22em] text-walnut">Showcase</p>
        <ul className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {p.features.map((f, i) => (
            <li
              key={f.title}
              className="group border-b border-r border-line p-6 transition-colors duration-300 hover:bg-raise"
            >
              <span className="font-mono text-xs text-walnut">{String(i + 1).padStart(2, "0")}</span>
              <h4 className="mt-3 font-display text-xl text-paper">{f.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-stone">{f.note}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-stone/70">
          Technology stack: to be documented
        </p>
      </Reveal>
    </article>
  );
}
