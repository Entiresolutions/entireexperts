import { test, expect } from "@playwright/test";

test.describe("Contact form", () => {
  test("shows inline validation errors when submitted empty", async ({ page }) => {
    await page.goto("/contact");

    await page.getByRole("button", { name: "Send message" }).click();

    await expect(page.getByText("This field is required.").first()).toBeVisible();
    // Should not show the success state.
    await expect(page.getByText("Message sent.")).toHaveCount(0);
  });

  test("submits successfully with valid data", async ({ page }) => {
    await page.goto("/contact");

    await page.getByLabel("Full name").fill("Jordan Rivera");
    await page.getByLabel("Business email").fill("jordan@example.com");
    await page.getByLabel("Service you need").selectOption("Custom Software Development");
    await page.getByLabel("Estimated budget").selectOption("$25,000 - $50,000");
    await page.getByLabel("Project timeline").selectOption("1-3 months");
    await page
      .getByLabel("Project details")
      .fill("We need a scheduling tool for our field service technicians.");
    await page.getByLabel(/I agree to be contacted/).check();

    await page.getByRole("button", { name: "Send message" }).click();

    await expect(page.getByText("Message sent.")).toBeVisible();
  });
});
