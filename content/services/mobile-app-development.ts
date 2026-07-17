import type { ServiceContent } from "@/content/services/types";

export const mobileAppDevelopment: ServiceContent = {
  slug: "mobile-app-development",
  name: "Mobile App Development",
  seoTitle: "Mobile App Development Company",
  metaDescription:
    "Mobile app development for iOS and Android — native or cross-platform, scoped to what your app actually needs rather than a default technology choice.",
  h1: "Mobile apps scoped to what your users actually need, on the platform that fits",
  overview:
    "Every mobile project starts with a platform decision that's easy to get wrong by defaulting to whatever's trendiest rather than what the app requires. We scope that decision during discovery — native iOS and Android, or a single Flutter codebase — based on your hardware requirements, timeline, and how many platforms you need to maintain long term, then build and ship the app end to end, including app store submission.",
  problems: [
    "An app idea hasn't been scoped into a platform decision or realistic budget yet",
    "An existing app has quality or performance issues affecting store ratings",
    "Two separate native codebases have become expensive to keep at feature parity",
    "App store submission and review requirements are unfamiliar territory",
  ],
  deliverables: [
    "A scoped technical plan covering platform choice, backend needs, and offline behavior",
    "A published app on the App Store and/or Google Play, including store listing assets",
    "Push notification and analytics integration",
    "Crash reporting and monitoring configured before launch",
  ],
  features: [
    "Offline-tolerant data handling where connectivity can't be guaranteed",
    "Biometric authentication and secure local storage where required",
    "In-app purchases or subscription billing where applicable",
    "Accessibility support matching platform conventions on each OS",
  ],
  technologies: ["Flutter", "Swift", "Kotlin", "TypeScript", "Firebase", "Node.js"],
  process: [
    { title: "Scope the platform decision", description: "We evaluate native versus Flutter against your specific requirements before committing to either." },
    { title: "Prototype the highest-risk screen", description: "Whatever part of the app is most technically uncertain gets built and validated first." },
    { title: "Build with real device testing", description: "Testing happens on physical devices throughout, not only in a simulator." },
    { title: "Submit and support launch", description: "We handle app store submission requirements and stay available through the first release cycle." },
  ],
  industries: ["Health and fitness", "Logistics & Field Services", "Education & EdTech", "E-commerce & Retail"],
  benefits: [
    "A platform decision based on your app's actual requirements, not a default preference",
    "One team accountable for the app end to end, including store submission",
    "Crash and performance monitoring in place from the first release",
    "A codebase structured for ongoing feature development after launch",
  ],
  faqs: [
    {
      question: "Should we build native or use Flutter?",
      answer:
        "It depends on how much your app relies on platform-specific hardware or APIs, and whether one team will maintain it long-term. See our dedicated pages on Android, iOS, and Flutter development, or ask us directly during discovery — we'll give a specific recommendation, not a default answer.",
    },
    {
      question: "Do you handle app store submission?",
      answer:
        "Yes, including preparing store listing assets, navigating platform review requirements, and handling any rejections that come back during review.",
    },
    {
      question: "Can you take over an app someone else built?",
      answer:
        "Yes. We start with a codebase audit to understand what exists before proposing whether to continue building on it or address specific problem areas first.",
    },
  ],
  relatedServiceSlugs: ["flutter-app-development", "ios-app-development", "android-app-development"],
};
