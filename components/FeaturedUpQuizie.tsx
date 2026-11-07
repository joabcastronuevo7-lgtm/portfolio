"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { upquizie as p } from "@/lib/content";
import { Button } from "./Button";
import { GithubIcon } from "./icons";
import { MediaSlot } from "./MediaSlot";
import { Reveal } from "./Reveal";
import { StatusBadge, Tag } from "./Tag";

export function FeaturedUpQuizie() {
  const [tab, setTab] = useState(0);

  return (
    <article aria-labelledby="upquizie-title" className="py-6">
      <Reveal>
        <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-3">
          <span className="font-mono text-sm text-walnut">{p.index}</span>
          <StatusBadge tone="stone">{p.kind}</StatusBadge>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-stone">Role · {p.role}</span>
        </div>
      </Reveal>

      <Reveal>
        <h3 id="upquizie-title" className="font-display text-5xl tracking-tight text-paper sm:text-6xl md:text-8xl">
          {p.title}
        </h3>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-stone md:text-lg">{p.fullTitle}</p>
      </Reveal>

      {/* media */}
      <Reveal delay={0.1} className="mt-12">
        <div className="overflow-hidden rounded-sm border border-line bg-raise">
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <span className="flex gap-1.5" aria-hidden="true">
              <i className="h-2.5 w-2.5 rounded-full bg-paper/15" />
              <i className="h-2.5 w-2.5 rounded-full bg-paper/15" />
              <i className="h-2.5 w-2.5 rounded-full bg-paper/15" />
            </span>
            <div role="tablist" aria-label="Project media" className="ml-3 flex flex-wrap gap-1">
              {p.media.map((m, i) => (
                <button
                  key={m.label}
                  role="tab"
                  type="button"
                  id={`uq-tab-${i}`}
                  aria-selected={tab === i}
                  aria-controls="uq-panel"
                  onClick={() => setTab(i)}
                  className={`rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                    tab === i ? "bg-paper text-espresso" : "text-stone hover:text-paper"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>
          <div id="uq-panel" role="tabpanel" aria-labelledby={`uq-tab-${tab}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <MediaSlot item={p.media[tab]} priority={tab === 0} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-14 md:grid-cols-[1.1fr_1fr] md:gap-20">
        <Reveal>
          <p className="font-display text-2xl leading-snug text-paper md:text-3xl">{p.description}</p>
          <p className="mb-4 mt-12 font-mono text-xs uppercase tracking-[0.22em] text-walnut">Technology</p>
          <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
            {p.stack.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-walnut">Key contributions</p>
          <ul className="divide-y divide-line border-y border-line">
            {p.contributions.map((c, i) => (
              <li key={c} className="flex gap-4 py-4 text-paper/85">
                <span className="mt-0.5 font-mono text-xs text-walnut">{String(i + 1).padStart(2, "0")}</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={p.github} external>
              <GithubIcon className="h-4 w-4" /> View on GitHub <ArrowUpRight size={15} />
            </Button>
            {p.liveUrl ? (
              <Button href={p.liveUrl} variant="ghost" external>
                <ExternalLink size={15} /> Live demo
              </Button>
            ) : (
              <span
                aria-disabled="true"
                className="inline-flex items-center gap-2 rounded-full border border-dashed border-line px-5 py-3 font-mono text-[11px] uppercase tracking-wider text-stone/70"
              >
                <ExternalLink size={13} /> Live demo link · not available yet
              </span>
            )}
          </div>
        </Reveal>
      </div>
    </article>
  );
}
