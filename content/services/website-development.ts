import type { ServiceContent } from "@/content/services/types";

export const websiteDevelopment: ServiceContent = {
  slug: "website-development",
  name: "Website Development",
  seoTitle: "Website Development Company",
  metaDescription:
    "Fast, search-friendly website development built on modern React and Next.js — marketing sites, corporate sites, and content-driven platforms.",
  h1: "Websites built to load fast and rank, not just look good in a preview",
  overview:
    "A website is usually the first real interaction a prospective customer has with your business, and it's judged in the first few seconds — before anyone reads a word of copy. We build websites on modern, server-rendered frameworks so pages load quickly, remain fully crawlable by search engines, and stay easy to extend as new pages and content get added.",
  problems: [
    "An existing site is slow enough on mobile that visitors leave before it finishes loading",
    "Content updates require a developer for changes that should be self-service",
    "The site isn't structured in a way search engines can crawl and index cleanly",
    "The design doesn't reflect the credibility of the business behind it",
  ],
  deliverables: [
    "A fully responsive site built with semantic, accessible HTML",
    "On-page SEO implemented on every page — metadata, structured data, and clean URLs",
    "A content structure your team can update without needing a developer for routine changes",
    "Performance-tuned images, fonts, and scripts for fast load times",
  ],
  features: [
    "Server-rendered pages for fast first paint and full search engine crawlability",
    "A component-based design system that keeps new pages visually consistent",
    "Structured data for organization, page, and breadcrumb information",
    "Built-in analytics and conversion tracking hooks",
  ],
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MDX", "Vercel"],
  process: [
    { title: "Content and sitemap planning", description: "We map every page the site needs before design starts, so navigation and internal linking are deliberate, not improvised." },
    { title: "Design system first", description: "A shared set of components is designed once and reused across every page, keeping the site visually consistent as it grows." },
    { title: "Build with SEO built in", description: "Metadata, structured data, and semantic markup are part of every page from the start, not added afterward." },
    { title: "Launch with monitoring", description: "Core Web Vitals and uptime are monitored from day one so regressions are caught quickly." },
  ],
  industries: ["Professional services", "E-commerce & Retail", "Education & EdTech"],
  benefits: [
    "Faster load times, particularly on mobile connections",
    "A site structure search engines can index without extra work",
    "Content your team can update without waiting on a developer",
    "A visual presentation that matches the credibility of the business",
  ],
  faqs: [
    {
      question: "Will the website be easy to update after launch?",
      answer:
        "Yes. Page content is structured so routine updates — text, images, new blog posts — don't require touching code, while structural changes still go through development for consistency.",
    },
    {
      question: "Do you handle SEO as part of website development?",
      answer:
        "On-page SEO fundamentals — metadata, structured data, clean URLs, semantic headings — are built into every page by default. Ongoing SEO strategy is a separate, deeper engagement; see our Search Engine Optimization service.",
    },
    {
      question: "Can you migrate content from our existing site?",
      answer:
        "Yes, and we set up redirects from old URLs to new ones so existing search rankings and inbound links aren't lost in the migration.",
    },
  ],
  relatedServiceSlugs: ["search-engine-optimization", "ui-ux-design", "web-application-development"],
};
