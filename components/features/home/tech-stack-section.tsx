"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { technologyCategories } from "@/content/technologies";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";
import { Button } from "@/components/ui/button";

export function TechStackSection() {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Technologies & platforms"
            title="We pick the stack to fit the project, not the other way around"
            description="A consistent core toolset, applied deliberately rather than defaulting to the same framework regardless of what the project actually needs."
          />
          <Button href="/technologies" variant="outline" className="shrink-0">
            See full stack
          </Button>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren()}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {technologyCategories.map((category) => (
            <motion.div key={category.category} variants={fadeUp}>
              <SpotlightCard className="h-full rounded-2xl">
                <div className="group h-full rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5">
                  <h3 className="flex items-center gap-2 font-semibold text-foreground">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-brand to-accent" aria-hidden />
                    {category.category}
                  </h3>
                  <p className="mt-1.5 text-sm text-foreground-muted">{category.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-transparent bg-brand-soft px-3 py-1 text-xs font-medium text-brand-strong transition-colors hover:border-brand/30"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
