import type { ServiceContent } from "@/content/services/types";

export const uiUxDesign: ServiceContent = {
  slug: "ui-ux-design",
  name: "UI/UX Design",
  seoTitle: "UI/UX Design Services",
  metaDescription:
    "UI/UX design for web and mobile products, grounded in how your users actually complete tasks — wireframes, prototypes, and design systems.",
  h1: "Interfaces designed around how your users actually work",
  overview:
    "Good interface design isn't about following the latest visual trend — it's about reducing the number of decisions and steps between a user and the task they came to complete. We design around real user workflows, validate the riskiest screens with clickable prototypes before development starts, and deliver a design system that keeps the product consistent as new features get added.",
  problems: [
    "Users abandon a workflow partway through because the interface is confusing",
    "A product's visual design doesn't match the credibility of the business behind it",
    "New features are being designed inconsistently because there's no shared design system",
    "Accessibility hasn't been considered and some users can't complete key tasks",
  ],
  deliverables: [
    "User flow diagrams for the core tasks your product needs to support",
    "Wireframes and a clickable prototype for validation before development",
    "A design system of reusable components, tokens, and interaction patterns",
    "Accessibility review against WCAG 2.2 AA guidelines",
  ],
  features: [
    "Design systems built as reusable component libraries, not static mockups",
    "Prototypes clickable enough for real user testing before development starts",
    "Responsive layouts designed mobile-first where usage data supports it",
    "Accessible color contrast, focus states, and touch target sizing by default",
  ],
  technologies: ["Figma", "Tailwind CSS", "React", "Framer Motion"],
  process: [
    { title: "Map real user workflows", description: "Design starts from how users actually try to complete a task, not an assumed ideal path." },
    { title: "Wireframe before visual design", description: "Structure and flow are validated before any visual styling is applied." },
    { title: "Prototype and test the riskiest screens", description: "The most complex or highest-stakes interactions are validated with real users before development starts." },
    { title: "Deliver a design system, not just mockups", description: "Components and tokens are handed to engineering as a reusable system, keeping future features consistent." },
  ],
  industries: ["SaaS", "Professional services", "Healthcare", "E-commerce & Retail"],
  benefits: [
    "Fewer users abandoning a workflow partway through",
    "A visual design that matches the credibility of the business",
    "A design system that keeps new features visually consistent",
    "Interfaces that are usable by people relying on assistive technology",
  ],
  faqs: [
    {
      question: "Do you design without also building the product?",
      answer:
        "Yes, design engagements can stand alone, though many clients continue with us into development since the design system is built to hand off directly into a React or Flutter codebase.",
    },
    {
      question: "How do you validate designs before development starts?",
      answer:
        "Clickable prototypes are tested with a small group of real users on the highest-risk workflows, so structural problems are caught before any production code is written.",
    },
    {
      question: "Is accessibility included by default?",
      answer:
        "Yes — color contrast, focus states, and touch target sizing are addressed as part of the base design, not as a separate accessibility pass at the end.",
    },
  ],
  relatedServiceSlugs: ["website-development", "web-application-development", "mobile-app-development"],
};
