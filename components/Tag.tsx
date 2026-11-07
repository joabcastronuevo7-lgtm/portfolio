import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-stone">
      {children}
    </li>
  );
}

export function StatusBadge({ children, tone = "walnut" }: { children: ReactNode; tone?: "walnut" | "stone" }) {
  const c = tone === "walnut" ? "border-walnut/60 text-walnut" : "border-stone/40 text-stone";
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] ${c}`}
    >
      {children}
    </span>
  );
}
