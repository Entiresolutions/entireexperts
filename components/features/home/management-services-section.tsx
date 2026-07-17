"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Headset, FileText, ClipboardList, Truck, FileSpreadsheet } from "lucide-react";
import { SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

const managementServices = [
  {
    icon: Phone,
    title: "Call Center Services",
    description: "Inbound and outbound call handling that scales with your call volume.",
    href: "/management-services/call-center-services",
  },
  {
    icon: Headset,
    title: "Customer Support Outsourcing",
    description: "Email, chat, and phone support coverage without an in-house hiring cycle.",
    href: "/management-services/customer-support-outsourcing",
  },
  {
    icon: FileText,
    title: "Medical Billing Services",
    description: "Claims, denial follow-up, and payment posting handled end-to-end.",
    href: "/management-services/medical-billing-services",
  },
  {
    icon: ClipboardList,
    title: "DME Billing Services",
    description: "Documentation tracking and claims support for equipment suppliers.",
    href: "/management-services/dme-billing-services",
  },
  {
    icon: Truck,
    title: "Trucking & Dispatch Services",
    description: "Load sourcing, booking, and driver coordination that keeps trucks moving.",
    href: "/management-services/trucking-dispatch-services",
  },
  {
    icon: FileSpreadsheet,
    title: "Back-Office & Data Entry",
    description: "The repetitive administrative work, handled accurately and on schedule.",
    href: "/management-services/back-office-data-entry-services",
  },
];

export function ManagementServicesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Management services"
            title="Outsourced operations support, beyond software"
            description="A separate line from our software development work: day-to-day business operations run as an extension of your team, so you get reliable execution without the overhead of hiring and managing it in-house."
          />
          <Button href="/management-services" variant="outline" className="shrink-0">
            View all management services
          </Button>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren()}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {managementServices.map((service) => (
            <motion.div key={service.href} variants={fadeUp}>
              <SpotlightCard className="h-full rounded-2xl">
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-brand text-white shadow-md shadow-accent/20 transition-transform duration-300 group-hover:scale-110">
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
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
