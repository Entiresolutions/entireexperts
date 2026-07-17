import { test, expect } from "@playwright/test";

test.describe("Theme toggle", () => {
  test("defaults to light and switches to dark on click", async ({ page }) => {
    await page.goto("/");

    const html = page.locator("html");
    await expect(html).not.toHaveClass(/dark/);

    await page.getByRole("button", { name: /switch to dark mode/i }).click();
    await expect(html).toHaveClass(/dark/);
  });

  test("persists the chosen theme across a reload", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /switch to dark mode/i }).click();
    await expect(page.locator("html")).toHaveClass(/dark/);

    await page.reload();
    await expect(page.locator("html")).toHaveClass(/dark/);
  });
});
