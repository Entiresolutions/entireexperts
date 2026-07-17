"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section";
import { processSteps } from "@/content/process";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";
import { Button } from "@/components/ui/button";

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our process"
          title="A process built around visible progress, not status meetings"
          description="Six stages, repeated as needed for larger engagements. Full detail on the Our Process page."
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
          {processSteps.map((item) => (
            <motion.div key={item.step} variants={fadeUp} className="rounded-2xl border border-border bg-surface p-6">
              <span className="font-display text-2xl font-bold text-brand/40">{item.step}</span>
              <h3 className="mt-2 font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Button href="/process" variant="outline">
            See the full process
          </Button>
        </div>
      </div>
    </section>
  );
}
