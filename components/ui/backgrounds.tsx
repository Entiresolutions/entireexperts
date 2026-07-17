import { cn } from "@/lib/utils";

/**
 * Decorative, theme-aware background layers. All are purely presentational
 * (aria-hidden, pointer-events-none) and render as Server Components so they
 * add no client JS. Colours are driven by CSS variables so light/dark both
 * look correct, and the radial masks keep every layer from fighting text.
 */

export function GridBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 bg-grid mask-radial-faded opacity-[0.4] dark:opacity-[0.25]",
        className
      )}
    />
  );
}

export function DotBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 bg-dots mask-radial-faded opacity-60 dark:opacity-40",
        className
      )}
    />
  );
}

/**
 * Soft blurred colour orbs for section depth. `animate` opts into the slow
 * aurora drift (disabled automatically under prefers-reduced-motion).
 */
export function GlowField({
  className,
  animate = false,
}: {
  className?: string;
  animate?: boolean;
}) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <div
        className={cn(
          "absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand/20 blur-3xl dark:bg-brand/25",
          animate && "animate-aurora"
        )}
      />
      <div
        className={cn(
          "absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl dark:bg-accent/20",
          animate && "animate-aurora"
        )}
        style={animate ? { animationDelay: "-6s" } : undefined}
      />
    </div>
  );
}

/** Thin gradient hairline used as a premium section divider. */
export function GradientRule({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "h-px w-full bg-gradient-to-r from-transparent via-border to-transparent",
        className
      )}
    />
  );
}
