"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { staggerChildren, fadeUp, blurUp } from "@/lib/motion";
import { HeroVisual } from "@/components/features/home/hero-visual";
import { primaryCta, secondaryCta } from "@/config/site";

const trustPoints = ["Fixed-scope or dedicated team", "Weekly working demos", "You own the code, always"];
const stack = ["TypeScript", "Next.js", "React Native", "Node.js", "Python", "AWS"];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Premium layered background: gradient mesh + grid + aurora glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_-10%,var(--color-brand-soft)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-grid mask-b-fade opacity-[0.35] dark:opacity-25" />
        <div className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-brand/15 blur-[120px] animate-aurora dark:bg-brand/20" />
        <div
          className="absolute -right-40 top-40 h-[26rem] w-[26rem] rounded-full bg-accent/15 blur-[120px] animate-aurora dark:bg-accent/20"
          style={{ animationDelay: "-8s" }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:pb-28 lg:pt-24">
        <motion.div initial="hidden" animate="visible" variants={staggerChildren(0.12)}>
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-xs font-semibold text-brand-strong backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand" aria-hidden />
            Remote-first software delivery partner
          </motion.p>

          <motion.h1
            variants={blurUp}
            className="mt-6 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4rem]"
          >
            Ship the{" "}
            <span className="relative whitespace-nowrap text-gradient-brand text-gradient-brand-animated">
              custom software
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1.5 left-0 h-2.5 w-full text-brand/40"
              >
                <motion.path
                  d="M2 8 C 60 2, 120 2, 160 6 S 260 10, 298 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.9, ease: "easeInOut", delay: 0.6 }}
                />
              </svg>
            </span>{" "}
            your roadmap keeps pushing back.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted">
            EntireXperts plans, builds, and ships custom software, web platforms, and mobile apps for teams that
            need senior engineering capacity now — not a six-month hiring process. Honest estimates, weekly demos,
            and code you fully own.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Button href={primaryCta.href} size="lg" className="group">
                {primaryCta.label}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden
                />
              </Button>
            </Magnetic>
            <Button
              href={secondaryCta.href}
              variant="outline"
              size="lg"
              className="group backdrop-blur"
            >
              Explore Our Work
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden
              />
            </Button>
          </motion.div>

          <motion.ul variants={fadeUp} className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-foreground-muted">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success/10 text-success">
                  <Check className="h-3 w-3" aria-hidden />
                </span>
                {point}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-10 border-t border-border/70 pt-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-foreground-muted/70">
              Production-grade stack
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {stack.map((tech, i) => (
                <motion.li
                  key={tech}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.06, duration: 0.4 }}
                  className="rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-foreground-muted"
                >
                  {tech}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <div className="relative">
          <HeroVisual />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="pointer-events-none absolute inset-x-0 bottom-4 hidden justify-center lg:flex"
      >
        <Link
          href="#services"
          aria-label="Scroll to services"
          className="pointer-events-auto flex h-9 w-6 items-start justify-center rounded-full border border-border bg-surface/60 p-1.5 backdrop-blur"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-brand"
          />
        </Link>
        <span className="sr-only">
          <ChevronDown aria-hidden />
        </span>
      </motion.div>
    </section>
  );
}
