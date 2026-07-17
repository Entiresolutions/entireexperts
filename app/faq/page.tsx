import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import { JsonLd } from "@/components/ui/json-ld";
import { faqPageSchema, webPageSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";
import { generalFaqs } from "@/content/faqs";
import { Button } from "@/components/ui/button";

const title = "Frequently Asked Questions";
const description =
  "Answers to common questions about working with EntireXperts — pricing, process, code ownership, support, and technology choices.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/faq" });

export default function FaqPage() {
  const items = generalFaqs.map((faq) => ({ question: faq.question, answer: faq.answer }));

  return (
    <>
      <JsonLd data={[webPageSchema({ path: "/faq", title, description }), faqPageSchema(items)]} />
      <Section className="pb-0 pt-10 sm:pt-12">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]} />
        <SectionHeading as="h1" eyebrow="Questions" title="Frequently asked questions" description={description} />
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <Accordion items={items} />
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <h2 className="font-display text-xl font-semibold text-foreground">Didn’t find your answer?</h2>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Button href="/contact" size="lg">Ask us directly</Button>
            <Button href="/quote" variant="outline" size="lg">Request a quote</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
