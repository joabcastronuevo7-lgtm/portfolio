"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowDownRight, Download, Mail } from "lucide-react";
import { profile } from "@/lib/content";
import { Button } from "./Button";
import { GithubIcon, LinkedinIcon } from "./icons";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const line = (delay: number) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease },
  });

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28">
      {/* workspace backdrop: desk-mat grid + drifting lamp light */}
      <div aria-hidden="true" className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 70% 60% at 70% 40%, black, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 70% 40%, black, transparent 75%)",
          }}
        />
        <div
          className="lamp absolute -right-[10%] -top-[15%] h-[85vmin] w-[85vmin] rounded-full"
          style={{ background: "radial-gradient(circle, rgb(166 139 108 / 0.28), transparent 62%)" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-espresso to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <motion.div {...line(0.1)} className="mb-10 flex items-center gap-3">
          <span className="status-dot inline-block h-2 w-2 shrink-0 rounded-full bg-walnut" aria-hidden="true" />
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone sm:text-xs sm:tracking-[0.22em]">
            Open to opportunities<span className="hidden sm:inline"> · Graduating May 2027</span>
          </p>
        </motion.div>

        <motion.figure
          {...line(0.45)}
          className="mb-10 w-48 sm:w-56 lg:absolute lg:right-6 lg:top-0 lg:mb-0 lg:w-[300px]"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-line bg-raise p-2 shadow-[0_30px_60px_-25px_rgb(0_0_0/0.8)]">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src="/joab-graduation.jpg"
                alt="Joab Castronuevo in a blue and gold Central Philippine University graduation gown, holding his cap"
                fill
                priority
                sizes="(min-width: 1024px) 300px, 224px"
                className="origin-[50%_32%] scale-[1.55] object-cover object-[50%_30%] sepia-[0.15]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent" />
            </div>
          </div>
        </motion.figure>

        <h1 className="font-display text-[clamp(3rem,10.5vw,9rem)] font-light leading-[0.92] tracking-[-0.03em] text-paper">
          <motion.span className="block" {...line(0.2)}>
            Joab G.
          </motion.span>
          <motion.span className="block italic text-walnut" {...line(0.32)}>
            Castronuevo
          </motion.span>
        </h1>

        <motion.div {...line(0.55)} className="mt-10 grid gap-10 md:mt-14 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-xl">
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-walnut">{profile.title}</p>
            <p className="text-lg leading-relaxed text-paper/85 md:text-xl">{profile.intro}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="#projects">
                View Projects <ArrowDownRight size={16} />
              </Button>
              <Button href={profile.resume} variant="ghost" download>
                <Download size={16} /> Download Resume
              </Button>
            </div>
          </div>

          <ul className="flex items-center gap-2 md:flex-col md:items-end md:gap-3">
            {[
              { href: profile.github, label: "GitHub", icon: <GithubIcon className="h-[18px] w-[18px]" />, ext: true },
              { href: profile.linkedin, label: "LinkedIn", icon: <LinkedinIcon className="h-[18px] w-[18px]" />, ext: true },
              { href: `mailto:${profile.email}`, label: "Email", icon: <Mail size={18} />, ext: false },
            ].map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  {...(l.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-3 rounded-full border border-line px-4 py-2.5 text-sm text-stone transition-colors hover:border-walnut hover:text-paper"
                  aria-label={l.label}
                >
                  {l.icon}
                  <span className="hidden md:inline">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
