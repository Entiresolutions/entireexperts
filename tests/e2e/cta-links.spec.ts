import { test, expect } from "@playwright/test";

test.describe("Critical CTA links", () => {
  test("hero 'Start Your Project' goes to the quote page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Start Your Project" }).first().click();
    await expect(page).toHaveURL("/quote");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/get a project estimate/i);
  });

  test("hero 'View Our Work' goes to the portfolio page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "View Our Work" }).first().click();
    await expect(page).toHaveURL("/portfolio");
  });

  test("'Book a Free Consultation' goes to the contact page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /book a free consultation/i }).first().click();
    await expect(page).toHaveURL("/contact");
  });

  test("footer legal links resolve without error", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Privacy Policy" }).click();
    await expect(page).toHaveURL("/privacy-policy");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/privacy policy/i);
  });
});
