import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Section } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/ui/json-ld";
import { articleSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";
import { getPostBySlug, getPublishedPosts, getRelatedPosts } from "@/lib/blog";
import { extractHeadings } from "@/lib/mdx-headings";
import { mdxComponents } from "@/components/features/blog/mdx-components";
import { TableOfContents } from "@/components/features/blog/table-of-contents";
import { ShareButtons } from "@/components/features/blog/share-buttons";
import { PostCard } from "@/components/features/blog/post-card";
import { slugify } from "@/lib/slugify";

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.frontmatter.status !== "published") return {};

  return buildMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    path: `/blog/${slug}`,
    type: "article",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.frontmatter.status !== "published") notFound();

  const headings = extractHeadings(post.content);
  const relatedPosts = getRelatedPosts(slug, post.frontmatter.category);
  const path = `/blog/${slug}`;

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.frontmatter.title, path },
  ];

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: post.frontmatter.title,
            description: post.frontmatter.description,
            path,
            datePublished: post.frontmatter.datePublished,
            dateModified: post.frontmatter.dateModified,
            authorName: post.frontmatter.author,
          }),
          breadcrumbSchema(breadcrumbItems),
        ]}
      />

      <Section className="pb-0 pt-10 sm:pt-12">
        <Breadcrumbs items={breadcrumbItems} />
        <Badge variant="neutral">
          <a href={`/blog/category/${slugify(post.frontmatter.category)}`}>{post.frontmatter.category}</a>
        </Badge>
        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {post.frontmatter.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-foreground-muted">
          <span>{post.frontmatter.author}</span>
          <span aria-hidden>&middot;</span>
          <time dateTime={post.frontmatter.datePublished}>
            {new Date(post.frontmatter.datePublished).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span aria-hidden>&middot;</span>
          <span>{post.readingTimeText}</span>
        </div>
        <div className="mt-4">
          <ShareButtons path={path} title={post.frontmatter.title} />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_260px]">
          <article className="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-display prose-a:text-brand">
            <MDXRemote source={post.content} components={mdxComponents} />
          </article>
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents headings={headings} />
            </div>
          </aside>
        </div>
      </Section>

      {relatedPosts.length > 0 ? (
        <Section className="border-t border-border bg-surface">
          <h2 className="font-display text-2xl font-semibold text-foreground">Related articles</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {relatedPosts.map((related) => (
              <PostCard key={related.slug} post={related} />
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
