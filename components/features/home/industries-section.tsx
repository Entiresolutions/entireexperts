"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section";
import { industries } from "@/content/industries";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";
import { Button } from "@/components/ui/button";

export function IndustriesSection() {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Industries"
            title="Domain context matters as much as the code"
            description="A selection of the industries we work in most, each with different constraints around data, compliance, and scale."
          />
          <Button href="/industries" variant="outline" className="shrink-0">
            All industries
          </Button>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren()}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry) => (
            <motion.div key={industry.slug} variants={fadeUp}>
              <Link
                href={`/industries/${industry.slug}`}
                className="block h-full rounded-2xl border border-border bg-background p-6 transition-colors duration-200 hover:border-brand"
              >
                <h3 className="font-semibold text-foreground">{industry.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{industry.summary}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
