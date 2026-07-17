import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized === "/" ? "" : normalized}`;
}

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  /** Set to false for utility pages (thank-you, previews) that must stay out of search results. */
  index?: boolean;
  ogImagePath?: string;
  type?: "website" | "article";
};

export function buildMetadata({
  title,
  description,
  path,
  index = true,
  type = "website",
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function pageTitle(title: string): string {
  return `${title} | ${siteConfig.name}`;
}
