// @vitest-environment node
import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { getAllServiceSlugs } from "@/content/services";

describe("sitemap", () => {
  const entries = sitemap();

  it("includes the homepage with the highest priority", () => {
    const home = entries.find((entry) => entry.url === "https://www.entireexpert.com");
    expect(home).toBeDefined();
    expect(home?.priority).toBe(1);
  });

  it("includes every service page exactly once", () => {
    const slugs = getAllServiceSlugs();
    for (const slug of slugs) {
      const matches = entries.filter((entry) => entry.url === `https://www.entireexpert.com/services/${slug}`);
      expect(matches).toHaveLength(1);
    }
  });

  it("produces no duplicate URLs", () => {
    const urls = entries.map((entry) => entry.url);
    expect(new Set(urls).size).toBe(urls.length);
  });

  it("does not include admin or API routes", () => {
    expect(entries.some((entry) => entry.url.includes("/api/"))).toBe(false);
  });
});
