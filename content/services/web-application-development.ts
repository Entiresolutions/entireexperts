import type { ServiceContent } from "@/content/services/types";

export const webApplicationDevelopment: ServiceContent = {
  slug: "web-application-development",
  name: "Web Application Development",
  seoTitle: "Web Application Development Company",
  metaDescription:
    "Custom web application development for internal tools, customer portals, and multi-user platforms — built on React and Next.js with role-based access.",
  h1: "Web applications built for the people who use them daily",
  overview:
    "A web application is different from a marketing website in one important way: people use it repeatedly, for real work, often for hours at a time. That changes the design priorities — interaction speed, data consistency, and role-based access matter more than first-visit polish. We build applications around the specific tasks your users need to complete, not a generic dashboard template.",
  problems: [
    "Internal teams are working across several disconnected tools to complete one task",
    "An existing application has become slow or unreliable as usage and data volume grew",
    "Different user roles need different views into the same underlying data",
    "There's no clear audit trail for who changed what within the application",
  ],
  deliverables: [
    "A web application with authentication, role-based permissions, and audit logging",
    "A data model designed to hold up under real usage volume, not just a demo dataset",
    "Automated tests covering the application's core business logic",
    "Deployment infrastructure and monitoring configured before launch",
  ],
  features: [
    "Real-time updates where multiple users interact with shared data",
    "Role-based views so each user type sees only what's relevant to them",
    "Offline-tolerant forms that don't lose data on a dropped connection",
    "Exportable reporting for data your team already tracks manually",
  ],
  technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "Redis", "AWS"],
  process: [
    { title: "Map user roles and tasks", description: "Every distinct user type and the tasks they need to complete are identified before any screen is designed." },
    { title: "Design the core data model", description: "The data structure is designed around the relationships your business actually has, not a generic schema." },
    { title: "Build the highest-risk workflow first", description: "The most complex or most-used part of the application is built and validated before the rest." },
    { title: "QA against real usage patterns", description: "Testing covers concurrent use and edge cases, not just the happy path a demo would show." },
  ],
  industries: ["Logistics & Field Services", "Professional services", "Healthcare", "Fintech"],
  benefits: [
    "One system replacing several disconnected tools your team currently juggles",
    "Clear audit trails for compliance-sensitive workflows",
    "An application that stays fast as data volume and user count grow",
    "Role-based access so each user sees exactly what's relevant to their job",
  ],
  faqs: [
    {
      question: "How is a web application different from a website?",
      answer:
        "A website is mostly about presenting information to visitors. A web application is a tool people log into and use repeatedly to complete tasks, which puts more weight on data consistency, permissions, and interaction speed than on first-visit design polish.",
    },
    {
      question: "Can you build on top of our existing database or system?",
      answer:
        "Yes. We regularly build new application layers on top of an existing database or integrate with systems already in production, rather than starting from zero.",
    },
    {
      question: "What happens if usage grows faster than expected?",
      answer:
        "The data model and infrastructure are designed with growth in mind from the start, and our Cloud Solutions and DevOps services cover scaling the infrastructure as usage increases.",
    },
  ],
  relatedServiceSlugs: ["custom-software-development", "saas-product-development", "api-development-integration"],
};
