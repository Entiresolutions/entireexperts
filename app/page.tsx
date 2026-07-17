import type { Metadata } from "next";
import { JsonLd } from "@/components/ui/json-ld";
import { webPageSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";
import { Hero } from "@/components/features/home/hero";
import { TrustBar } from "@/components/features/home/trust-bar";
import { CoreServices } from "@/components/features/home/core-services";
import { WhyChooseUs } from "@/components/features/home/why-choose-us";
import { FeaturedProjects } from "@/components/features/home/featured-projects";
import { TechStackSection } from "@/components/features/home/tech-stack-section";
import { ProcessSection } from "@/components/features/home/process-section";
import { IndustriesSection } from "@/components/features/home/industries-section";
import { StatsSection } from "@/components/features/home/stats-section";
import { AiCapabilities } from "@/components/features/home/ai-capabilities";
import { TestimonialsSection } from "@/components/features/home/testimonials-section";
import { LatestBlogPosts } from "@/components/features/home/latest-blog-posts";
import { FaqSection } from "@/components/features/home/faq-section";
import { FinalCta } from "@/components/features/home/final-cta";

const title = "Custom Software Development Company";
const description =
  "Entire Expert is a remote-first software development company building custom software, web platforms, mobile apps, and AI-powered automation for teams that need dependable engineering capacity.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/" });

export default function HomePage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: "/", title, description })} />
      <Hero />
      <TrustBar />
      <CoreServices />
      <WhyChooseUs />
      <FeaturedProjects />
      <TechStackSection />
      <ProcessSection />
      <IndustriesSection />
      <StatsSection />
      <AiCapabilities />
      <TestimonialsSection />
      <LatestBlogPosts />
      <FaqSection />
      <FinalCta />
    </>
  );
}
