import { test, expect } from "@playwright/test";
// import { email, password } from "../src/test-env";


test("Medi Login Feature", async ({ page }) => {
  // const email = process.env.EMAIL;
  // const password = process.env.PASSWORD;

  // if (!email || !password) {
  //   throw new Error("Email or Password environment variable is not set");
  // }
  
  await page.goto("https://dev.mediboard.ai/access/bypass-sms");
  await expect(page).toHaveTitle(/MediBoard/);
  await page
    .locator("div")
    .filter({ hasText: /^I have read and accept the Terms And Conditions$/ })
    .getByLabel("")
    .check();
  await page
    .locator("div")
    .filter({ hasText: /^I have read and accept the Privacy Policy$/ })
    .getByLabel("")
    .check();
  await page.getByRole("button", { name: "I understand" }).click();
  await page.locator("#email").fill(process.env.EMAIL);
  await page.locator("#password").fill(process.env.PASSWORD);
  await page.getByRole("button", { name: "Sign In" }).click();
  if (await page.getByText("Unable to login with credentials").isVisible()) {
    console.log("Invalid login credentials");
  } else {
    console.log("Valid credentials accepted");
  }

  await page.getByRole("spinbutton").first().fill("1");
  await page.getByRole("spinbutton").nth(1).fill("1");
  await page.getByRole("spinbutton").nth(2).fill("1");
  await page.getByRole("spinbutton").nth(3).fill("1");
  await page.getByRole("spinbutton").nth(4).fill("1");
  await page.getByText("Patient").click();
  await expect(page.getByText("Home")).toBeVisible();
  //   await page.getByRole('link', { name: 'Dashboards & Reports' }).click();
});
