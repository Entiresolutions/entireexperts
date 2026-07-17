export type TechCategory = {
  category: string;
  description: string;
  items: string[];
};

export const technologyCategories: TechCategory[] = [
  {
    category: "Frontend",
    description: "For interfaces that need to feel fast and stay maintainable as they grow.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    description: "Server-side platforms chosen for the specific throughput and integration needs of the project.",
    items: ["Node.js", "TypeScript", "Python", "PostgreSQL", "Redis"],
  },
  {
    category: "Mobile",
    description: "Native performance where it matters, one codebase where it doesn't need to be two.",
    items: ["Flutter", "Dart", "Swift", "Kotlin", "React Native"],
  },
  {
    category: "Cloud & DevOps",
    description: "Infrastructure that scales predictably and is observable when something goes wrong.",
    items: ["AWS", "Google Cloud", "Docker", "GitHub Actions", "Terraform"],
  },
  {
    category: "AI & Automation",
    description: "Applied where it removes real manual work, not added for its own sake.",
    items: ["OpenAI & Anthropic APIs", "LangChain", "Python", "Vector databases", "Workflow automation tools"],
  },
  {
    category: "Quality & Delivery",
    description: "Tooling that catches regressions before your users do.",
    items: ["Vitest", "Playwright", "ESLint", "Sentry", "CI/CD pipelines"],
  },
];
