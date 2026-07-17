import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or may have moved.",
  path: "/404",
  index: false,
});

export default function NotFound() {
  return (
    <Section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-display text-8xl font-bold text-brand/30">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-foreground sm:text-3xl">
        This page doesn’t exist
      </h1>
      <p className="mx-auto mt-3 max-w-md text-foreground-muted">
        It may have been moved or the link might be outdated. Try one of these instead.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/" size="lg">
          Back to homepage
        </Button>
        <Button href="/services" variant="outline" size="lg">
          Browse services
        </Button>
        <Button href="/contact" variant="outline" size="lg">
          Contact us
        </Button>
      </div>
    </Section>
  );
}
