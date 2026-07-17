import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/lib/blog";

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-lg hover:shadow-brand/10"
    >
      <Badge variant="neutral" className="w-fit">
        {post.frontmatter.category}
      </Badge>
      <h2 className="mt-4 text-base font-semibold text-foreground">{post.frontmatter.title}</h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted">{post.frontmatter.description}</p>
      <div className="mt-4 flex items-center justify-between text-xs text-foreground-muted">
        <span>{post.frontmatter.author}</span>
        <span>{post.readingTimeText}</span>
      </div>
    </Link>
  );
}
