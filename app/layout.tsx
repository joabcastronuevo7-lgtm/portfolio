import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const display = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});
const sans = Inter({ variable: "--font-inter", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: `${profile.name} — ${profile.title}`, template: `%s · ${profile.name}` },
  description: profile.siteDescription,
  authors: [{ name: profile.name, url: profile.github }],
  keywords: ["Joab Castronuevo", "Full-Stack Developer", "Next.js", "Go", "TypeScript", "RAG", "Portfolio"],
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.siteDescription,
    type: "website",
  },
  twitter: { card: "summary", title: `${profile.name} — ${profile.title}`, description: profile.siteDescription },
};

export const viewport: Viewport = { themeColor: "#211B17", colorScheme: "dark" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="grain min-h-screen font-sans">{children}</body>
    </html>
  );
}
