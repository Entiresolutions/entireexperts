import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLd } from "@/components/ui/json-ld";
import { webPageSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";
import { companyContact } from "@/content/company";

const title = "Careers";
const description = "Open roles at EntireXperts and how to reach out if you don't see a current match for your background.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/careers" });

const whatWeLookFor = [
  "Direct experience shipping production software, not just coursework or personal projects",
  "Comfort working async with a remote-first team across time zones",
  "Clear written communication — a lot of collaboration here happens in writing, not meetings",
  "Ownership of a problem end to end rather than waiting to be told the next step",
];

export default function CareersPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: "/careers", title, description })} />
      <Section className="pb-0 pt-10 sm:pt-12">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Careers", path: "/careers" }]} />
        <SectionHeading as="h1"
          eyebrow="Careers"
          title="No open roles listed right now"
          description="We're not actively hiring for a specific position at the moment. If that changes, roles will be listed here directly rather than through a generic careers page that never updates."
        />
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-xl font-semibold text-foreground">What we look for when we are hiring</h2>
          <ul className="mt-5 space-y-3">
            {whatWeLookFor.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
            <h2 className="font-semibold text-foreground">Want to be considered for future roles?</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
              Send a short note and your background to{" "}
              <a href={`mailto:${companyContact.email}`} className="text-brand hover:underline">
                {companyContact.email}
              </a>
              . We keep relevant profiles on file and reach out when a fitting role opens up.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
