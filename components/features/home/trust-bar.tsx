const stack = [
  "TypeScript",
  "React & Next.js",
  "Node.js",
  "Flutter",
  "PostgreSQL",
  "AWS",
  "Python",
  "Docker",
  "React Native",
  "GraphQL",
  "Kubernetes",
  "Tailwind CSS",
];

// Rendered twice inside one animated track; the spacing lives on each item
// (pr-10) so translating the track by exactly -50% loops seamlessly.
const track = [...stack, ...stack];

/**
 * Infinite technology marquee. Pure CSS transform animation (see .animate-marquee
 * in globals.css) so it needs no client JS, pauses on hover, and is halted by
 * prefers-reduced-motion.
 */
export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wide text-foreground-muted">
          Built on a dependable, production-grade stack
        </p>

        <div className="marquee-group mt-6 overflow-hidden mask-x-fade">
          <ul className="flex w-max animate-marquee items-center">
            {track.map((tech, i) => (
              <li
                key={`${tech}-${i}`}
                aria-hidden={i >= stack.length}
                className="whitespace-nowrap pr-10 text-sm font-semibold text-foreground-muted/80"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
