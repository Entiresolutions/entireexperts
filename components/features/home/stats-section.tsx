import { AnimatedCounter } from "@/components/ui/animated-counter";
import { companyStats } from "@/content/company";

// Falls back to honest, verifiable-by-design facts (counts of what the site
// actually offers, and stated policies) instead of fabricated business
// metrics whenever content/company.ts has no confirmed real numbers yet.
const fallbackStats = [
  { value: 18, suffix: "", label: "Service specialties covered" },
  { value: 6, suffix: "", label: "Stages in every project" },
  { value: 1, suffix: "", label: "Business day typical response time" },
  { value: 100, suffix: "%", label: "Of delivered code, owned by you" },
];

export function StatsSection() {
  const stats =
    companyStats.length > 0
      ? companyStats.map((stat) => ({ value: Number.parseInt(stat.value, 10) || 0, suffix: "", label: stat.label }))
      : fallbackStats;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand via-brand to-accent py-16 text-white sm:py-20">
      {/* Decorative depth: soft glow blobs + subtle grid, masked so text stays crisp */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000,transparent)]" />
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-aurora" />
        <div
          className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-white/10 blur-3xl animate-aurora"
          style={{ animationDelay: "-9s" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-10 px-5 sm:px-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-4xl font-bold sm:text-5xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mx-auto mt-2 max-w-[14rem] text-sm text-white/85">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
