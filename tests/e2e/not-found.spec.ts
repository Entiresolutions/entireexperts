import { test, expect } from "@playwright/test";

test.describe("404 behavior", () => {
  test("shows a custom 404 page with recovery links for an unknown route", async ({ page }) => {
    const response = await page.goto("/this-page-does-not-exist");
    expect(response?.status()).toBe(404);

    await expect(page.getByText("404")).toBeVisible();
    await expect(page.getByRole("heading", { name: /this page doesn.t exist/i })).toBeVisible();
    await expect(page.getByRole("link", { name: "Back to homepage" })).toHaveAttribute("href", "/");
  });

  test("recovers back to the homepage from the 404 page", async ({ page }) => {
    await page.goto("/this-page-does-not-exist");
    await page.getByRole("link", { name: "Back to homepage" }).click();
    await expect(page).toHaveURL("/");
  });
});
