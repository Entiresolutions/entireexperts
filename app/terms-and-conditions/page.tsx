import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLd } from "@/components/ui/json-ld";
import { webPageSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";
import { LegalReviewNotice } from "@/components/features/legal/legal-review-notice";
import { companyContact } from "@/content/company";
import { siteConfig } from "@/config/site";

const title = "Terms and Conditions";
const description = "The terms governing use of the Entire Expert website and engagement of our services.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/terms-and-conditions" });

export default function TermsPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: "/terms-and-conditions", title, description })} />
      <Section className="pb-0 pt-10 sm:pt-12">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Terms and Conditions", path: "/terms-and-conditions" }]} />
        <SectionHeading as="h1" eyebrow="Legal" title="Terms and Conditions" />
      </Section>

      <Section>
        <div className="prose prose-neutral max-w-none dark:prose-invert">
          <LegalReviewNotice />

          <h2>Use of this website</h2>
          <p>
            This website is provided for the purpose of describing {siteConfig.name}’s services and enabling
            prospective clients to make contact. You agree not to misuse the site, including attempting to
            interfere with its normal operation, submit false information through its forms, or use automated
            tools to scrape or submit content at scale.
          </p>

          <h2>Service engagements</h2>
          <p>
            Nothing on this website constitutes a binding offer to perform services. A specific engagement — its
            scope, price, timeline, and deliverables — is only binding once set out in a signed written proposal
            or agreement between {siteConfig.name} and the client.
          </p>

          <h2>Intellectual property in delivered work</h2>
          <p>
            Unless a signed agreement states otherwise, source code, design files, and other work product
            delivered as part of a paid engagement are assigned to the client upon full payment. Any pre-existing
            tools, libraries, or frameworks used to build the deliverable remain governed by their own licenses.
          </p>

          <h2>Intellectual property in this website</h2>
          <p>
            The content, design, and branding of this website belong to {siteConfig.name} and may not be copied
            or reproduced without permission, separate from any code delivered to clients under a service
            agreement.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            This website and its content are provided &ldquo;as is.&rdquo; {siteConfig.name} is not liable for any damages
            arising from your use of this website; liability related to a specific service engagement is governed
            by the signed agreement for that engagement, not by these general terms.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            These terms may be updated from time to time. Continued use of the website after a change constitutes
            acceptance of the updated terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${companyContact.email}`}>{companyContact.email}</a>.
          </p>
        </div>
      </Section>
    </>
  );
}
