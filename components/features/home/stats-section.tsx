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
    <section className="bg-brand py-14 text-white sm:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 sm:px-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl font-bold sm:text-4xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-white/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
