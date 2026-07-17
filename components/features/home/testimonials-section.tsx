"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section";
import { testimonials } from "@/content/company";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 7000;

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const count = testimonials.length;

  const go = useCallback((next: number) => setIndex(((next % count) + count) % count), [count]);

  // Auto-rotate, paused on hover/focus or when reduced motion is preferred.
  useEffect(() => {
    if (count <= 1 || paused || prefersReducedMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [count, paused, prefersReducedMotion]);

  return (
    <section className="relative border-y border-border bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow="Client feedback" title="What it's like to work with us" align="center" className="mx-auto" />

        <div className="mt-12">
          {count === 0 ? (
            <div className="relative overflow-hidden rounded-3xl border border-dashed border-border bg-background p-10 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-accent text-white shadow-lg shadow-brand/20">
                <Quote className="h-6 w-6" aria-hidden />
              </span>
              <p className="mx-auto mt-5 max-w-md text-foreground-muted">
                We&rsquo;re keeping this section empty until we can publish real, verified client testimonials rather
                than placeholder quotes. Ask us for references directly during a consultation.
              </p>
            </div>
          ) : (
            <div
              className="relative rounded-3xl border border-border bg-background p-8 text-center shadow-sm sm:p-10"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocusCapture={() => setPaused(true)}
              onBlurCapture={() => setPaused(false)}
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-accent text-white shadow-lg shadow-brand/20">
                <Quote className="h-5 w-5" aria-hidden />
              </span>

              <div className="relative mt-6 min-h-[9rem]">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={index}
                    drag={count > 1 ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.18}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -60) go(index + 1);
                      else if (info.offset.x > 60) go(index - 1);
                    }}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="cursor-grab active:cursor-grabbing"
                  >
                    <p className="text-lg leading-relaxed text-foreground">&ldquo;{testimonials[index]!.quote}&rdquo;</p>
                    <footer className="mt-4 text-sm text-foreground-muted">
                      {testimonials[index]!.author}, {testimonials[index]!.role} at {testimonials[index]!.company}
                    </footer>
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              {count > 1 ? (
                <div className="mt-8 flex items-center justify-center gap-4">
                  <button
                    type="button"
                    aria-label="Previous testimonial"
                    onClick={() => go(index - 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-brand hover:text-brand"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden />
                  </button>

                  <div className="flex items-center gap-2" role="tablist" aria-label="Select testimonial">
                    {testimonials.map((t, i) => (
                      <button
                        key={t.author}
                        type="button"
                        role="tab"
                        aria-selected={i === index}
                        aria-label={`Testimonial ${i + 1}`}
                        onClick={() => setIndex(i)}
                        className={cn(
                          "h-1.5 rounded-full transition-all duration-300",
                          i === index ? "w-6 bg-brand" : "w-1.5 bg-border hover:bg-foreground-muted"
                        )}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    aria-label="Next testimonial"
                    onClick={() => go(index + 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-brand hover:text-brand"
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
