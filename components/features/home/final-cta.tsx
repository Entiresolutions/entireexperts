import { Button } from "@/components/ui/button";
import { primaryCta, consultationCta } from "@/config/site";

export function FinalCta() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl rounded-3xl bg-brand px-8 py-14 text-center text-white sm:px-14">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Have a project you keep meaning to start?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/85">
          Tell us what you’re building and where it’s stuck. We’ll follow up within one business day with a
          scoped next step — not a generic sales call.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href={primaryCta.href} variant="accent" size="lg">
            {primaryCta.label}
          </Button>
          <Button href={consultationCta.href} variant="outline" size="lg" className="border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10 hover:text-white">
            {consultationCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
