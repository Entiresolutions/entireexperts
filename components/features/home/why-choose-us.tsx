"use client";

import { motion } from "framer-motion";
import { Gauge, GitBranch, ShieldCheck, MessagesSquare, Layers, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/section";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { GlowField } from "@/components/ui/backgrounds";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

const reasons = [
  {
    icon: MessagesSquare,
    title: "Direct access to the engineers, not a relay",
    description:
      "You talk to the people writing the code, in a shared channel, not through an account manager relaying updates a day late.",
  },
  {
    icon: GitBranch,
    title: "Weekly demos of working software",
    description:
      "Every iteration ends with something you can click through, not a status report describing progress you can't see.",
  },
  {
    icon: Gauge,
    title: "Estimates that hold up",
    description:
      "Scope is broken down before a number is quoted, so the estimate you get at kickoff is the one you pay at delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Security and code quality built in, not bolted on",
    description:
      "Input validation, dependency audits, and code review are part of every sprint, not a pass added before launch.",
  },
  {
    icon: Layers,
    title: "Senior engineers on unfamiliar codebases",
    description:
      "We regularly join projects mid-flight — auditing what exists, fixing what's broken, and documenting what we change.",
  },
  {
    icon: Clock,
    title: "Built to hand off cleanly",
    description:
      "Documentation and infrastructure access are part of delivery from day one, so nothing depends on us staying forever.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface py-16 sm:py-20 lg:py-24">
      <GlowField animate />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why teams choose us"
          title="Built for teams who've been burned by vague scopes before"
          align="center"
          className="mx-auto"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren()}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason) => (
            <motion.div key={reason.title} variants={fadeUp}>
              <SpotlightCard className="h-full rounded-2xl">
                <div className="group h-full rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-accent text-white shadow-md shadow-brand/20 transition-transform duration-300 group-hover:scale-110">
                    <reason.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-semibold text-foreground">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{reason.description}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
