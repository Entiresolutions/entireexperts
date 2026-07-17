"use client";

import { motion } from "framer-motion";
import { Workflow, MessageSquareText, FileSearch, Zap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
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
    <section className="py-16 sm:py-20 lg:py-24">
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
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          {capabilities.map((capability) => (
            <motion.div key={capability.title} variants={fadeUp} className="flex gap-4 rounded-2xl border border-border bg-surface p-6">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <capability.icon className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-semibold text-foreground">{capability.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">{capability.description}</p>
              </div>
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
