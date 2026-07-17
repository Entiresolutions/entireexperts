import type { ServiceContent } from "@/content/services/types";

export const searchEngineOptimization: ServiceContent = {
  slug: "search-engine-optimization",
  name: "Search Engine Optimization",
  seoTitle: "Search Engine Optimization Services",
  metaDescription:
    "Technical and on-page SEO for software and product websites — site structure, metadata, structured data, and content built to rank without keyword stuffing.",
  h1: "SEO built on site structure and substance, not keyword stuffing",
  overview:
    "SEO for a software product or service business succeeds or fails largely on technical fundamentals most agencies treat as an afterthought: crawlable site structure, accurate metadata, and content that actually answers what the searcher is looking for. We handle the technical foundation — sitemaps, structured data, canonical URLs, internal linking — alongside content strategy built around real search intent.",
  problems: [
    "The site isn't ranking for terms directly related to the services it offers",
    "Pages compete against each other for the same keyword instead of each targeting something distinct",
    "Technical issues — broken links, duplicate metadata, missing structured data — are suppressing visibility",
    "Content reads like it was written for search engines instead of the person searching",
  ],
  deliverables: [
    "A keyword map assigning one primary keyword per page to prevent cannibalization",
    "Technical SEO implementation — sitemap, robots.txt, canonical URLs, structured data",
    "An internal linking plan connecting related pages with natural anchor text",
    "Content recommendations built around actual search intent, not keyword density",
  ],
  features: [
    "Structured data implementation validated against schema.org guidelines",
    "Core Web Vitals monitoring, since page speed is a ranking factor in its own right",
    "A deliberate internal linking architecture instead of ad hoc cross-links",
    "Ongoing tracking of indexation and search visibility",
  ],
  technologies: ["Next.js Metadata API", "Schema.org structured data", "Google Search Console", "Core Web Vitals tooling"],
  process: [
    { title: "Audit current technical SEO", description: "We check indexation, metadata, structured data, and site structure before proposing changes." },
    { title: "Build a keyword map", description: "Every important keyword is assigned to exactly one target page, preventing pages from competing against each other." },
    { title: "Implement technical fixes", description: "Sitemap, canonical URLs, and structured data are corrected or implemented directly in the codebase." },
    { title: "Monitor and iterate", description: "Search Console data guides ongoing content and technical adjustments after the initial implementation." },
  ],
  industries: ["SaaS", "E-commerce & Retail", "Professional services"],
  benefits: [
    "Pages that target distinct keywords instead of competing with each other",
    "Technical issues fixed at the source, in the codebase, not patched around",
    "Structured data that makes pages eligible for rich results",
    "A site structure built for both search engines and actual visitors",
  ],
  faqs: [
    {
      question: "Do you write content, or only handle technical SEO?",
      answer:
        "Both — technical implementation is handled directly in the codebase, and content recommendations are built around genuine search intent rather than keyword density targets.",
    },
    {
      question: "How long does SEO typically take to show results?",
      answer:
        "Technical fixes (indexation, structured data) can show up in Search Console within weeks. Ranking improvements from content and authority typically take longer and depend heavily on competition for the target keywords.",
    },
    {
      question: "Can this be added to an existing website you didn't build?",
      answer:
        "Yes, though the scope depends on the current platform — some technical fixes are straightforward regardless of the underlying stack, while others may require development work if the site's architecture is limiting.",
    },
  ],
  relatedServiceSlugs: ["website-development", "digital-marketing", "web-application-development"],
};
