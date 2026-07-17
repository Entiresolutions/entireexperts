import type { ServiceContent } from "@/content/services/types";
import { customSoftwareDevelopment } from "@/content/services/custom-software-development";
import { websiteDevelopment } from "@/content/services/website-development";
import { webApplicationDevelopment } from "@/content/services/web-application-development";
import { mobileAppDevelopment } from "@/content/services/mobile-app-development";
import { androidAppDevelopment } from "@/content/services/android-app-development";
import { iosAppDevelopment } from "@/content/services/ios-app-development";
import { flutterAppDevelopment } from "@/content/services/flutter-app-development";
import { saasProductDevelopment } from "@/content/services/saas-product-development";
import { aiAutomationSolutions } from "@/content/services/ai-automation-solutions";
import { aiChatbotDevelopment } from "@/content/services/ai-chatbot-development";
import { ecommerceDevelopment } from "@/content/services/ecommerce-development";
import { uiUxDesign } from "@/content/services/ui-ux-design";
import { apiDevelopmentIntegration } from "@/content/services/api-development-integration";
import { cloudSolutions } from "@/content/services/cloud-solutions";
import { devopsAndDeployment } from "@/content/services/devops-and-deployment";
import { softwareMaintenanceSupport } from "@/content/services/software-maintenance-support";
import { searchEngineOptimization } from "@/content/services/search-engine-optimization";
import { digitalMarketing } from "@/content/services/digital-marketing";

export const services: ServiceContent[] = [
  customSoftwareDevelopment,
  websiteDevelopment,
  webApplicationDevelopment,
  mobileAppDevelopment,
  androidAppDevelopment,
  iosAppDevelopment,
  flutterAppDevelopment,
  saasProductDevelopment,
  aiAutomationSolutions,
  aiChatbotDevelopment,
  ecommerceDevelopment,
  uiUxDesign,
  apiDevelopmentIntegration,
  cloudSolutions,
  devopsAndDeployment,
  softwareMaintenanceSupport,
  searchEngineOptimization,
  digitalMarketing,
];

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}

export function getRelatedServices(service: ServiceContent): ServiceContent[] {
  return service.relatedServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((item): item is ServiceContent => Boolean(item));
}
