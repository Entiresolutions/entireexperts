import type { ServiceContent } from "@/content/services/types";

export const digitalMarketing: ServiceContent = {
  slug: "digital-marketing",
  name: "Digital Marketing",
  seoTitle: "Digital Marketing Services for Software Companies",
  metaDescription:
    "Digital marketing built around measurable outcomes — campaign tracking, conversion events, and analytics wired directly into the product, not bolted on after.",
  h1: "Marketing wired into the product, not bolted on after launch",
  overview:
    "Marketing efforts often run disconnected from the product itself — campaigns pointing at a site with no conversion tracking, or a CTA that isn't measured against the goal it's supposed to drive. We build the tracking and analytics layer as part of the product, so every campaign, CTA, and form submission can be measured against a defined conversion goal from day one.",
  problems: [
    "Marketing campaigns run without reliable conversion tracking back to the site",
    "It's unclear which pages or CTAs actually drive quote requests or sign-ups",
    "Analytics and tag management are set up inconsistently across the site",
    "Consent and privacy requirements haven't been addressed in the tracking setup",
  ],
  deliverables: [
    "Conversion tracking wired to specific business goals — quote requests, sign-ups, contact form submissions",
    "Analytics and tag management configured consistently across every page",
    "Event tracking for key CTAs, so performance can be compared across campaigns",
    "A consent-aware tracking setup respecting user privacy preferences",
  ],
  features: [
    "Google Analytics 4 and Google Tag Manager integration",
    "Custom conversion events for forms, quote requests, and chatbot leads",
    "Campaign-level tracking so ad spend can be attributed to actual outcomes",
    "Privacy-conscious tracking that respects consent requirements",
  ],
  technologies: ["Google Analytics 4", "Google Tag Manager", "Microsoft Clarity", "Next.js"],
  process: [
    { title: "Define what counts as a conversion", description: "Specific, measurable goals are agreed before any tracking is implemented." },
    { title: "Wire analytics into the actual product", description: "Tracking is implemented directly in the codebase against real user actions, not a generic pageview setup." },
    { title: "Connect campaigns to outcomes", description: "Campaign parameters are tied through to the conversion events they're meant to drive." },
    { title: "Review and adjust based on real data", description: "Reporting is reviewed on a regular cadence to adjust what's working and what isn't." },
  ],
  industries: ["SaaS", "E-commerce & Retail", "Professional services"],
  benefits: [
    "Clear visibility into which pages and campaigns actually drive conversions",
    "Consistent analytics setup instead of ad hoc tracking added page by page",
    "Marketing spend attributed to real outcomes, not just traffic",
    "A tracking setup that respects user consent and privacy expectations",
  ],
  faqs: [
    {
      question: "Do you run ad campaigns, or only handle tracking and analytics?",
      answer:
        "Our focus is the technical foundation — analytics, conversion tracking, and the site experience campaigns point to — which is the part most agencies running the ads themselves don't control directly.",
    },
    {
      question: "Can this be added to an existing site?",
      answer:
        "Yes, and it often surfaces gaps in the current tracking setup that were quietly producing inaccurate data.",
    },
    {
      question: "How does this relate to your SEO service?",
      answer:
        "SEO drives organic visibility; this service is about measuring and improving what happens once someone actually arrives, from any channel. Many clients run both together — see our Search Engine Optimization page for the organic side.",
    },
  ],
  relatedServiceSlugs: ["search-engine-optimization", "website-development", "ui-ux-design"],
};
