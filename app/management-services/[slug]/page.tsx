import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllManagementServiceSlugs,
  getManagementServiceBySlug,
  getRelatedManagementServices,
} from "@/content/management-services";
import { ServicePageTemplate } from "@/components/features/service/service-page-template";
import { buildMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return getAllManagementServiceSlugs().map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getManagementServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.seoTitle,
    description: service.metaDescription,
    path: `/management-services/${service.slug}`,
  });
}

export default async function ManagementServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getManagementServiceBySlug(slug);
  if (!service) notFound();

  return (
    <ServicePageTemplate
      service={service}
      relatedServices={getRelatedManagementServices(service)}
      basePath="/management-services"
      indexLabel="Management Services"
      techSectionLabel="Tools & platforms we use"
      ctaHeading={`Ready to talk through your ${service.name.toLowerCase()} needs?`}
      secondaryCtaLabel="Talk to our team"
    />
  );
}
