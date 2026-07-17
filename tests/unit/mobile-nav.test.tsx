import { describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MobileNav } from "@/components/layout/mobile-nav";

describe("MobileNav", () => {
  it("hides the navigation panel until opened", () => {
    render(<MobileNav />);
    expect(screen.queryByRole("navigation", { name: /mobile/i })).not.toBeInTheDocument();
  });

  it("reveals nav links when the menu button is pressed", async () => {
    const user = userEvent.setup();
    render(<MobileNav />);

    await user.click(screen.getByRole("button", { name: /open menu/i }));

    const nav = await screen.findByRole("navigation", { name: /mobile/i });
    expect(nav).toHaveTextContent("Home");
    expect(nav).toHaveTextContent("Contact");
  });

  it("closes again when the close button is pressed", async () => {
    const user = userEvent.setup();
    render(<MobileNav />);

    await user.click(screen.getByRole("button", { name: /open menu/i }));
    await screen.findByRole("navigation", { name: /mobile/i });

    await user.click(screen.getByRole("button", { name: /close menu/i }));
    await waitFor(() => {
      expect(screen.queryByRole("navigation", { name: /mobile/i })).not.toBeInTheDocument();
    });
  });
});
