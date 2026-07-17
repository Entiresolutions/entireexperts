"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, fadeIn, viewportOnce } from "@/lib/motion";
import { primaryCta, secondaryCta, consultationCta } from "@/config/site";

const trustPoints = ["Fixed-scope or dedicated team", "Weekly working demos", "You own the code, always"];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,var(--color-brand-soft)_0%,transparent_70%)]"
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center lg:py-28">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <p className="inline-flex items-center rounded-full bg-brand-soft px-3.5 py-1.5 text-xs font-semibold text-brand-strong">
            Remote-first software delivery partner
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            Ship the product your roadmap keeps pushing back.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted">
            Entire Expert plans, builds, and ships custom software, web platforms, and mobile apps for teams
            that need senior engineering capacity now — not a six-month hiring process. You get a team that
            estimates honestly, demos weekly, and hands over code you fully own.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="outline" size="lg">
              {secondaryCta.label}
            </Button>
          </div>
          <Button href={consultationCta.href} variant="ghost" size="sm" className="mt-3">
            {consultationCta.label} →
          </Button>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-foreground-muted">
                <Check className="h-4 w-4 text-brand" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <HeroMockup />
        </motion.div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-brand/10"
      >
        <div className="flex items-center gap-1.5 border-b border-border bg-surface-muted px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-danger/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
          <span className="ml-3 text-xs text-foreground-muted">product-dashboard.tsx</span>
        </div>
        <div className="space-y-2.5 p-6 font-mono text-xs leading-relaxed text-foreground-muted">
          <p><span className="text-brand">export</span> <span className="text-accent">function</span> Dashboard() {"{"}</p>
          <p className="pl-4">const {"{"} revenue, users {"}"} = useMetrics()</p>
          <p className="pl-4">return &lt;RealtimePanel data={"{"}revenue{"}"} /&gt;</p>
          <p>{"}"}</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute -right-4 -top-6 hidden w-44 rounded-xl border border-border bg-surface p-4 shadow-lg sm:block"
      >
        <p className="text-xs text-foreground-muted">Deployment</p>
        <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-success">
          <span className="h-1.5 w-1.5 rounded-full bg-success" /> Live in production
        </p>
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute -bottom-6 -left-4 w-40 rounded-xl border border-border bg-surface p-4 shadow-lg"
      >
        <p className="text-xs text-foreground-muted">Sprint velocity</p>
        <p className="mt-1 text-sm font-semibold text-foreground">On track, week 4/6</p>
      </motion.div>
    </div>
  );
}
