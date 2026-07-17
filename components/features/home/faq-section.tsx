import { SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";
import { faqPageSchema } from "@/lib/seo/schema";
import { generalFaqs } from "@/content/faqs";

export function FaqSection() {
  const items = generalFaqs.slice(0, 6).map((faq) => ({ question: faq.question, answer: faq.answer }));

  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20 lg:py-24">
      <JsonLd data={faqPageSchema(items)} />
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Questions"
          title="Frequently asked questions"
          align="center"
          className="mx-auto"
        />
        <div className="mt-10">
          <Accordion items={items} />
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/faq" variant="ghost">
            See the full FAQ →
          </Button>
        </div>
      </div>
    </section>
  );
}
