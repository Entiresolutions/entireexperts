"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section";
import { testimonials } from "@/content/company";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow="Client feedback" title="What it's like to work with us" align="center" className="mx-auto" />

        <div className="mt-12">
          {testimonials.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border p-10 text-center">
              <Quote className="mx-auto h-8 w-8 text-brand" aria-hidden />
              <p className="mt-4 text-foreground-muted">
                We’re keeping this section empty until we can publish real, verified client testimonials rather than
                placeholder quotes. Check back as projects launch — or ask us for references directly during a
                consultation.
              </p>
            </div>
          ) : (
            <div className="relative rounded-2xl border border-border bg-background p-8 text-center sm:p-10">
              <Quote className="mx-auto h-8 w-8 text-brand" aria-hidden />
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="mt-4 text-lg leading-relaxed text-foreground">“{testimonials[index]!.quote}”</p>
                  <footer className="mt-4 text-sm text-foreground-muted">
                    {testimonials[index]!.author}, {testimonials[index]!.role} at {testimonials[index]!.company}
                  </footer>
                </motion.blockquote>
              </AnimatePresence>

              {testimonials.length > 1 ? (
                <div className="mt-6 flex justify-center gap-3">
                  <button
                    type="button"
                    aria-label="Previous testimonial"
                    onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-brand hover:text-brand"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden />
                  </button>
                  <button
                    type="button"
                    aria-label="Next testimonial"
                    onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-brand hover:text-brand"
                  >
                    <ChevronRight className="h-4 w-4" aria-hidden />
                  </button>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
