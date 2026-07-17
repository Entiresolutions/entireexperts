import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLd } from "@/components/ui/json-ld";
import { webPageSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";
import { services } from "@/content/services";

const title = "Software Development Services";
const description =
  "Every service Entire Expert offers, from custom software and web application development to AI automation, cloud infrastructure, and digital marketing.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/services" });

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: "/services", title, description })} />
      <Section className="pb-0 pt-10 sm:pt-12">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />
        <SectionHeading as="h1"
          eyebrow="Services"
          title="Eighteen disciplines, each led by engineers who specialize in it"
          description="Browse every service we offer below, or start with a consultation if you're not sure which one fits your project."
        />
      </Section>

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-lg hover:shadow-brand/10"
            >
              <h2 className="flex items-center gap-1.5 text-base font-semibold text-foreground">
                {service.name}
                <ArrowUpRight
                  className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                  aria-hidden
                />
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{service.metaDescription}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
