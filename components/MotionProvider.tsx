"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Honors the visitor's prefers-reduced-motion setting for all transform animations. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
