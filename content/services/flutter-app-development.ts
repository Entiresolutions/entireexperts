import type { ServiceContent } from "@/content/services/types";

export const flutterAppDevelopment: ServiceContent = {
  slug: "flutter-app-development",
  name: "Cross-Platform Flutter Development",
  seoTitle: "Flutter App Development Company",
  metaDescription:
    "Cross-platform Flutter app development — one codebase shipping to iOS and Android, built for business apps where two native codebases aren't worth the overhead.",
  h1: "One Flutter codebase, shipped to iOS and Android without the compromise",
  overview:
    "Most business apps — the ones built around forms, lists, dashboards, and API calls rather than deep platform integration — don't need two separate native codebases to feel good on both platforms. Flutter compiles one Dart codebase to iOS and Android, which halves the ongoing maintenance surface compared to native development, without a meaningful difference in performance for the majority of business use cases.",
  problems: [
    "Two native codebases have become expensive to keep at feature parity",
    "Budget doesn't support building and maintaining separate iOS and Android teams",
    "An app needs to ship on both platforms with a single, tight release cadence",
    "A previous cross-platform build feels visibly slower or less polished than a native app",
  ],
  deliverables: [
    "A single Flutter codebase shipping to both the App Store and Google Play",
    "A shared design system so both platforms stay visually consistent as the app grows",
    "Store submission for both platforms, including platform-specific listing requirements",
    "Crash reporting and analytics configured across both platforms from one integration",
  ],
  features: [
    "Native-feeling navigation and animation tuned per platform where conventions differ",
    "Offline-first data handling with background sync",
    "Push notifications and deep linking working consistently across both platforms",
    "A single codebase that keeps new features shipping to both platforms at once",
  ],
  technologies: ["Flutter", "Dart", "Firebase", "Node.js", "REST & GraphQL APIs"],
  process: [
    { title: "Validate Flutter fits the requirements", description: "We check the app doesn't depend on hardware access Flutter's plugin ecosystem can't yet cover well." },
    { title: "Build the core workflow first", description: "The primary user journey is built and tested on both platforms before secondary features." },
    { title: "Test on real devices, both platforms", description: "QA runs on physical iOS and Android devices throughout, not just a single reference device per platform." },
    { title: "Submit to both stores together", description: "Coordinated submission keeps the release timeline aligned across platforms instead of staggered." },
  ],
  industries: ["Health and fitness", "Logistics & Field Services", "Education & EdTech", "E-commerce & Retail"],
  benefits: [
    "One engineering team and one release cadence instead of two parallel codebases",
    "Meaningfully lower long-term maintenance cost than dual native development",
    "Feature parity across iOS and Android by default, not by extra coordination effort",
    "A design system shared across platforms, keeping the app visually consistent",
  ],
  faqs: [
    {
      question: "Does Flutter perform as well as native apps?",
      answer:
        "For the large majority of business apps — anything built around forms, lists, dashboards, and API calls — the performance difference isn't something users notice. Apps leaning heavily on advanced hardware access are the exception; see our Mobile App Development page for how we evaluate that during discovery.",
    },
    {
      question: "Can an existing native app be migrated to Flutter?",
      answer:
        "Yes, though we typically recommend evaluating this against a full rewrite cost first — for smaller apps, rebuilding in Flutter is often comparable in cost to migrating incrementally.",
    },
    {
      question: "How quickly does Flutter support new OS features?",
      answer:
        "The plugin ecosystem typically catches up to major new iOS and Android features within weeks of release, which is fast enough for the large majority of business apps that aren't shipping a feature tied to launch-day platform exclusivity.",
    },
  ],
  relatedServiceSlugs: ["mobile-app-development", "ios-app-development", "android-app-development"],
};
