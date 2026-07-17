import type { ServiceContent } from "@/content/services/types";

export const ecommerceDevelopment: ServiceContent = {
  slug: "ecommerce-development",
  name: "E-commerce Development",
  seoTitle: "E-commerce Development Company",
  metaDescription:
    "Custom e-commerce development focused on checkout conversion and mobile performance — storefronts built to handle seasonal traffic without slowing down.",
  h1: "Storefronts built for the checkout, not just the homepage",
  overview:
    "Most e-commerce traffic is lost between the product page and the confirmation screen, which is why checkout performance and simplicity matter more than homepage design. We build storefronts optimized for fast mobile load times and a checkout flow with as few steps as the payment provider allows, load-tested ahead of any seasonal traffic spikes the business already expects.",
  problems: [
    "Checkout abandonment is high, particularly on mobile devices",
    "Inventory and order systems don't sync in real time, causing overselling",
    "A seasonal campaign is approaching and current infrastructure hasn't been load-tested",
    "Product pages aren't structured for search visibility",
  ],
  deliverables: [
    "A storefront optimized for fast mobile load times and Core Web Vitals",
    "A simplified checkout flow with payment processing integrated",
    "Real-time inventory sync between the storefront and backend systems",
    "Structured data for products to support search visibility",
  ],
  features: [
    "Cart and checkout flows tuned to minimize steps to purchase",
    "Real-time inventory and order synchronization",
    "Discount, promotion, and abandoned-cart recovery support",
    "Product search and filtering tuned for conversion, not just browsing",
  ],
  technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Vercel"],
  process: [
    { title: "Audit the current conversion funnel", description: "We identify exactly where visitors are dropping off before redesigning anything." },
    { title: "Rebuild the highest-traffic pages first", description: "Home, category, and checkout pages are prioritized since they carry the most traffic and the most conversion risk." },
    { title: "Load test before peak traffic", description: "Infrastructure is tested against expected campaign or seasonal traffic ahead of the actual event." },
    { title: "Launch with a fallback plan", description: "A rollback path is kept available until the new storefront has run cleanly through one full sales cycle." },
  ],
  industries: ["E-commerce & Retail"],
  benefits: [
    "Fewer visitors lost to slow mobile load times",
    "A checkout flow simplified to reduce abandonment",
    "Infrastructure tested and ready ahead of seasonal traffic spikes",
    "Product pages structured to support organic search visibility",
  ],
  faqs: [
    {
      question: "Can you migrate an existing storefront without losing search rankings?",
      answer:
        "Yes — migrations include a redirect map from old URLs to new ones so existing search rankings and inbound links carry over rather than resetting.",
    },
    {
      question: "Do you handle payment processing integration?",
      answer:
        "Yes, including major providers like Stripe, along with the reconciliation and refund flows that go with them.",
    },
    {
      question: "Can the storefront handle a big seasonal traffic spike?",
      answer:
        "We load-test against your expected campaign traffic ahead of the actual event, rather than finding out during it whether the infrastructure holds up.",
    },
  ],
  relatedServiceSlugs: ["website-development", "search-engine-optimization", "ui-ux-design"],
};
