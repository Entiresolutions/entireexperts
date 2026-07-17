import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";
import { breadcrumbSchema, faqPageSchema, serviceSchema, webPageSchema } from "@/lib/seo/schema";
import type { ServiceContent } from "@/content/services/types";

export function ServicePageTemplate({
  service,
  relatedServices,
  basePath = "/services",
  indexLabel = "Services",
  techSectionLabel = "Technologies we use",
  ctaHeading,
  secondaryCtaLabel = "Talk to a software expert",
}: {
  service: ServiceContent;
  relatedServices: ServiceContent[];
  basePath?: string;
  indexLabel?: string;
  techSectionLabel?: string;
  ctaHeading?: string;
  secondaryCtaLabel?: string;
}) {
  const path = `${basePath}/${service.slug}`;
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: indexLabel, path: basePath },
    { name: service.name, path },
  ];

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path, title: service.seoTitle, description: service.metaDescription }),
          serviceSchema({ name: service.name, description: service.metaDescription, path }),
          faqPageSchema(service.faqs),
          breadcrumbSchema(breadcrumbItems),
        ]}
      />

      <Section className="pb-0 pt-10 sm:pt-12">
        <Breadcrumbs items={breadcrumbItems} />
        <SectionHeading as="h1" eyebrow="Service" title={service.h1} description={service.overview} />
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/quote" size="lg">
            Get a project estimate
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Book a free consultation
          </Button>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">Business problems this solves</h2>
            <ul className="mt-5 space-y-3">
              {service.problems.map((problem) => (
                <li key={problem} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  {problem}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">Core deliverables</h2>
            <ul className="mt-5 space-y-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="border-y border-border bg-surface">
        <h2 className="font-display text-2xl font-semibold text-foreground">Key features</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {service.features.map((feature) => (
            <div key={feature} className="rounded-xl border border-border bg-background p-5 text-sm text-foreground-muted">
              {feature}
            </div>
          ))}
        </div>

        <h2 className="mt-12 font-display text-2xl font-semibold text-foreground">{techSectionLabel}</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {service.technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-brand-soft px-3.5 py-1.5 text-sm font-medium text-brand-strong">
              {tech}
            </span>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-2xl font-semibold text-foreground">Our process for this service</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {service.process.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-border bg-surface p-6">
              <span className="text-sm font-semibold text-brand">Step {index + 1}</span>
              <h3 className="mt-1.5 font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-y border-border bg-surface">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">Industries we apply this in</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.industries.map((industry) => (
                <span key={industry} className="rounded-full border border-border px-3.5 py-1.5 text-sm text-foreground-muted">
                  {industry}
                </span>
              ))}
            </div>
            <Link href="/industries" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">
              See all industries <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">Benefits</h2>
            <ul className="mt-5 space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-2xl font-semibold text-foreground">Frequently asked questions</h2>
        <div className="mt-6 max-w-3xl">
          <Accordion items={service.faqs} />
        </div>
      </Section>

      {relatedServices.length > 0 ? (
        <Section className="border-t border-border bg-surface">
          <h2 className="font-display text-2xl font-semibold text-foreground">Related services</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`${basePath}/${related.slug}`}
                className="group rounded-2xl border border-border bg-background p-5 transition-colors hover:border-brand"
              >
                <h3 className="flex items-center gap-1.5 font-semibold text-foreground">
                  {related.name}
                  <ArrowUpRight
                    className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                    aria-hidden
                  />
                </h3>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      <Section className="text-center">
        <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
          {ctaHeading ?? `Ready to talk through your ${service.name.toLowerCase()} project?`}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-foreground-muted">
          Tell us about your requirements and we’ll follow up within one business day with next steps.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button href="/quote" size="lg">
            Get a project estimate
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            {secondaryCtaLabel}
          </Button>
        </div>
      </Section>
    </>
  );
}
