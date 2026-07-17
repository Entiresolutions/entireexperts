import Link from "next/link";
import { SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getPublishedPosts } from "@/lib/blog";

export function LatestBlogPosts() {
  const posts = getPublishedPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="From the blog"
            title="Notes on building and buying software"
            description="Practical writing for people evaluating a build, scoping a project, or trying to estimate a budget."
          />
          <Button href="/blog" variant="outline" className="shrink-0">
            Visit the blog
          </Button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-lg hover:shadow-brand/10"
            >
              <Badge variant="neutral" className="w-fit">
                {post.frontmatter.category}
              </Badge>
              <h3 className="mt-4 text-base font-semibold text-foreground">{post.frontmatter.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted">
                {post.frontmatter.description}
              </p>
              <p className="mt-4 text-xs text-foreground-muted">{post.readingTimeText}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
