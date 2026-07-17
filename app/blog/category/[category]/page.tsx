import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, SectionHeading } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLd } from "@/components/ui/json-ld";
import { webPageSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";
import { getAllCategories, getCategoryBySlug, getPostsByCategorySlug } from "@/lib/blog";
import { PostCard } from "@/components/features/blog/post-card";
import { slugify } from "@/lib/slugify";

export function generateStaticParams() {
  return getAllCategories().map((category) => ({ category: slugify(category) }));
}

type PageProps = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};

  return buildMetadata({
    title: `${category} Articles`,
    description: `Articles from the Entire Expert blog in the ${category} category.`,
    path: `/blog/category/${categorySlug}`,
  });
}

export default async function BlogCategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const posts = getPostsByCategorySlug(categorySlug);
  const path = `/blog/category/${categorySlug}`;

  return (
    <>
      <JsonLd data={webPageSchema({ path, title: `${category} Articles`, description: `Articles in the ${category} category.` })} />
      <Section className="pb-0 pt-10 sm:pt-12">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: category, path }]} />
        <SectionHeading as="h1" eyebrow="Category" title={category} description={`${posts.length} article${posts.length === 1 ? "" : "s"} in this category.`} />
      </Section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>
    </>
  );
}
