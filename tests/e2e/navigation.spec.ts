import { test, expect } from "@playwright/test";

test.describe("Main navigation", () => {
  test("desktop header links navigate to the right pages", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL("/about");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/team/i);

    await page.goto("/");
    await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Blog" }).click();
    await expect(page).toHaveURL("/blog");
  });

  test("the Services dropdown links to a service detail page", async ({ page }) => {
    await page.goto("/");

    const primaryNav = page.getByRole("navigation", { name: "Primary" });
    await primaryNav.getByRole("button", { name: "Services", exact: true }).click();
    await primaryNav.getByRole("link", { name: "AI Chatbot Development" }).click();

    await expect(page).toHaveURL("/services/ai-chatbot-development");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("the Management Services dropdown links to a management service detail page", async ({ page }) => {
    await page.goto("/");

    const primaryNav = page.getByRole("navigation", { name: "Primary" });
    await primaryNav.getByRole("button", { name: "Management Services", exact: true }).click();
    await primaryNav.getByRole("link", { name: "Medical Billing Services" }).click();

    await expect(page).toHaveURL("/management-services/medical-billing-services");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("logo link returns to the homepage", async ({ page }) => {
    await page.goto("/about");
    await page.getByRole("link", { name: /entirexperts/i }).first().click();
    await expect(page).toHaveURL("/");
  });
});
