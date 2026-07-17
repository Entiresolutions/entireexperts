import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLd } from "@/components/ui/json-ld";
import { webPageSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";
import { QuoteForm } from "@/components/features/quote/quote-form";

const title = "Request a Quote";
const description =
  "Get a project estimate from Entire Expert. Tell us about the service you need, your budget, and timeline, and we'll follow up within one business day.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/quote" });

export default function QuotePage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: "/quote", title, description })} />
      <Section className="pb-0 pt-10 sm:pt-12">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Request a Quote", path: "/quote" }]} />
        <SectionHeading as="h1"
          eyebrow="Get an estimate"
          title="Get a project estimate"
          description="The more detail you share, the more accurate the first estimate — but a rough idea is a fine place to start too."
        />
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl">
          <QuoteForm />
        </div>
      </Section>
    </>
  );
}
