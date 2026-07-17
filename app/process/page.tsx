import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLd } from "@/components/ui/json-ld";
import { webPageSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";
import { processSteps } from "@/content/process";
import { Button } from "@/components/ui/button";

const title = "Our Software Development Process";
const description =
  "How EntireXperts plans, builds, and ships software: discovery, design, iterative development, QA, launch, and ongoing support.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/process" });

export default function ProcessPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: "/process", title, description })} />
      <Section className="pb-0 pt-10 sm:pt-12">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Our Process", path: "/process" }]} />
        <SectionHeading as="h1"
          eyebrow="Our process"
          title="A process built for visible progress, not status meetings"
          description="Six stages, each producing something concrete you can review — not a milestone chart you have to trust."
        />
      </Section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {processSteps.map((item) => (
            <div key={item.step} className="rounded-2xl border border-border bg-surface p-7">
              <span className="font-display text-3xl font-bold text-brand/40">{item.step}</span>
              <h2 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-brand-soft p-8 text-center sm:p-10">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Want to see how this applies to your project?
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-foreground-muted">
            Discovery calls are free and typically take 30 minutes. We’ll tell you honestly if we’re a fit before
            anything is scoped.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button href="/contact" size="lg">
              Book a free consultation
            </Button>
            <Button href="/quote" variant="outline" size="lg">
              Request a quote
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
