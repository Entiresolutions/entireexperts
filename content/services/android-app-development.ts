import type { ServiceContent } from "@/content/services/types";

export const androidAppDevelopment: ServiceContent = {
  slug: "android-app-development",
  name: "Android App Development",
  seoTitle: "Android App Development Company",
  metaDescription:
    "Native Android app development in Kotlin for apps that need deep platform integration, hardware access, or Android-specific performance tuning.",
  h1: "Native Android apps for when the platform details actually matter",
  overview:
    "Native Android development earns its cost when an app needs something a cross-platform framework can't fully deliver on day one — deep integration with Android-specific APIs, background processing tuned to a device's power management, or hardware access that goes beyond what a plugin ecosystem covers. We build in Kotlin against current Android platform guidelines, with the fragmentation of device sizes and OS versions handled as a first-class concern, not an afterthought.",
  problems: [
    "The app depends on hardware or platform APIs a cross-platform framework doesn't fully support yet",
    "Performance needs to be tuned specifically for Android's memory and battery model",
    "An existing Android app has degraded across OS versions and device manufacturers",
    "The app needs to feel indistinguishable from a first-party Google app",
  ],
  deliverables: [
    "A native Android app built in Kotlin following current Material Design guidance",
    "Device and OS-version compatibility testing across common configurations",
    "Play Store listing preparation and submission",
    "Crash reporting and performance monitoring configured for production",
  ],
  features: [
    "Background processing tuned to Android's battery and memory constraints",
    "Deep linking and Android App Links configured correctly",
    "Biometric authentication using platform-native APIs",
    "Adaptive layouts across phone, tablet, and foldable form factors",
  ],
  technologies: ["Kotlin", "Jetpack Compose", "Android SDK", "Firebase", "Room"],
  process: [
    { title: "Confirm native is the right call", description: "We validate that the app's requirements genuinely need native Android rather than defaulting to it." },
    { title: "Design for Android conventions", description: "Navigation and interaction patterns follow Android's platform conventions rather than a generic cross-platform design." },
    { title: "Test across real device fragmentation", description: "Testing covers a representative spread of manufacturers, screen sizes, and OS versions, not a single reference device." },
    { title: "Submit and monitor", description: "We handle Play Store submission and monitor crash and performance data through the first release." },
  ],
  industries: ["Logistics & Field Services", "Health and fitness", "E-commerce & Retail"],
  benefits: [
    "Full access to Android-specific APIs and hardware without a plugin dependency",
    "Performance tuned to Android's memory and battery model specifically",
    "An app that follows Android's own design conventions, not a cross-platform compromise",
    "Testing that accounts for real device fragmentation across manufacturers",
  ],
  faqs: [
    {
      question: "When does native Android make more sense than Flutter?",
      answer:
        "When the app depends on hardware integration or the very latest platform APIs on release day, or when it needs to be indistinguishable from a first-party Google app. For most business apps, our Flutter App Development service covers the same outcome for less ongoing maintenance across two platforms.",
    },
    {
      question: "How do you handle Android device fragmentation?",
      answer:
        "Testing is planned around a representative spread of screen sizes, manufacturers, and supported OS versions, defined during discovery based on your actual user base rather than testing on a single device.",
    },
    {
      question: "Can this share a backend with an iOS app?",
      answer:
        "Yes — the backend is typically shared across platforms regardless of whether the client apps are native or Flutter, so building native Android doesn't mean duplicating server-side work.",
    },
  ],
  relatedServiceSlugs: ["ios-app-development", "flutter-app-development", "mobile-app-development"],
};
