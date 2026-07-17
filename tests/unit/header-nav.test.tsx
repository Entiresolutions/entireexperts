import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "@/components/layout/header";
import { primaryCta } from "@/config/site";

describe("Header", () => {
  it("renders the primary navigation landmark", () => {
    render(<Header />);
    expect(screen.getByRole("navigation", { name: /primary/i })).toBeInTheDocument();
  });

  it("renders top-level nav links to key sections", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation", { name: /primary/i });
    expect(nav).toHaveTextContent("Home");
    expect(nav).toHaveTextContent("About");
    expect(nav).toHaveTextContent("Portfolio");
    expect(nav).toHaveTextContent("Blog");
    expect(nav).toHaveTextContent("Contact");
  });

  it("renders the primary CTA linking to the configured destination", () => {
    render(<Header />);
    const ctaLinks = screen.getAllByRole("link", { name: primaryCta.label });
    expect(ctaLinks[0]).toHaveAttribute("href", primaryCta.href);
  });

  it("exposes Services and Management Services dropdown triggers", () => {
    render(<Header />);
    expect(screen.getByRole("button", { name: "Services" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Management Services" })).toBeInTheDocument();
  });
});
