"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { Code2, Cloud, Smartphone, Bot, GitBranch, ShieldCheck, Activity } from "lucide-react";

/**
 * Layered, glassmorphism hero visual: a product dashboard flanked by floating
 * status cards, an AI-workflow node, and animated connection lines. Layers
 * drift subtly with the cursor (parallax at different depths) via motion values
 * — no re-renders — and everything is disabled under prefers-reduced-motion.
 */
export function HeroVisual() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Normalised pointer offset from the centre, -0.5..0.5 on each axis.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 120, damping: 20, mass: 0.4 });
  const sy = useSpring(py, { stiffness: 120, damping: 20, mass: 0.4 });

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function reset() {
    px.set(0);
    py.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="relative mx-auto aspect-square w-full max-w-[34rem] [perspective:1600px]"
    >
      {/* Glow behind the composition */}
      <div
        aria-hidden
        className="absolute inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--color-brand)_22%,transparent),transparent)] blur-2xl"
      />

      <ConnectionLines />

      {/* Main dashboard card */}
      <ParallaxLayer sx={sx} sy={sy} depth={16} className="absolute inset-x-[8%] top-[14%]">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="overflow-hidden rounded-2xl border border-border glass-strong shadow-2xl shadow-brand/10"
        >
          <div className="flex items-center gap-1.5 border-b border-border/70 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-danger/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/50" />
            <span className="ml-2 text-[11px] font-medium text-foreground-muted">analytics · production</span>
            <span className="ml-auto flex items-center gap-1 text-[10px] font-semibold text-success">
              <span className="h-1.5 w-1.5 rounded-full bg-success" /> live
            </span>
          </div>
          <div className="p-4">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[11px] text-foreground-muted">Monthly active users</p>
                <p className="font-display text-2xl font-bold text-foreground">48,209</p>
              </div>
              <span className="rounded-full bg-success/10 px-2 py-0.5 text-[11px] font-semibold text-success">
                +12.4%
              </span>
            </div>
            <MiniChart />
          </div>
        </motion.div>
      </ParallaxLayer>

      {/* Floating code card (top-right) */}
      <ParallaxLayer sx={sx} sy={sy} depth={38} className="absolute right-[-2%] top-[2%] hidden w-44 sm:block">
        <FloatCard delay={0.35} float={7}>
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-soft text-brand">
              <Code2 className="h-4 w-4" aria-hidden />
            </span>
            <span className="text-[11px] font-semibold text-foreground">CI pipeline</span>
          </div>
          <div className="mt-3 space-y-1.5 font-mono text-[10px] text-foreground-muted">
            <p><span className="text-success">✓</span> lint &amp; typecheck</p>
            <p><span className="text-success">✓</span> 214 tests passed</p>
            <p><span className="text-brand">➜</span> deploying…</p>
          </div>
        </FloatCard>
      </ParallaxLayer>

      {/* AI workflow node (bottom-left) */}
      <ParallaxLayer sx={sx} sy={sy} depth={44} className="absolute left-[-3%] bottom-[10%] w-48">
        <FloatCard delay={0.5} float={9}>
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <Bot className="h-4 w-4" aria-hidden />
            </span>
            <span className="text-[11px] font-semibold text-foreground">Automation flow</span>
          </div>
          <div className="mt-3 flex items-center gap-1.5">
            {[Activity, GitBranch, Cloud].map((Icon, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-md border border-border bg-surface text-foreground-muted">
                  <Icon className="h-3 w-3" aria-hidden />
                </span>
                {i < 2 ? <span className="h-px w-2 bg-border" /> : null}
              </span>
            ))}
          </div>
        </FloatCard>
      </ParallaxLayer>

      {/* Deployment pill (right-middle) */}
      <ParallaxLayer sx={sx} sy={sy} depth={30} className="absolute right-[-1%] bottom-[26%] hidden w-40 sm:block">
        <FloatCard delay={0.65} float={6}>
          <p className="text-[11px] text-foreground-muted">Uptime (90d)</p>
          <p className="mt-1 flex items-center gap-1.5 font-display text-lg font-bold text-foreground">
            <ShieldCheck className="h-4 w-4 text-success" aria-hidden /> 99.98%
          </p>
        </FloatCard>
      </ParallaxLayer>

      {/* Mobile mockup accent (bottom-right) */}
      <ParallaxLayer sx={sx} sy={sy} depth={22} className="absolute right-[10%] bottom-[-2%] hidden w-24 md:block">
        <FloatCard delay={0.8} float={8} className="!p-2.5">
          <div className="flex items-center gap-1.5">
            <Smartphone className="h-3.5 w-3.5 text-brand" aria-hidden />
            <span className="text-[10px] font-semibold text-foreground">iOS · Android</span>
          </div>
          <div className="mt-2 space-y-1">
            <span className="block h-1.5 w-full rounded-full bg-surface-muted" />
            <span className="block h-1.5 w-3/4 rounded-full bg-surface-muted" />
            <span className="block h-1.5 w-1/2 rounded-full bg-brand/40" />
          </div>
        </FloatCard>
      </ParallaxLayer>
    </div>
  );
}

function ParallaxLayer({
  children,
  sx,
  sy,
  depth,
  className,
}: {
  children: React.ReactNode;
  sx: MotionValue<number>;
  sy: MotionValue<number>;
  depth: number;
  className?: string;
}) {
  const x = useTransform(sx, (v) => v * depth);
  const y = useTransform(sy, (v) => v * depth);
  return (
    <motion.div style={{ x, y }} className={className}>
      {children}
    </motion.div>
  );
}

function FloatCard({
  children,
  delay = 0,
  float = 7,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  float?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className="rounded-xl border border-border glass p-3 shadow-xl shadow-brand/5"
    >
      <motion.div
        animate={prefersReducedMotion ? undefined : { y: [0, -float, 0] }}
        transition={{ duration: 5 + float * 0.2, repeat: Infinity, ease: "easeInOut", delay }}
        className={className}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

const bars = [42, 58, 46, 72, 64, 88, 76];

function MiniChart() {
  return (
    <div className="mt-4 flex h-20 items-end gap-1.5">
      {bars.map((h, i) => (
        <motion.span
          key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 + i * 0.06 }}
          style={{ height: `${h}%` }}
          className="flex-1 origin-bottom rounded-t bg-gradient-to-t from-brand/70 to-accent/70"
        />
      ))}
    </div>
  );
}

function ConnectionLines() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {[
        "M 20 78 C 30 60, 34 52, 46 46",
        "M 82 20 C 70 30, 64 34, 56 40",
        "M 84 62 C 74 56, 68 52, 60 50",
      ].map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeDasharray="2 3"
          opacity={0.4}
          initial={prefersReducedMotion ? undefined : { pathLength: 0 }}
          animate={prefersReducedMotion ? undefined : { pathLength: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 + i * 0.2 }}
        />
      ))}
    </svg>
  );
}
