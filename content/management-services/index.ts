import type { ServiceContent } from "@/content/services/types";
import { callCenterServices } from "@/content/management-services/call-center-services";
import { customerSupportOutsourcing } from "@/content/management-services/customer-support-outsourcing";
import { medicalBillingServices } from "@/content/management-services/medical-billing-services";
import { dmeBillingServices } from "@/content/management-services/dme-billing-services";
import { truckingDispatchServices } from "@/content/management-services/trucking-dispatch-services";
import { backOfficeDataEntryServices } from "@/content/management-services/back-office-data-entry-services";

export const managementServices: ServiceContent[] = [
  callCenterServices,
  customerSupportOutsourcing,
  medicalBillingServices,
  dmeBillingServices,
  truckingDispatchServices,
  backOfficeDataEntryServices,
];

export function getManagementServiceBySlug(slug: string): ServiceContent | undefined {
  return managementServices.find((service) => service.slug === slug);
}

export function getAllManagementServiceSlugs(): string[] {
  return managementServices.map((service) => service.slug);
}

export function getRelatedManagementServices(service: ServiceContent): ServiceContent[] {
  return service.relatedServiceSlugs
    .map((slug) => getManagementServiceBySlug(slug))
    .filter((item): item is ServiceContent => Boolean(item));
}
