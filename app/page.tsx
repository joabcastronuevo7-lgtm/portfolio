import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Cursor } from "@/components/Cursor";
import { DeskPreview } from "@/components/DeskPreview";
import { Hero } from "@/components/Hero";
import { MotionProvider } from "@/components/MotionProvider";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { profile } from "@/lib/content";

export default function Home() {
  return (
    <MotionProvider>
      <a
        href="#main"
        className="sr-only z-[80] rounded bg-paper px-4 py-2 text-espresso focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Nav />
      <Cursor />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <DeskPreview />
        <Contact />
      </main>
      <footer className="border-t border-line py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-stone sm:flex-row sm:text-left">
          <p>
            JC<span className="text-walnut">.</span> · {profile.name}
          </p>
          <p>Built with Next.js, React &amp; TypeScript</p>
        </div>
      </footer>
    </MotionProvider>
  );
}
