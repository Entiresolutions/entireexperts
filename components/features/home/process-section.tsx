"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SectionHeading } from "@/components/ui/section";
import { processSteps } from "@/content/process";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";
import { Button } from "@/components/ui/button";

export function ProcessSection() {
  const railRef = useRef<HTMLOListElement>(null);
  // Fill the timeline as the list scrolls through the middle of the viewport.
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 65%", "end 55%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 30, mass: 0.4 });

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our process"
          title="A process built around visible progress, not status meetings"
          description="Six stages, repeated as needed for larger engagements. Full detail on the Our Process page."
          align="center"
          className="mx-auto"
        />

        <motion.ol
          ref={railRef}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren(0.12)}
          className="relative mx-auto mt-14 max-w-3xl"
        >
          {/* Timeline rail + progressive fill */}
          <div aria-hidden className="absolute left-[19px] top-2 bottom-2 w-px bg-border sm:left-[27px]">
            <motion.div
              style={{ scaleY: fill }}
              className="h-full w-full origin-top bg-gradient-to-b from-brand to-accent"
            />
          </div>

          {processSteps.map((item) => (
            <motion.li key={item.step} variants={fadeUp} className="relative flex gap-5 pb-9 last:pb-0 sm:gap-7">
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface font-display text-sm font-bold text-brand shadow-sm sm:h-14 sm:w-14 sm:text-base">
                {item.step}
              </span>
              <div className="pt-1 sm:pt-2.5">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>

        <div className="mt-12 flex justify-center">
          <Button href="/process" variant="outline">
            See the full process
          </Button>
        </div>
      </div>
    </section>
  );
}
