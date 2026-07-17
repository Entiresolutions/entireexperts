import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/ui/json-ld";
import { webPageSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";
import { caseStudies } from "@/content/case-studies";

const title = "Portfolio & Case Studies";
const description =
  "Demonstration case studies showing the kind of software projects EntireXperts builds and how we approach them, from custom software to mobile apps and SaaS platforms.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/portfolio" });

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: "/portfolio", title, description })} />
      <Section className="pb-0 pt-10 sm:pt-12">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Portfolio", path: "/portfolio" }]} />
        <SectionHeading as="h1"
          eyebrow="Illustrative examples"
          title="The kind of projects we take on"
          description="These are demonstration case studies describing typical project shapes and how we'd approach them — not verified client results. Real case studies will replace these as projects launch."
        />
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {caseStudies.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-lg hover:shadow-brand/10"
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="accent">Illustrative example</Badge>
                <Badge variant="neutral">{project.industry}</Badge>
              </div>
              <h2 className="mt-4 flex items-center gap-1.5 text-lg font-semibold text-foreground">
                {project.title}
                <ArrowUpRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden />
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted">{project.summary}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
