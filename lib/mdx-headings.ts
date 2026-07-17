import { slugify } from "@/lib/slugify";

export type Heading = { text: string; slug: string };

/** Extracts H2 headings from raw markdown for the table of contents, matching the ids assigned by mdx-components.tsx. */
export function extractHeadings(markdown: string): Heading[] {
  const matches = markdown.match(/^##\s+(.+)$/gm) ?? [];
  return matches.map((line) => {
    const text = line.replace(/^##\s+/, "").trim();
    return { text, slug: slugify(text) };
  });
}
