import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLd } from "@/components/ui/json-ld";
import { webPageSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";
import { Button } from "@/components/ui/button";

const title = "About EntireXperts";
const description =
  "EntireXperts is a remote-first software development company built around direct communication, weekly demos, and full code ownership for our clients.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/about" });

const values = [
  {
    title: "Estimates that hold up",
    description:
      "We scope work into concrete pieces before a number is attached to it, so the estimate at kickoff is the one you pay at delivery.",
  },
  {
    title: "Direct access to engineers",
    description:
      "You talk to the people writing the code in a shared channel, not through a layer of account management relaying updates a day late.",
  },
  {
    title: "You own what we build",
    description:
      "Source code, design files, and infrastructure access transfer to you in full — nothing about the delivered product depends on us staying involved.",
  },
  {
    title: "Say no when it's the right answer",
    description:
      "If a requested feature, technology choice, or automation idea isn't a good fit for the problem, we'll say so directly rather than building it anyway.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: "/about", title, description })} />
      <Section className="pb-0 pt-10 sm:pt-12">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
        <SectionHeading as="h1"
          eyebrow="About us"
          title="A remote-first team built around a specific way of working"
          description="EntireXperts exists to close the gap between what a business needs built and what off-the-shelf tools or a vague vendor relationship can deliver. Everything below is how we actually operate, not a mission statement written to sound good."
        />
      </Section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="font-semibold text-foreground">{value.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold text-foreground">How we’re structured</h2>
          <p className="mt-4 text-foreground-muted">
            We work as a remote-first team, structured around each project rather than a fixed bench of generalists.
            That means the engineers on your project are chosen for direct experience with what you’re building, and
            the team stays consistent for the length of the engagement rather than rotating between projects.
          </p>
        </div>
      </Section>

      <Section className="text-center">
        <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
          Want to know more before reaching out?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-foreground-muted">
          Our Our Process page covers exactly how a project runs from discovery through launch and support.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button href="/process" variant="outline" size="lg">
            See our process
          </Button>
          <Button href="/contact" size="lg">
            Talk to a software expert
          </Button>
        </div>
      </Section>
    </>
  );
}
