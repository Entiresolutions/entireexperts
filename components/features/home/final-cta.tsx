import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { primaryCta, consultationCta } from "@/config/site";

export function FinalCta() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[1.75rem] p-px">
        {/* Rotating conic ring reads as an animated gradient border (1px reveal). */}
        <div
          aria-hidden
          className="absolute -inset-[150%] animate-border-spin bg-[conic-gradient(from_0deg,transparent_0deg,color-mix(in_srgb,var(--color-accent)_90%,white)_40deg,transparent_120deg,transparent_240deg,color-mix(in_srgb,white_80%,transparent)_300deg,transparent_360deg)]"
        />

        <div className="relative overflow-hidden rounded-[calc(1.75rem-1px)] bg-gradient-to-br from-brand via-brand to-accent px-8 py-14 text-center text-white sm:px-14">
          {/* Depth: glow + floating soft shapes */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl animate-float" />
            <div
              className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-float"
              style={{ animationDelay: "-3s" }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(closest-side,transparent,rgba(0,0,0,0.06))]" />
          </div>

          <div className="relative">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Have a project you keep meaning to start?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              Tell us what you&rsquo;re building and where it&rsquo;s stuck. We&rsquo;ll follow up within one business
              day with a scoped next step — not a generic sales call.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Magnetic>
                <Button href={primaryCta.href} variant="accent" size="lg" className="shadow-lg shadow-black/10">
                  {primaryCta.label}
                </Button>
              </Magnetic>
              <Button
                href={consultationCta.href}
                variant="outline"
                size="lg"
                className="border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10 hover:text-white"
              >
                {consultationCta.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
