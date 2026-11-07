"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import { profile } from "@/lib/content";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const field =
  "w-full border-b border-line bg-transparent py-3 text-paper placeholder:text-stone/50 transition-colors focus:border-walnut focus:outline-none";

export function Contact() {
  const [sent, setSent] = useState(false);

  // No backend: composes an email in the visitor's own mail client.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "");
    const from = String(f.get("email") ?? "");
    const message = String(f.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${from}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: <Mail size={18} />, ext: false },
    { label: "GitHub", value: "joabcastronuevo7-lgtm", href: profile.github, icon: <GithubIcon className="h-[18px] w-[18px]" />, ext: true },
    { label: "LinkedIn", value: "joabcastronuevoggd-531a53413", href: profile.linkedin, icon: <LinkedinIcon className="h-[18px] w-[18px]" />, ext: true },
  ];

  return (
    <section id="contact" className="border-t border-line py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="05" label="Contact" title="Let's Build Something." />

        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <Reveal>
            <p className="font-display text-2xl leading-snug text-paper md:text-3xl">
              I&apos;m always interested in connecting with developers, collaborating on projects, and exploring
              opportunities to grow as a developer.
            </p>
            <ul className="mt-12 divide-y divide-line border-y border-line">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-walnut"
                  >
                    <span className="flex min-w-0 items-center gap-4">
                      <span className="text-walnut">{l.icon}</span>
                      <span className="min-w-0">
                        <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-stone">{l.label}</span>
                        <span className="block truncate text-paper group-hover:text-walnut">{l.value}</span>
                      </span>
                    </span>
                    <ArrowUpRight size={18} className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="space-y-7">
              <div>
                <label htmlFor="name" className="mb-1 block font-mono text-[11px] uppercase tracking-[0.2em] text-stone">Name</label>
                <input id="name" name="name" required autoComplete="name" className={field} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block font-mono text-[11px] uppercase tracking-[0.2em] text-stone">Your email</label>
                <input id="email" name="email" type="email" required autoComplete="email" className={field} placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block font-mono text-[11px] uppercase tracking-[0.2em] text-stone">Message</label>
                <textarea id="message" name="message" required rows={4} className={`${field} resize-none`} placeholder="What would you like to build?" />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2.5 rounded-full bg-paper px-7 py-3.5 text-sm font-medium tracking-wide text-espresso transition-colors hover:bg-walnut"
              >
                Send via email <ArrowUpRight size={16} />
              </button>
              <p className="text-xs text-stone/70" role="status">
                {sent
                  ? "Opening your email app. If nothing opens, write to the address on the left."
                  : "This opens a pre-filled message in your email app. Nothing is stored on this site."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
