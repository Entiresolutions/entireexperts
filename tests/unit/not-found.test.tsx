import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import NotFound from "@/app/not-found";

describe("NotFound page", () => {
  it("renders a clear 404 heading", () => {
    render(<NotFound />);
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /this page doesn.t exist/i })).toBeInTheDocument();
  });

  it("offers recovery links back into the site", () => {
    render(<NotFound />);
    expect(screen.getByRole("link", { name: /back to homepage/i })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: /browse services/i })).toHaveAttribute("href", "/services");
    expect(screen.getByRole("link", { name: /contact us/i })).toHaveAttribute("href", "/contact");
  });
});
