import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";
import { industries, getIndustryBySlug } from "@/content/industries";
import { getServiceBySlug } from "@/content/services";
import { caseStudies } from "@/content/case-studies";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return buildMetadata({ title: industry.seoTitle, description: industry.metaDescription, path: `/industries/${industry.slug}` });
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const relevantServices = industry.relevantServiceSlugs
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  const relatedCaseStudies = caseStudies.filter((study) => study.industry === industry.name);

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: industry.name, path: `/industries/${industry.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: `/industries/${industry.slug}`, title: industry.seoTitle, description: industry.metaDescription }),
          breadcrumbSchema(breadcrumbItems),
        ]}
      />
      <Section className="pb-0 pt-10 sm:pt-12">
        <Breadcrumbs items={breadcrumbItems} />
        <SectionHeading as="h1" eyebrow="Industry" title={`Software development for ${industry.name}`} description={industry.summary} />
      </Section>

      <Section>
        <h2 className="font-display text-2xl font-semibold text-foreground">Common challenges we see</h2>
        <ul className="mt-5 space-y-3">
          {industry.challenges.map((challenge) => (
            <li key={challenge} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
              {challenge}
            </li>
          ))}
        </ul>
      </Section>

      {relevantServices.length > 0 ? (
        <Section className="border-y border-border bg-surface">
          <h2 className="font-display text-2xl font-semibold text-foreground">Relevant services</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {relevantServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-2xl border border-border bg-background p-5 transition-colors hover:border-brand"
              >
                <h3 className="flex items-center gap-1.5 font-semibold text-foreground">
                  {service.name}
                  <ArrowUpRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden />
                </h3>
                <p className="mt-2 text-sm text-foreground-muted">{service.metaDescription}</p>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      {relatedCaseStudies.length > 0 ? (
        <Section>
          <h2 className="font-display text-2xl font-semibold text-foreground">Related examples</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {relatedCaseStudies.map((study) => (
              <Link key={study.slug} href={`/portfolio/${study.slug}`} className="rounded-2xl border border-border bg-surface p-6 hover:border-brand">
                <h3 className="font-semibold text-foreground">{study.title}</h3>
                <p className="mt-2 text-sm text-foreground-muted">{study.summary}</p>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      <Section className="text-center">
        <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
          Building for {industry.name.toLowerCase()}?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-foreground-muted">
          Tell us about your project and we’ll follow up within one business day.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button href="/quote" size="lg">Get a project estimate</Button>
          <Button href="/contact" variant="outline" size="lg">Book a free consultation</Button>
        </div>
      </Section>
    </>
  );
}
