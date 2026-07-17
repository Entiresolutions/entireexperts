import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLd } from "@/components/ui/json-ld";
import { webPageSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";
import { getAllCategories, getPublishedPosts } from "@/lib/blog";
import { PostCard } from "@/components/features/blog/post-card";
import { slugify } from "@/lib/slugify";

const title = "Blog";
const description = "Practical writing on software development, mobile apps, AI automation, and product strategy for people evaluating a build or scoping a project.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/blog" });

export default function BlogIndexPage() {
  const posts = getPublishedPosts();
  const categories = getAllCategories();

  return (
    <>
      <JsonLd data={webPageSchema({ path: "/blog", title, description })} />
      <Section className="pb-0 pt-10 sm:pt-12">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} />
        <SectionHeading as="h1" eyebrow="Blog" title="Notes on building and buying software" description={description} />
        {categories.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog/category/${slugify(category)}`}
                className="rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-foreground-muted hover:border-brand hover:text-brand"
              >
                {category}
              </Link>
            ))}
          </div>
        ) : null}
      </Section>

      <Section>
        {posts.length === 0 ? (
          <p className="text-foreground-muted">No posts published yet — check back soon.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
