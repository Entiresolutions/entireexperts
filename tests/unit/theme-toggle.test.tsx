import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ThemeToggle } from "@/components/ui/theme-toggle";

function renderToggle() {
  return render(
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <ThemeToggle />
    </ThemeProvider>
  );
}

describe("ThemeToggle", () => {
  it("renders an accessible button with a theme-related label", async () => {
    renderToggle();
    const button = await screen.findByRole("button");
    expect(button).toHaveAccessibleName(/mode/i);
  });

  it("toggles the accessible label after being clicked", async () => {
    const user = userEvent.setup();
    renderToggle();

    const button = await screen.findByRole("button", { name: /switch to dark mode/i });
    await user.click(button);

    expect(await screen.findByRole("button", { name: /switch to light mode/i })).toBeInTheDocument();
  });
});
