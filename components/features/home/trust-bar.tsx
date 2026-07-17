const stack = ["TypeScript", "React & Next.js", "Node.js", "Flutter", "PostgreSQL", "AWS", "Python", "Docker"];

export function TrustBar() {
  return (
    <section className="border-b border-border bg-surface py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wide text-foreground-muted">
          Built on a dependable, production-grade stack
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {stack.map((tech) => (
            <li key={tech} className="text-sm font-semibold text-foreground-muted/80">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
