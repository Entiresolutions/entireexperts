import type { ServiceContent } from "@/content/services/types";

export const apiDevelopmentIntegration: ServiceContent = {
  slug: "api-development-integration",
  name: "API Development & Integration",
  seoTitle: "API Development & Integration Services",
  metaDescription:
    "API development and third-party integration services — connecting internal systems, payment providers, and external platforms reliably.",
  h1: "APIs and integrations built to fail safely, not silently",
  overview:
    "Most integration problems don't show up on day one — they show up months later, when a third-party API changes its response format or rate limits a burst of requests during your busiest period. We build APIs and integrations with explicit error handling, retries, and monitoring from the start, so failures are visible and recoverable instead of silent.",
  problems: [
    "Two or more systems need to share data but don't currently talk to each other",
    "An existing integration fails silently and problems are only noticed when a customer complains",
    "A public or partner-facing API needs to be built and documented",
    "Rate limits or authentication requirements from a third-party service are causing reliability issues",
  ],
  deliverables: [
    "A documented API with clear versioning and authentication",
    "Integration with the specific third-party systems your business depends on",
    "Retry logic and error handling for calls to unreliable or rate-limited services",
    "Monitoring and alerting so integration failures are caught immediately",
  ],
  features: [
    "RESTful or GraphQL APIs, chosen based on how the data is consumed",
    "Webhook handling for real-time updates from third-party platforms",
    "Rate limit and quota management for outbound API calls",
    "API documentation generated and kept in sync with the implementation",
  ],
  technologies: ["Node.js", "TypeScript", "PostgreSQL", "REST & GraphQL", "Redis"],
  process: [
    { title: "Map the systems and data flow", description: "We document what data needs to move where, and how often, before designing the integration." },
    { title: "Design for failure, not just the happy path", description: "Retry logic, timeouts, and fallback behavior are designed alongside the core integration, not added afterward." },
    { title: "Build and test against real third-party behavior", description: "Testing includes rate limits, malformed responses, and downtime scenarios, not just a clean sandbox environment." },
    { title: "Monitor after launch", description: "Integration health is monitored so failures are caught immediately rather than discovered through a customer complaint." },
  ],
  industries: ["Fintech", "Logistics & Field Services", "Professional services", "Healthcare"],
  benefits: [
    "Integration failures surfaced through monitoring instead of customer complaints",
    "Systems that stay in sync without manual data re-entry",
    "A documented API partners and internal teams can build against confidently",
    "Reliability that holds up under rate limits and third-party outages",
  ],
  faqs: [
    {
      question: "Can you integrate with a specific system we already use?",
      answer:
        "In most cases, yes — we evaluate the target system's API during discovery and flag any real limitations before committing to a scope.",
    },
    {
      question: "What happens if a third-party API goes down or changes?",
      answer:
        "Retry logic and monitoring are built in from the start so an outage or breaking change is caught and alerted on, rather than failing silently until a customer notices.",
    },
    {
      question: "Do you document the API for other teams to use?",
      answer:
        "Yes, API documentation is generated and kept current as part of delivery, not written once and left to go stale.",
    },
  ],
  relatedServiceSlugs: ["custom-software-development", "cloud-solutions", "saas-product-development"],
};
