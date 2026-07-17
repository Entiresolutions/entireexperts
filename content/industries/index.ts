import type { Industry } from "@/content/industries/types";

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    summary:
      "Patient-facing tools and internal systems built with the data sensitivity and reliability healthcare requires.",
    seoTitle: "Healthcare Software Development Services",
    metaDescription:
      "Custom healthcare software, patient portals, and internal tooling built with careful attention to data handling and reliability.",
    challenges: [
      "Legacy systems that don't integrate with newer patient-facing tools",
      "Manual scheduling and intake processes that don't scale with patient volume",
      "Reporting requirements that existing off-the-shelf tools can't fully cover",
    ],
    relevantServiceSlugs: ["custom-software-development", "web-application-development", "api-development-integration"],
  },
  {
    slug: "fintech",
    name: "Fintech",
    summary: "Transaction-heavy platforms where correctness, auditability, and uptime aren't negotiable.",
    seoTitle: "Fintech Software Development Services",
    metaDescription:
      "Custom fintech platforms and financial tooling built for correctness, auditability, and reliable uptime.",
    challenges: [
      "Reconciling transaction data across multiple providers without discrepancies",
      "Scaling infrastructure to handle transaction volume spikes safely",
      "Building audit trails that satisfy compliance reviews without slowing the product down",
    ],
    relevantServiceSlugs: ["custom-software-development", "api-development-integration", "cloud-solutions"],
  },
  {
    slug: "ecommerce-retail",
    name: "E-commerce & Retail",
    summary: "Storefronts and back-office systems built to convert traffic and hold up under seasonal load.",
    seoTitle: "E-commerce & Retail Software Development Services",
    metaDescription: "Custom e-commerce platforms, storefronts, and retail back-office systems built to convert and scale.",
    challenges: [
      "Checkout abandonment driven by slow page loads on mobile",
      "Inventory and order systems that don't talk to each other in real time",
      "Seasonal traffic spikes that existing infrastructure wasn't built to absorb",
    ],
    relevantServiceSlugs: ["ecommerce-development", "website-development", "search-engine-optimization"],
  },
  {
    slug: "logistics-field-services",
    name: "Logistics & Field Services",
    summary: "Scheduling, dispatch, and tracking tools for teams coordinating work outside an office.",
    seoTitle: "Logistics & Field Service Software Development",
    metaDescription:
      "Custom dispatch, scheduling, and field service software built to replace spreadsheets and disconnected tools.",
    challenges: [
      "Scheduling and dispatch still running through spreadsheets or group chats",
      "No real-time visibility into technician or driver location and status",
      "Paper-based job records that make reporting slow and error-prone",
    ],
    relevantServiceSlugs: ["custom-software-development", "web-application-development", "mobile-app-development"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    summary: "Client and case management tooling for firms that bill by time, deliverable, or retainer.",
    seoTitle: "Professional Services Software Development",
    metaDescription:
      "Custom client management, billing, and workflow tools for professional services firms.",
    challenges: [
      "Client and project data spread across spreadsheets, email, and a generic CRM that doesn't fit the workflow",
      "Manual time tracking and invoicing that eats into billable hours",
      "No single view of project status across the team",
    ],
    relevantServiceSlugs: ["custom-software-development", "saas-product-development", "ui-ux-design"],
  },
  {
    slug: "education-edtech",
    name: "Education & EdTech",
    summary: "Learning platforms and administrative tools built for both instructors and the students they teach.",
    seoTitle: "Education & EdTech Software Development",
    metaDescription:
      "Custom learning platforms, course tools, and administrative systems for education and EdTech products.",
    challenges: [
      "Course content and student progress tracking spread across disconnected tools",
      "Platforms that work well on desktop but break down on the mobile devices students actually use",
      "Administrative reporting that takes manual effort to compile each term",
    ],
    relevantServiceSlugs: ["saas-product-development", "web-application-development", "mobile-app-development"],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
