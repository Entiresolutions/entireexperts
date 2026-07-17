import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLd } from "@/components/ui/json-ld";
import { webPageSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";
import { LegalReviewNotice } from "@/components/features/legal/legal-review-notice";
import { companyContact } from "@/content/company";
import { siteConfig } from "@/config/site";

const title = "Privacy Policy";
const description = "How Entire Expert collects, uses, and protects information submitted through this website.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/privacy-policy" });

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: "/privacy-policy", title, description })} />
      <Section className="pb-0 pt-10 sm:pt-12">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy" }]} />
        <SectionHeading as="h1" eyebrow="Legal" title="Privacy Policy" />
      </Section>

      <Section>
        <div className="prose prose-neutral max-w-none dark:prose-invert">
          <LegalReviewNotice />

          <p>Last updated: this page reflects the current state of the website’s data collection practices.</p>

          <h2>Information we collect</h2>
          <p>
            We collect information you submit directly through forms on this site — the contact form, quote
            request form, and chatbot lead form — which may include your name, email address, phone number,
            company name, and details about your project. We do not collect this information through any other
            means, and we do not knowingly collect sensitive personal information (health, financial account
            numbers, government identifiers) through these forms.
          </p>

          <h2>How we use it</h2>
          <p>
            Information submitted through a form is used to respond to your enquiry, prepare a project estimate,
            and, where applicable, send you a confirmation email acknowledging receipt. We do not sell or rent
            your information to third parties.
          </p>

          <h2>Email communication</h2>
          <p>
            Form submissions are processed through a transactional email provider (Resend) to deliver your message
            to our team and send you a confirmation. We do not add form submissions to a marketing mailing list
            without separate, explicit consent.
          </p>

          <h2>Analytics and cookies</h2>
          <p>
            This site may use privacy-conscious analytics tools (such as Google Analytics 4 or Microsoft Clarity)
            to understand aggregate site usage, only where those tools are actively configured. See our{" "}
            <a href="/cookie-policy">Cookie Policy</a> for details on what’s used and how to control it.
          </p>

          <h2>Data retention</h2>
          <p>
            Contact and quote request information is retained for as long as reasonably necessary to respond to
            your enquiry and maintain business records, after which it is deleted or anonymized.
          </p>

          <h2>Your rights</h2>
          <p>
            You can request access to, correction of, or deletion of personal information you’ve submitted to us
            by contacting{" "}
            <a href={`mailto:${companyContact.email}`}>{companyContact.email}</a>.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If this policy changes materially, the &ldquo;last updated&rdquo; reference above will be revised. Continued use
            of {siteConfig.name}’s website after a change constitutes acceptance of the updated policy.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${companyContact.email}`}>{companyContact.email}</a>.
          </p>
        </div>
      </Section>
    </>
  );
}
