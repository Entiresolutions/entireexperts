import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/layout/footer";
import { primaryCta, secondaryCta, consultationCta } from "@/config/site";

describe("Critical CTA configuration", () => {
  it("points Start Your Project to the quote page", () => {
    expect(primaryCta).toEqual({ label: "Start Your Project", href: "/quote" });
  });

  it("points View Our Work to the portfolio page", () => {
    expect(secondaryCta).toEqual({ label: "View Our Work", href: "/portfolio" });
  });

  it("points the consultation CTA to the contact page", () => {
    expect(consultationCta).toEqual({ label: "Book a Free Consultation", href: "/contact" });
  });
});

describe("Footer", () => {
  it("links to every legal page", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "Privacy Policy" })).toHaveAttribute("href", "/privacy-policy");
    expect(screen.getByRole("link", { name: "Terms and Conditions" })).toHaveAttribute("href", "/terms-and-conditions");
    expect(screen.getByRole("link", { name: "Cookie Policy" })).toHaveAttribute("href", "/cookie-policy");
  });

  it("links to the quote and contact pages", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "Request a Quote" })).toHaveAttribute("href", "/quote");
    expect(screen.getByRole("link", { name: "Contact Us" })).toHaveAttribute("href", "/contact");
  });
});
