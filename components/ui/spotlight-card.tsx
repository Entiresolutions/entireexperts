"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Card surface with a cursor-following radial highlight. The pointer position
 * is written to CSS custom properties (--mx/--my) directly on the node, so the
 * glow tracks the mouse without any React re-renders. The highlight is opacity
 * 0 until hover and uses opacity only, so it stays cheap. Under reduced motion
 * the hover glow simply fades in without following the cursor.
 */
export function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={cn("group/spotlight relative overflow-hidden", className)}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100 motion-reduce:transition-none"
        style={{
          background:
            "radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), color-mix(in srgb, var(--color-brand) 16%, transparent), transparent 70%)",
        }}
      />
      {children}
    </div>
  );
}
