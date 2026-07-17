"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Slim reading-progress bar pinned under the header. Driven entirely by a
 * motion value (scaleX), so scrolling never triggers React re-renders. The
 * spring is skipped when the user prefers reduced motion via MotionConfig.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-brand via-accent to-brand"
    />
  );
}
