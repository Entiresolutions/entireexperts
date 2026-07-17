export type FaqEntry = {
  question: string;
  answer: string;
  keywords: string[];
};

/**
 * General, site-wide FAQ used on /faq, the homepage FAQ section, and as the
 * chatbot's knowledge base. Service-specific FAQs live alongside each entry
 * in content/services/*.ts instead of being duplicated here.
 */
export const generalFaqs: FaqEntry[] = [
  {
    question: "What kinds of projects does Entire Expert take on?",
    answer:
      "We work on custom software, web platforms, mobile apps, SaaS products, and AI-assisted automation for companies that need a dedicated engineering team rather than a one-off contractor. Most engagements start with a clearly scoped product or feature and grow into an ongoing partnership.",
    keywords: ["project", "work on", "scope", "what do you do", "services"],
  },
  {
    question: "How does a typical engagement start?",
    answer:
      "We begin with a short discovery call to understand the problem you're solving, who it's for, and any constraints (timeline, budget, existing systems). From there we send a written proposal covering scope, milestones, and cost before any development work begins.",
    keywords: ["start", "begin", "onboarding", "kick off", "discovery"],
  },
  {
    question: "Do you work with startups as well as established companies?",
    answer:
      "Yes. Startups usually come to us to build a first version of a product quickly and validate it with real users; established companies usually come to us to modernize an existing system, add a new capability, or take pressure off an internal team during a busy release cycle. The engagement model flexes to fit either case.",
    keywords: ["startup", "enterprise", "established", "company size"],
  },
  {
    question: "How is a project priced?",
    answer:
      "Fixed-scope work (a defined feature set with a clear finish line) is quoted as a fixed price after discovery. Ongoing work — a dedicated team building a product over several months — is billed on a monthly retainer tied to agreed capacity. We'll recommend whichever model fits the shape of your project during the quote conversation.",
    keywords: ["price", "cost", "budget", "how much", "quote", "estimate"],
  },
  {
    question: "Who owns the code and intellectual property once the project is done?",
    answer:
      "You do. Source code, design files, and infrastructure configuration are handed over in full, and our standard agreement assigns intellectual property in the delivered work to you on payment.",
    keywords: ["ownership", "ip", "intellectual property", "source code", "who owns"],
  },
  {
    question: "Can you take over an existing codebase or work alongside our in-house team?",
    answer:
      "Yes. We regularly join projects mid-flight — auditing an existing codebase, fixing what's slowing releases down, and then either handing it back documented or continuing as an embedded extension of your team.",
    keywords: ["existing codebase", "legacy", "in-house team", "take over", "join"],
  },
  {
    question: "What does your development process look like?",
    answer:
      "Work is broken into short iterations with a demo at the end of each one, so you see working software regularly instead of a single delivery at the end. See the Our Process page for the full breakdown of discovery, design, build, QA, and launch.",
    keywords: ["process", "methodology", "agile", "sprint", "how do you work"],
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes, through a maintenance and support arrangement covering monitoring, dependency updates, bug fixes, and small enhancements. Some clients keep the same team on for continued feature development instead.",
    keywords: ["support", "maintenance", "after launch", "post launch", "ongoing"],
  },
  {
    question: "Which technologies do you build with?",
    answer:
      "Our core stack centers on TypeScript across the frontend and backend, React and Next.js for web, Flutter and native tooling for mobile, and common cloud platforms (AWS, Google Cloud, Azure) for infrastructure. See the Technologies page for the full list and how we choose a stack per project.",
    keywords: ["technology", "stack", "tools", "language", "framework"],
  },
  {
    question: "How do I get an estimate for my project?",
    answer:
      "Use the Request a Quote page and tell us about the service you need, your budget range, and timeline. We'll follow up within one business day to schedule a discovery call and put together a written estimate.",
    keywords: ["quote", "estimate", "get started", "how do i", "request"],
  },
];
