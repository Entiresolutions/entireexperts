import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { slugify } from "@/lib/slugify";

const BLOG_DIRECTORY = path.join(process.cwd(), "content", "blog");

export type BlogFrontmatter = {
  title: string;
  description: string;
  category: string;
  author: string;
  datePublished: string;
  dateModified: string;
  status: "draft" | "published";
};

export type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
  readingTimeText: string;
};

let cachedPosts: BlogPost[] | null = null;

function loadAllPosts(): BlogPost[] {
  if (cachedPosts) return cachedPosts;

  const files = fs.existsSync(BLOG_DIRECTORY)
    ? fs.readdirSync(BLOG_DIRECTORY).filter((file) => file.endsWith(".mdx"))
    : [];

  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIRECTORY, file), "utf-8");
    const { data, content } = matter(raw);
    const frontmatter = data as BlogFrontmatter;

    return {
      slug: file.replace(/\.mdx$/, ""),
      frontmatter,
      content,
      readingTimeText: readingTime(content).text,
    };
  });

  cachedPosts = posts;
  return posts;
}

export function getPublishedPosts(): BlogPost[] {
  return loadAllPosts()
    .filter((post) => post.frontmatter.status === "published")
    .sort((a, b) => (a.frontmatter.datePublished < b.frontmatter.datePublished ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return loadAllPosts().find((post) => post.slug === slug);
}

export function getCategoryBySlug(categorySlug: string): string | undefined {
  return getAllCategories().find((category) => slugify(category) === categorySlug);
}

export function getPostsByCategorySlug(categorySlug: string): BlogPost[] {
  return getPublishedPosts().filter((post) => slugify(post.frontmatter.category) === categorySlug);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(getPublishedPosts().map((post) => post.frontmatter.category)));
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 3): BlogPost[] {
  return getPublishedPosts()
    .filter((post) => post.slug !== currentSlug && post.frontmatter.category === category)
    .slice(0, limit);
}
