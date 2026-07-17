import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo/metadata";
import { getAllServiceSlugs } from "@/content/services";
import { getAllManagementServiceSlugs } from "@/content/management-services";
import { industries } from "@/content/industries";
import { caseStudies } from "@/content/case-studies";
import { getPublishedPosts, getAllCategories } from "@/lib/blog";
import { slugify } from "@/lib/slugify";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/management-services", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/portfolio", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/process", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/technologies", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/industries", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.8, changeFrequency: "daily" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/quote", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/careers", priority: 0.4, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/terms-and-conditions", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/cookie-policy", priority: 0.2, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const serviceEntries = getAllServiceSlugs().map((slug) => ({
    url: absoluteUrl(`/services/${slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const managementServiceEntries = getAllManagementServiceSlugs().map((slug) => ({
    url: absoluteUrl(`/management-services/${slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const industryEntries = industries.map((industry) => ({
    url: absoluteUrl(`/industries/${industry.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const caseStudyEntries = caseStudies.map((study) => ({
    url: absoluteUrl(`/portfolio/${study.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const posts = getPublishedPosts();
  const postEntries = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.frontmatter.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const categoryEntries = getAllCategories().map((category) => ({
    url: absoluteUrl(`/blog/category/${slugify(category)}`),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.4,
  }));

  return [
    ...staticEntries,
    ...serviceEntries,
    ...managementServiceEntries,
    ...industryEntries,
    ...caseStudyEntries,
    ...postEntries,
    ...categoryEntries,
  ];
}
