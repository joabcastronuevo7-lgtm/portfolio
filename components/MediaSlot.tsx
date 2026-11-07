import Image from "next/image";
import { Film, ImageIcon, Play } from "lucide-react";
import type { MediaItem } from "@/lib/content";

/**
 * Renders a real asset when provided, otherwise a clearly-labelled placeholder.
 * Priority: embedUrl (hosted video) > videoSrc > src (image) > placeholder.
 */
export function MediaSlot({ item, aspect = "aspect-video", priority }: { item: MediaItem; aspect?: string; priority?: boolean }) {
  if (item.embedUrl) {
    return (
      <div className={`${aspect} w-full overflow-hidden bg-espresso-deep`}>
        <iframe
          src={item.embedUrl}
          title={item.alt ?? item.label}
          className="h-full w-full"
          loading="lazy"
          allow="accelerometer; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  if (item.videoSrc) {
    return (
      <video
        className={`${aspect} w-full bg-espresso-deep object-cover`}
        src={item.videoSrc}
        controls
        preload="metadata"
        aria-label={item.alt ?? item.label}
      />
    );
  }
  if (item.src) {
    return (
      <div className={`relative ${aspect} w-full overflow-hidden bg-espresso-deep`}>
        <Image
          src={item.src}
          alt={item.alt ?? item.label}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
          priority={priority}
        />
      </div>
    );
  }

  const Icon = item.kind === "video" ? Play : ImageIcon;
  return (
    <div
      role="img"
      aria-label={`Placeholder for ${item.label.toLowerCase()}`}
      className={`relative ${aspect} w-full overflow-hidden bg-espresso-deep`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0 14px, rgb(237 228 213 / 0.035) 14px 15px)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-walnut/50 text-walnut">
          <Icon size={18} />
        </span>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-stone">{item.label}</p>
        <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-stone/60">
          <Film size={11} /> Placeholder · to be added
        </p>
      </div>
    </div>
  );
}
