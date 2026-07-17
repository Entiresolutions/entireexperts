"use client";

import { motion } from "framer-motion";
import { Workflow, MessageSquareText, FileSearch, Zap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { GridBackdrop } from "@/components/ui/backgrounds";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

const capabilities = [
  {
    icon: MessageSquareText,
    title: "Customer-facing chatbots",
    description: "Support and lead-qualification assistants trained on your actual documentation and FAQs, with a clear handoff to a human when a question needs one.",
  },
  {
    icon: Workflow,
    title: "Internal process automation",
    description: "Replacing manual data entry, report generation, and multi-step approvals with automated workflows that still leave an audit trail.",
  },
  {
    icon: FileSearch,
    title: "Document and data processing",
    description: "Extracting structured data from invoices, forms, and unstructured text so it's usable in the systems you already run.",
  },
  {
    icon: Zap,
    title: "AI features inside your product",
    description: "Summarization, search, and recommendation features added to an existing product, scoped to what actually improves the user's workflow.",
  },
];

export function AiCapabilities() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <GridBackdrop className="mask-b-fade" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="AI & automation"
          title="AI applied to a specific, named bottleneck"
          description="Every automation project starts by identifying the manual task it replaces. If a clear bottleneck isn't there, we'll say so instead of proposing AI for its own sake."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren()}
          className="mt-12 grid gap-5 sm:grid-cols-2"
        >
          {capabilities.map((capability) => (
            <motion.div key={capability.title} variants={fadeUp}>
              <SpotlightCard className="h-full rounded-2xl">
                <div className="group flex h-full gap-4 rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-accent text-white shadow-md shadow-brand/20 transition-transform duration-300 group-hover:scale-110">
                    <capability.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{capability.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">{capability.description}</p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Button href="/services/ai-automation-solutions" variant="outline">
            Explore AI & automation services
          </Button>
        </div>
      </div>
    </section>
  );
}
