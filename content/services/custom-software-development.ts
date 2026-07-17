import type { ServiceContent } from "@/content/services/types";

export const customSoftwareDevelopment: ServiceContent = {
  slug: "custom-software-development",
  name: "Custom Software Development",
  seoTitle: "Custom Software Development Company",
  metaDescription:
    "Custom software development for workflows off-the-shelf tools can't handle — internal tools, automation, and systems built around how your team actually works.",
  h1: "Custom software built around your workflow, not the other way around",
  overview:
    "Off-the-shelf software is built for the average user of a broad category, which means it fits your business approximately — right up until it doesn't. Custom software development starts from your actual process instead, so the tool matches the work rather than forcing the work to match the tool. We build systems for the specific operational gaps a generic product can't close: internal tools, workflow automation, and platforms that need to talk to systems you already run.",
  problems: [
    "A critical process still runs on spreadsheets and manual handoffs because no off-the-shelf tool fits it",
    "An existing system has been customized so heavily that upgrades and support are no longer realistic",
    "Multiple disconnected tools require manual re-entry of the same data between them",
    "Growth has exposed limits in a system that was never designed for the scale you're at now",
  ],
  deliverables: [
    "A documented technical architecture reviewed with your team before development starts",
    "Working software delivered in iterations, with a demo at the end of each one",
    "Automated test coverage for core business logic",
    "Deployment pipeline and infrastructure configuration, handed over in full",
  ],
  features: [
    "Role-based access control matched to how your organization is actually structured",
    "Integrations with the systems you already depend on",
    "Audit trails for any workflow involving approvals or compliance",
    "Admin tooling so your team can manage data without engineering support",
  ],
  technologies: ["TypeScript", "Node.js", "React", "PostgreSQL", "AWS", "Docker"],
  process: [
    { title: "Map the current process", description: "We document how the work happens today, including the workarounds, before designing anything." },
    { title: "Design the data model", description: "The underlying structure is designed to hold up as the business grows, not just to fit the first version." },
    { title: "Build in short iterations", description: "You see working software on a predictable cadence instead of a single delivery at the end." },
    { title: "Hand off with documentation", description: "Architecture decisions and operational runbooks are documented so your team isn't dependent on us to maintain it." },
  ],
  industries: ["Field services", "Professional services", "Fintech", "Healthcare"],
  benefits: [
    "A system that matches how your team actually works, instead of a workaround for one that doesn't",
    "Full ownership of the code and infrastructure once delivered",
    "Fewer manual handoffs and less duplicate data entry",
    "A foundation that can grow with the business instead of needing a rebuild",
  ],
  faqs: [
    {
      question: "How is custom software different from configuring an off-the-shelf platform?",
      answer:
        "Configuration adjusts settings within the limits of someone else's product. Custom software is designed around your process from the data model up, so there's no ceiling imposed by another company's roadmap.",
    },
    {
      question: "Do you build on top of an existing system, or only from scratch?",
      answer:
        "Both. We regularly extend or partially rebuild existing systems, particularly where a specific module has outgrown what the rest of the platform can support.",
    },
    {
      question: "How do you keep scope from expanding mid-project?",
      answer:
        "Discovery produces a written scope broken into concrete pieces before a price is attached, and changes to that scope are discussed and priced explicitly rather than absorbed silently.",
    },
  ],
  relatedServiceSlugs: ["web-application-development", "api-development-integration", "saas-product-development"],
};
