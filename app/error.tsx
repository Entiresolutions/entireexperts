"use client";

import { useEffect } from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Logged with the digest only — never render error.message to the user,
    // since server error text can leak implementation details.
    console.error("[app/error]", error.digest ?? error.message);
  }, [error]);

  return (
    <Section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">Something went wrong</h1>
      <p className="mx-auto mt-3 max-w-md text-foreground-muted">
        An unexpected error occurred on our end. Try again, or head back to the homepage — if the problem
        continues, please let us know.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button onClick={reset} size="lg">
          Try again
        </Button>
        <Button href="/" variant="outline" size="lg">
          Back to homepage
        </Button>
        <Button href="/contact" variant="outline" size="lg">
          Contact us
        </Button>
      </div>
    </Section>
  );
}
