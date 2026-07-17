import type { Variants } from "framer-motion";

/**
 * Shared entrance/reveal variants. Distances and durations are deliberately
 * small (12-24px, <0.5s) so they read as polish rather than a delay, and
 * every consumer should pass `viewport={{ once: true }}` on scroll reveals to
 * avoid re-triggering as the user scrolls back up.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export const staggerChildren = (stagger = 0.08): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  },
});

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Slightly larger travel + soft blur for hero-scale reveals. */
export const blurUp: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Shared ease used for imperative hover/press transitions. */
export const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export const viewportOnce = { once: true, margin: "-80px 0px" } as const;
