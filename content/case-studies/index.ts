import type { CaseStudy } from "@/content/case-studies/types";

/**
 * Every entry here is a demonstration case study describing the kind of work
 * Entire Expert does and how a project like it would be scoped and built —
 * not a claim about a real, named client. Each page and card built from this
 * data must render an explicit "Illustrative example" label; do not remove it
 * or present these as verified client outcomes.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "field-service-dispatch-platform",
    title: "A dispatch platform replacing spreadsheets for a field service team",
    summary:
      "A custom web application that schedules technicians, tracks job status in real time, and removes the daily spreadsheet reconciliation a dispatch team used to do by hand.",
    serviceSlugs: ["custom-software-development", "web-application-development"],
    industry: "Field services",
    challenge:
      "Dispatchers were coordinating technician schedules across a shared spreadsheet and a group chat, which meant double-bookings, jobs falling through the cracks, and no record of what changed or when.",
    solution:
      "A single scheduling board gives dispatchers a live view of technician availability, job status, and location, with role-based access so technicians only see their own assignments from a mobile-friendly view.",
    process: [
      "Mapped the existing spreadsheet-and-chat workflow with the dispatch team to find where jobs were actually getting lost",
      "Designed a scheduling board around the mental model dispatchers already used, rather than introducing new terminology",
      "Built the scheduling core first and shipped it to one dispatcher for real-world feedback before rolling out to the full team",
      "Added technician-facing mobile views once the dispatcher workflow was validated",
    ],
    features: [
      "Drag-and-drop job scheduling with conflict detection",
      "Real-time status updates visible to dispatchers and technicians",
      "Role-based views so technicians only see relevant assignments",
      "Audit history for every schedule change",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "AWS"],
    outcome:
      "Dispatchers moved off the shared spreadsheet entirely within the first two weeks of rollout, and schedule changes are now visible to the whole team instantly instead of via group chat.",
  },
  {
    slug: "subscription-fitness-mobile-app",
    title: "A cross-platform app for a subscription fitness program",
    summary:
      "A single Flutter codebase powering the iOS and Android app for a subscription-based training program, with offline workout tracking and in-app billing.",
    serviceSlugs: ["mobile-app-development", "flutter-app-development", "saas-product-development"],
    industry: "Health and fitness",
    challenge:
      "The program needed an app that worked reliably in gyms with poor signal, supported recurring subscriptions, and didn't require maintaining two separate native codebases on a limited budget.",
    solution:
      "A Flutter app shares one codebase across iOS and Android, stores workout data locally so tracking keeps working offline, and syncs once connectivity returns.",
    process: [
      "Prototyped the core workout-logging flow first, since offline reliability was the highest-risk requirement",
      "Validated the offline sync approach with a small group of real users training in low-signal gyms",
      "Integrated subscription billing once the core experience was stable",
      "Ran platform-specific QA passes on both iOS and Android before release",
    ],
    features: [
      "Offline-first workout logging with automatic background sync",
      "In-app subscription billing and plan management",
      "Push notifications for scheduled sessions",
      "Shared design system across iOS and Android from one codebase",
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Node.js"],
    outcome:
      "A single engineering team shipped and maintains both platforms from one codebase, which kept ongoing feature development on one release cadence instead of two.",
  },
  {
    slug: "b2b-saas-billing-rebuild",
    title: "Rebuilding a B2B SaaS product's billing and permissions layer",
    summary:
      "A multi-tenant billing and role-permissions overhaul for a growing SaaS product that had outgrown its original single-tenant design.",
    serviceSlugs: ["saas-product-development", "custom-software-development", "api-development-integration"],
    industry: "B2B SaaS",
    challenge:
      "The product was originally built for one account per customer. As larger customers signed up wanting multiple teams and seat-based billing, the existing data model couldn't represent that without risky workarounds.",
    solution:
      "A multi-tenant data model with organization-level roles and seat-based billing, migrated in stages behind feature flags so existing customers were never disrupted mid-migration.",
    process: [
      "Audited the existing single-tenant schema and mapped every place it assumed one account per customer",
      "Designed the multi-tenant model and a migration path that could run gradually, account by account",
      "Built seat-based billing on top of the new model once the tenant structure was stable",
      "Migrated existing customers in batches, monitoring for billing discrepancies at each stage",
    ],
    features: [
      "Organization and team hierarchy with role-based permissions",
      "Seat-based billing with prorated upgrades and downgrades",
      "Zero-downtime migration path from the legacy single-tenant schema",
      "Admin dashboard for usage and billing visibility",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis"],
    outcome:
      "The product could sell to multi-team customers without the custom one-off contracts the sales team previously had to negotiate around the platform's limitations.",
  },
  {
    slug: "direct-to-consumer-storefront-replatform",
    title: "Replatforming a direct-to-consumer storefront ahead of a product launch",
    summary:
      "A performance-focused rebuild of a direct-to-consumer storefront, timed to a seasonal product launch with a hard, unmovable release date.",
    serviceSlugs: ["ecommerce-development", "website-development", "search-engine-optimization"],
    industry: "Retail and e-commerce",
    challenge:
      "The existing storefront was slow enough on mobile that checkout abandonment was a known problem, and the business had a fixed launch date tied to a seasonal campaign that couldn't move.",
    solution:
      "A replatformed storefront built for fast first paint on mobile, with checkout simplified to reduce the steps between cart and confirmation, launched with margin before the campaign date.",
    process: [
      "Set a hard code-freeze date two weeks before launch, working backward from the fixed campaign date",
      "Rebuilt the highest-traffic pages (home, category, checkout) first and validated performance before touching the rest",
      "Ran load testing against expected campaign traffic ahead of launch",
      "Kept the legacy storefront live as a fallback until the new one had run cleanly through one full sales cycle",
    ],
    features: [
      "Server-rendered storefront optimized for mobile Core Web Vitals",
      "Simplified checkout flow with fewer steps to purchase",
      "Structured data for products to support search visibility",
      "Load-tested for seasonal campaign traffic",
    ],
    techStack: ["Next.js", "TypeScript", "Stripe", "Vercel"],
    outcome:
      "The storefront launched on schedule ahead of the campaign date and handled the seasonal traffic spike without the checkout slowdowns the previous platform was known for.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((item) => item.slug === slug);
}
