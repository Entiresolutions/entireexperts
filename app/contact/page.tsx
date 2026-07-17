import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLd } from "@/components/ui/json-ld";
import { contactPageSchema, webPageSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";
import { ContactForm } from "@/components/features/contact/contact-form";
import { companyContact } from "@/content/company";

const title = "Contact Us";
const description =
  "Get in touch with Entire Expert about a software project, a question about our services, or a request for a free consultation.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/contact" });

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[webPageSchema({ path: "/contact", title, description }), contactPageSchema()]} />
      <Section className="pb-0 pt-10 sm:pt-12">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
        <SectionHeading as="h1"
          eyebrow="Contact"
          title="Talk to a software expert"
          description="Tell us about your project and we'll follow up within one business day. Prefer to skip straight to an estimate? Use the Request a Quote page instead."
        />
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <ContactForm />
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="font-semibold text-foreground">Prefer email?</h2>
              <p className="mt-2 text-sm text-foreground-muted">
                <a href={`mailto:${companyContact.email}`} className="text-brand hover:underline">
                  {companyContact.email}
                </a>
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="font-semibold text-foreground">What happens after you submit</h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                You’ll get an automatic confirmation email right away, and a member of the team will follow up
                within one business day with next steps or clarifying questions.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
