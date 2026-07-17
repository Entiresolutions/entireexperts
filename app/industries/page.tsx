import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLd } from "@/components/ui/json-ld";
import { webPageSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";
import { industries } from "@/content/industries";

const title = "Industries We Serve";
const description =
  "Software development for healthcare, fintech, e-commerce, logistics, professional services, and education, each with different data and compliance needs.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/industries" });

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: "/industries", title, description })} />
      <Section className="pb-0 pt-10 sm:pt-12">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }]} />
        <SectionHeading as="h1"
          eyebrow="Industries"
          title="Domain context shapes the build as much as the tech stack"
          description="A selection of the industries we work in most, each with its own constraints around data, compliance, and scale."
        />
      </Section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-lg hover:shadow-brand/10"
            >
              <h2 className="flex items-center gap-1.5 text-lg font-semibold text-foreground">
                {industry.name}
                <ArrowUpRight
                  className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                  aria-hidden
                />
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{industry.summary}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
