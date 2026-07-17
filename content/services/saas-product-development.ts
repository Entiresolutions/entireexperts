import type { ServiceContent } from "@/content/services/types";

export const saasProductDevelopment: ServiceContent = {
  slug: "saas-product-development",
  name: "SaaS Product Development",
  seoTitle: "SaaS Product Development Company",
  metaDescription:
    "SaaS product development from MVP through multi-tenant scale — architecture, billing, and permissions built to support growth without a rebuild.",
  h1: "SaaS products built so the architecture doesn't need a rebuild at scale",
  overview:
    "Building a SaaS product means making a handful of architecture decisions early that are expensive to change later — multi-tenancy, permissions, and billing chief among them. We help scope the smallest MVP that answers your riskiest open question first, then build the underlying architecture to support the multi-tenant, multi-team product you'll need once that MVP validates.",
  problems: [
    "The product was originally built for one account per customer and can't represent teams or seats",
    "An MVP needs to launch on a tight budget without accumulating technical debt that blocks the next round of features",
    "Billing and permissions need to change from flat-rate to seat- or usage-based pricing",
    "Onboarding new customers currently requires manual setup that doesn't scale",
  ],
  deliverables: [
    "A multi-tenant architecture with organization- and team-level data isolation",
    "Role-based permissions supporting multiple users per customer account",
    "Billing integration supporting seat-based or usage-based pricing",
    "Self-service onboarding so new customers don't require manual setup",
  ],
  features: [
    "Organization and team hierarchy with configurable roles",
    "Usage tracking feeding directly into billing and admin reporting",
    "Feature flagging to support gradual rollouts and plan-based access",
    "An admin dashboard for internal visibility into accounts and usage",
  ],
  technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis", "AWS"],
  process: [
    { title: "Scope the MVP around the riskiest assumption", description: "We identify what needs validating first and build only that, deferring secondary features." },
    { title: "Design multi-tenancy and permissions early", description: "These are the two decisions most expensive to change later, so they're addressed before feature work begins." },
    { title: "Build in iterations with real users", description: "Feedback from real usage shapes the roadmap more than internal debate about future features." },
    { title: "Plan for the first 90 days post-launch", description: "Engineering time is reserved for the adjustments that come from real usage, not just new features." },
  ],
  industries: ["Professional services", "Fintech", "Education & EdTech", "Healthcare"],
  benefits: [
    "An architecture that supports growth without a costly rebuild",
    "Billing and permissions that adapt as your pricing model matures",
    "Faster onboarding for new customers without manual setup",
    "A product built around validated assumptions instead of guesswork",
  ],
  faqs: [
    {
      question: "We already have an MVP — can you take over from here?",
      answer:
        "Yes. We start with an architecture review to identify what needs to change before scaling, particularly around multi-tenancy and permissions if the MVP was built for single accounts.",
    },
    {
      question: "How do you decide what goes into the MVP?",
      answer:
        "By identifying the riskiest open question about whether people will actually use and pay for the core workflow, then building the smallest version that answers it — not the full long-term feature list.",
    },
    {
      question: "Do you handle billing integration?",
      answer:
        "Yes, including seat-based, usage-based, and flat-rate models, and migrating between pricing models as the product matures.",
    },
  ],
  relatedServiceSlugs: ["custom-software-development", "web-application-development", "api-development-integration"],
};
