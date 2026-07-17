import type { Heading } from "@/lib/mdx-headings";

export function TableOfContents({ headings }: { headings: Heading[] }) {
  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="rounded-2xl border border-border bg-surface p-5">
      <p className="text-sm font-semibold text-foreground">On this page</p>
      <ul className="mt-3 space-y-2">
        {headings.map((heading) => (
          <li key={heading.slug}>
            <a href={`#${heading.slug}`} className="text-sm text-foreground-muted hover:text-brand">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
