import { describe, expect, it } from "vitest";
import { buildMetadata, absoluteUrl, pageTitle } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";

describe("absoluteUrl", () => {
  it("joins the site URL with a path", () => {
    expect(absoluteUrl("/services")).toBe(`${siteConfig.url}/services`);
  });

  it("returns the bare site URL for the homepage", () => {
    expect(absoluteUrl("/")).toBe(siteConfig.url);
  });
});

describe("pageTitle", () => {
  it("appends the site name", () => {
    expect(pageTitle("Contact Us")).toBe(`Contact Us | ${siteConfig.name}`);
  });
});

describe("buildMetadata", () => {
  it("sets a canonical URL matching the given path", () => {
    const metadata = buildMetadata({ title: "Services", description: "desc", path: "/services" });
    expect(metadata.alternates?.canonical).toBe(`${siteConfig.url}/services`);
  });

  it("indexes by default", () => {
    const metadata = buildMetadata({ title: "Services", description: "desc", path: "/services" });
    expect(metadata.robots).toEqual({ index: true, follow: true });
  });

  it("respects index: false for utility pages", () => {
    const metadata = buildMetadata({ title: "Preview", description: "desc", path: "/preview", index: false });
    expect(metadata.robots).toEqual({ index: false, follow: false });
  });

  it("includes matching Open Graph and Twitter metadata", () => {
    const metadata = buildMetadata({ title: "Contact Us", description: "Get in touch", path: "/contact" });
    expect(metadata.openGraph?.title).toBe("Contact Us");
    expect(metadata.twitter).toMatchObject({ card: "summary_large_image", title: "Contact Us" });
  });
});
