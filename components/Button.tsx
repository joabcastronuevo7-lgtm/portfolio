import type { ReactNode } from "react";

const base =
  "inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300";

export function Button({
  href,
  children,
  variant = "primary",
  external,
  download,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  download?: boolean;
  className?: string;
}) {
  const styles =
    variant === "primary"
      ? "bg-paper text-espresso hover:bg-walnut"
      : "border border-paper/25 text-paper hover:border-walnut hover:text-walnut";
  return (
    <a
      href={href}
      className={`${base} ${styles} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download: true } : {})}
    >
      {children}
    </a>
  );
}
