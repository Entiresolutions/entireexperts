import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLd } from "@/components/ui/json-ld";
import { webPageSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";
import { managementServices } from "@/content/management-services";

const title = "Management Services";
const description =
  "Outsourced business operations support from EntireXperts — call center, customer support, medical billing, DME billing, trucking dispatch, and back-office services.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/management-services" });

export default function ManagementServicesPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: "/management-services", title, description })} />
      <Section className="pb-0 pt-10 sm:pt-12">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Management Services", path: "/management-services" }]} />
        <SectionHeading
          as="h1"
          eyebrow="Management services"
          title="Outsourced operations support, run as an extension of your team"
          description="Six managed-operations services for teams that need reliable day-to-day execution without the overhead of building it in-house. This is a separate line from our software development work — browse Services if you're looking to build a product instead."
        />
      </Section>

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {managementServices.map((service) => (
            <Link
              key={service.slug}
              href={`/management-services/${service.slug}`}
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
