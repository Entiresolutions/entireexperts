"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { caseStudies } from "@/content/case-studies";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

export function FeaturedProjects() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Illustrative examples"
            title="The kind of projects we take on"
            description="These are demonstration case studies describing typical project shapes and how we'd approach them — not verified client results."
          />
          <Button href="/portfolio" variant="outline" className="shrink-0">
            View portfolio
          </Button>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren()}
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {featured.map((project, i) => (
            <motion.div key={project.slug} variants={fadeUp}>
              <SpotlightCard className="h-full rounded-2xl">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10"
                >
                  {/* Abstract project "cover" — gradient + grid, no fake screenshots */}
                  <div className="relative h-32 overflow-hidden border-b border-border">
                    <div
                      className={
                        "absolute inset-0 transition-transform duration-500 group-hover:scale-105 " +
                        (i % 3 === 0
                          ? "bg-gradient-to-br from-brand/25 to-accent/15"
                          : i % 3 === 1
                            ? "bg-gradient-to-br from-accent/25 to-brand/15"
                            : "bg-gradient-to-br from-brand/20 via-accent/15 to-brand/20")
                      }
                    />
                    <div className="absolute inset-0 bg-grid opacity-40 [mask-image:linear-gradient(to_bottom,#000,transparent)]" />
                    <span className="absolute left-4 top-4">
                      <Badge variant="accent">Illustrative example</Badge>
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted">{project.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      Read the case study
                      <ArrowUpRight
                        className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                        aria-hidden
                      />
                    </span>
                  </div>
                </Link>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
