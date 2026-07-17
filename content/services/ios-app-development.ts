import type { ServiceContent } from "@/content/services/types";

export const iosAppDevelopment: ServiceContent = {
  slug: "ios-app-development",
  name: "iOS App Development",
  seoTitle: "iOS App Development Company",
  metaDescription:
    "Native iOS app development in Swift for apps that need tight platform integration, App Store performance standards, or Apple ecosystem features.",
  h1: "Native iOS apps built to Apple's standards, not just to pass review",
  overview:
    "Apple's platform review process and users both hold apps to a specific bar, and a native Swift build gives you full access to what iOS offers — App Clips, widgets, deep Apple ecosystem integration, and performance tuned specifically to Apple's hardware. We build native iOS apps for products where that level of platform integration is a genuine requirement, not a default preference.",
  problems: [
    "The app needs Apple ecosystem features — widgets, App Clips, Apple Watch companion apps",
    "Performance and animation smoothness need to match first-party Apple app standards",
    "An existing app has been rejected or flagged during App Store review",
    "The product needs to integrate tightly with iOS-specific frameworks like HealthKit or SiriKit",
  ],
  deliverables: [
    "A native iOS app built in Swift and SwiftUI following Apple's Human Interface Guidelines",
    "App Store submission, including navigating review requirements and metadata",
    "Device testing across current iPhone and iPad hardware",
    "Crash reporting and performance monitoring for production",
  ],
  features: [
    "Deep integration with Apple frameworks (HealthKit, SiriKit, WidgetKit) where relevant",
    "Smooth, platform-native animations and gesture handling",
    "Face ID and Touch ID authentication using native APIs",
    "iPad-specific layouts where the app needs to support tablets properly rather than a stretched phone view",
  ],
  technologies: ["Swift", "SwiftUI", "iOS SDK", "Firebase", "Core Data"],
  process: [
    { title: "Confirm native is the right call", description: "We validate the app's requirements genuinely need native iOS before committing to it over a cross-platform option." },
    { title: "Design to Apple's guidelines", description: "Interaction patterns follow Apple's Human Interface Guidelines so the app feels native, not adapted." },
    { title: "Build and test on real hardware", description: "Testing runs on current iPhone and iPad hardware throughout development, not only in the simulator." },
    { title: "Navigate App Store review", description: "We prepare submissions to minimize review rejections and handle any that come back." },
  ],
  industries: ["Health and fitness", "Professional services", "Education & EdTech"],
  benefits: [
    "Full access to Apple ecosystem features a cross-platform framework can't fully replicate",
    "Performance and animation quality tuned specifically to Apple hardware",
    "Fewer App Store review surprises, handled by a team that's navigated the process before",
    "Proper iPad support rather than a stretched phone layout",
  ],
  faqs: [
    {
      question: "When does native iOS make more sense than Flutter?",
      answer:
        "When the app depends on Apple-specific frameworks like HealthKit or SiriKit, or needs animation and interaction quality indistinguishable from a first-party Apple app. For most business apps without those specific needs, Flutter App Development covers both platforms from one codebase at a lower ongoing cost.",
    },
    {
      question: "Can you help with an app that's been rejected during App Store review?",
      answer:
        "Yes. We start by reviewing the specific rejection reason against Apple's guidelines and address it directly rather than resubmitting unchanged.",
    },
    {
      question: "Do you build companion Apple Watch apps?",
      answer:
        "Yes, when the core iPhone app is being built or extended and a Watch companion is part of the scope.",
    },
  ],
  relatedServiceSlugs: ["android-app-development", "flutter-app-development", "mobile-app-development"],
};
