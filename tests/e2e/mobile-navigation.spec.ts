import { test, expect } from "@playwright/test";

test.use({ viewport: { width: 390, height: 844 } });

test.describe("Mobile navigation", () => {
  test("opens, expands the Services group, and navigates", async ({ page }) => {
    await page.goto("/");

    const openButton = page.getByRole("button", { name: "Open menu" });
    await openButton.click();

    const nav = page.getByRole("navigation", { name: "Mobile" });
    await expect(nav).toBeVisible();

    await nav.getByRole("button", { name: "Services" }).click();
    await nav.getByRole("link", { name: "SaaS Product Development" }).click();

    await expect(page).toHaveURL("/services/saas-product-development");
  });

  test("closes via the close button", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(page.getByRole("navigation", { name: "Mobile" })).toBeVisible();

    await page.getByRole("button", { name: "Close menu" }).click();
    await expect(page.getByRole("navigation", { name: "Mobile" })).toHaveCount(0);
  });
});
