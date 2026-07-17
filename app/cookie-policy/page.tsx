import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLd } from "@/components/ui/json-ld";
import { webPageSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";
import { LegalReviewNotice } from "@/components/features/legal/legal-review-notice";
import { companyContact } from "@/content/company";

const title = "Cookie Policy";
const description = "What cookies and similar technologies Entire Expert's website uses, and how to control them.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/cookie-policy" });

export default function CookiePolicyPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: "/cookie-policy", title, description })} />
      <Section className="pb-0 pt-10 sm:pt-12">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Cookie Policy", path: "/cookie-policy" }]} />
        <SectionHeading as="h1" eyebrow="Legal" title="Cookie Policy" />
      </Section>

      <Section>
        <div className="prose prose-neutral max-w-none dark:prose-invert">
          <LegalReviewNotice />

          <h2>Essential cookies</h2>
          <p>
            This site uses one cookie required for the site to function: a theme preference cookie set by your
            browser’s local storage when you choose light or dark mode, so your preference persists between
            visits. This isn’t a tracking cookie and doesn’t identify you.
          </p>

          <h2>Analytics cookies (optional)</h2>
          <p>
            If the site owner has configured Google Analytics 4, Google Tag Manager, or Microsoft Clarity, those
            services may set cookies to measure aggregate site usage — which pages are visited and how. These are
            only active when the corresponding environment variables are configured; by default, this site loads
            no third-party analytics scripts and sets no analytics cookies.
          </p>

          <h2>Anti-spam cookies (optional)</h2>
          <p>
            If Cloudflare Turnstile is configured for spam protection on our forms, it may set a cookie as part of
            verifying that a form submission is from a real visitor rather than an automated bot.
          </p>

          <h2>Controlling cookies</h2>
          <p>
            Most browsers let you block or delete cookies through their settings. Blocking the theme preference
            cookie simply means the site will default to your operating system’s light or dark mode setting on
            each visit instead of remembering a manual choice.
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
