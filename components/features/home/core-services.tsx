"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Globe, Smartphone, Boxes, Bot, ShoppingCart, Palette, Cloud, Wrench } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Purpose-built systems for workflows off-the-shelf tools can't handle.",
    href: "/services/custom-software-development",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Fast, accessible web apps built on Next.js and modern React.",
    href: "/services/web-application-development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native iOS and Android, or one Flutter codebase for both.",
    href: "/services/mobile-app-development",
  },
  {
    icon: Boxes,
    title: "SaaS Product Development",
    description: "From first user to multi-tenant billing, built to scale with demand.",
    href: "/services/saas-product-development",
  },
  {
    icon: Bot,
    title: "AI & Automation Solutions",
    description: "Automate the repetitive work slowing your team down.",
    href: "/services/ai-automation-solutions",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description: "Storefronts and checkout flows tuned for conversion, not just launch.",
    href: "/services/ecommerce-development",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Interfaces designed around how your users actually work.",
    href: "/services/ui-ux-design",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Infrastructure that scales predictably and fails gracefully.",
    href: "/services/cloud-solutions",
  },
  {
    icon: Wrench,
    title: "Software Maintenance & Support",
    description: "Keep an existing system secure, current, and reliably online.",
    href: "/services/software-maintenance-support",
  },
];

export function CoreServices() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What we build"
            title="Engineering capacity for the product you're trying to ship"
            description="Nine core disciplines, each led by engineers who specialize in it — not generalists spread thin across every stack."
          />
          <Button href="/services" variant="outline" className="shrink-0">
            View all services
          </Button>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren()}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.href} variants={fadeUp}>
              <Link
                href={service.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-lg hover:shadow-brand/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <service.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 flex items-center gap-1.5 text-base font-semibold text-foreground">
                  {service.title}
                  <ArrowUpRight
                    className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                    aria-hidden
                  />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{service.description}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
