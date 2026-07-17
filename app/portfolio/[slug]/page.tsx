import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";
import { caseStudies, getCaseStudyBySlug } from "@/content/case-studies";
import { getServiceBySlug } from "@/content/services";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return buildMetadata({ title: study.title, description: study.summary, path: `/portfolio/${slug}` });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const relatedServices = study.serviceSlugs
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: study.title, path: `/portfolio/${slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: `/portfolio/${slug}`, title: study.title, description: study.summary }),
          breadcrumbSchema(breadcrumbItems),
        ]}
      />
      <Section className="pb-0 pt-10 sm:pt-12">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent">Illustrative example</Badge>
          <Badge variant="neutral">{study.industry}</Badge>
        </div>
        <SectionHeading as="h1" title={study.title} description={study.summary} className="mt-4" />
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">The challenge</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{study.challenge}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">The approach</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{study.solution}</p>
          </div>
        </div>
      </Section>

      <Section className="border-y border-border bg-surface">
        <h2 className="font-display text-2xl font-semibold text-foreground">How we’d run this project</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {study.process.map((step, index) => (
            <div key={step} className="flex gap-3 rounded-xl border border-border bg-background p-5">
              <span className="font-display text-lg font-bold text-brand/50">{index + 1}</span>
              <p className="text-sm leading-relaxed text-foreground-muted">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">Features delivered</h2>
            <ul className="mt-5 space-y-3">
              {study.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">Technology stack</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {study.techStack.map((tech) => (
                <span key={tech} className="rounded-full bg-brand-soft px-3.5 py-1.5 text-sm font-medium text-brand-strong">
                  {tech}
                </span>
              ))}
            </div>

            <h2 className="mt-8 font-display text-2xl font-semibold text-foreground">Outcome</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{study.outcome}</p>
          </div>
        </div>
      </Section>

      {relatedServices.length > 0 ? (
        <Section className="border-t border-border bg-surface">
          <h2 className="font-display text-2xl font-semibold text-foreground">Services used</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {relatedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-2xl border border-border bg-background p-5 transition-colors hover:border-brand"
              >
                <h3 className="flex items-center gap-1.5 font-semibold text-foreground">
                  {service.name}
                  <ArrowUpRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden />
                </h3>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      <Section className="text-center">
        <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">Have a similar project in mind?</h2>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button href="/quote" size="lg">Get a project estimate</Button>
          <Button href="/contact" variant="outline" size="lg">Book a free consultation</Button>
        </div>
      </Section>
    </>
  );
}
