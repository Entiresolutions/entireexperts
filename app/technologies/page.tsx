import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLd } from "@/components/ui/json-ld";
import { webPageSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";
import { technologyCategories } from "@/content/technologies";
import { Button } from "@/components/ui/button";

const title = "Technologies We Use";
const description =
  "The frontend, backend, mobile, cloud, and AI technologies EntireXperts builds with, and how we choose the right stack for each project.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/technologies" });

export default function TechnologiesPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: "/technologies", title, description })} />
      <Section className="pb-0 pt-10 sm:pt-12">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Technologies", path: "/technologies" }]} />
        <SectionHeading as="h1"
          eyebrow="Technologies & platforms"
          title="A consistent core stack, chosen deliberately per project"
          description="We don't default to the same framework regardless of the job. Here's what we build with most, and where each one fits."
        />
      </Section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologyCategories.map((category) => (
            <div key={category.category} className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-lg font-semibold text-foreground">{category.category}</h2>
              <p className="mt-1.5 text-sm text-foreground-muted">{category.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li key={item} className="rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand-strong">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <h2 className="font-display text-2xl font-semibold text-foreground">Not sure which stack fits your project?</h2>
          <p className="mx-auto mt-2 max-w-lg text-foreground-muted">
            We’ll recommend one during discovery based on your team’s existing skills, scaling needs, and budget.
          </p>
          <Button href="/contact" size="lg" className="mt-6">
            Talk to a software expert
          </Button>
        </div>
      </Section>
    </>
  );
}
