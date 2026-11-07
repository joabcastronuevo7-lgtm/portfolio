"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type View = "desk" | "wall";

const notes = [
  { text: "Switch between desk & wall", tone: "bg-paper text-espresso", rot: -4, pos: "left-[6%] top-[12%]" },
  { text: "Move notes around", tone: "bg-stone text-espresso", rot: 3, pos: "left-[34%] top-[40%]" },
  { text: "Place them anywhere", tone: "bg-walnut text-espresso", rot: -2, pos: "left-[62%] top-[14%]" },
  { text: "Pick up & place — cinematic", tone: "bg-paper text-espresso", rot: 5, pos: "left-[70%] top-[52%]" },
  { text: "Personal organization", tone: "bg-stone text-espresso", rot: -5, pos: "left-[12%] top-[58%]" },
];

function Note({ n, i, view }: { n: (typeof notes)[number]; i: number; view: View }) {
  return (
    <motion.div
      className={`absolute ${n.pos} w-[34%] max-w-[170px] rounded-[2px] p-3 text-[13px] leading-snug shadow-[0_10px_20px_-8px_rgb(0_0_0/0.6)] sm:p-4 sm:text-sm ${n.tone}`}
      style={{ rotate: n.rot, fontFamily: "var(--font-fraunces)" }}
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
      whileHover={{ y: -6, rotate: n.rot * 0.4 }}
    >
      {view === "wall" && (
        <span aria-hidden="true" className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-espresso shadow-[0_1px_2px_rgb(0_0_0/0.5)]" />
      )}
      {n.text}
    </motion.div>
  );
}

export function DeskPreview() {
  const [view, setView] = useState<View>("desk");

  return (
    <section id="desk" className="border-t border-line bg-espresso-deep py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="04" label="Personal Desk" title="A desk I want to build" />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-walnut/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-walnut">
              Coming soon
            </span>
            <p className="mt-6 font-display text-2xl leading-snug text-paper md:text-3xl">
              An interactive workspace inspired by a realistic wooden desk and a corkboard wall.
            </p>
            <p className="mt-5 text-stone">
              This is a concept preview of an application I plan to build. The scene on the right is a static
              illustration, not a working app.
            </p>

            <ul className="mt-8 space-y-3 text-paper/85">
              {[
                "Switchable desk and wall views",
                "Movable sticky notes",
                "Free placement of notes",
                "Cinematic pickup and placement interactions",
                "Personal organization workspace",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-px w-5 bg-walnut" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-sm border border-line shadow-[0_40px_80px_-30px_rgb(0_0_0/0.8)]"
              role="group"
              aria-label="Concept illustration of the desk and wall views"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={view}
                  className={`absolute inset-0 ${view === "desk" ? "wood" : "cork"}`}
                  initial={{ opacity: 0, filter: "blur(6px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(6px)" }}
                  transition={{ duration: 0.4 }}
                >
                  {/* light falloff */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{ background: "radial-gradient(ellipse 70% 60% at 50% 35%, rgb(237 228 213 / 0.12), transparent 70%), radial-gradient(ellipse at center, transparent 50%, rgb(0 0 0 / 0.55))" }}
                  />
                  {notes.map((n, i) => (
                    <Note key={n.text} n={n} i={i} view={view} />
                  ))}
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 rounded-full border border-line bg-espresso/80 p-1 backdrop-blur" role="tablist" aria-label="Preview view">
                {(["desk", "wall"] as const).map((v) => (
                  <button
                    key={v}
                    type="button"
                    role="tab"
                    aria-selected={view === v}
                    onClick={() => setView(v)}
                    className={`rounded-full px-5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
                      view === v ? "bg-paper text-espresso" : "text-stone hover:text-paper"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
              <span className="absolute right-3 top-3 z-10 rounded-full bg-espresso/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-walnut backdrop-blur">
                Concept preview
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
