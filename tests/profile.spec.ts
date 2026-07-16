import { expect, test, type Page } from "@playwright/test";

const route = "/mai-tan-thanh";
const financeRoute = "/duong-hoang-anh";
const advisoryRoute = "/karthikeyan-ramaswamy";
const karthikeyanLinkedIn = "https://www.linkedin.com/in/karthikeyan-ramaswamy-a0797774";
const allowedGitHub = [
  "https://github.com/xandrosworld",
  "https://github.com/xandrosworld/IDP-PLATFORM-PRO",
  "https://github.com/xandrosworld/KH_ANDUCNHAN",
  "https://github.com/xandrosworld/KH-QUAN-NENTANGHOC",
  "https://github.com/xandrosworld/web-squad2",
];

async function scrollThroughPage(page: Page) {
  const revealItems = page.locator("[data-reveal]");
  for (let index = 0; index < (await revealItems.count()); index += 1) {
    await revealItems.nth(index).scrollIntoViewIfNeeded();
    await page.waitForTimeout(40);
  }
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
}

test("desktop hero and full-page visual", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(route);

  await expect(page.getByRole("heading", { level: 1, name: "Mai Tấn Thành" })).toBeVisible();
  await expect(page.getByText("AI Technology Lead & Solution Architect", { exact: true })).toBeVisible();
  await expect(page.getByText("Vietnam AI Innovation Challenge 2026 / Banking Track")).toBeVisible();
  const primaryCta = page.getByRole("link", { name: "Explore DocMind" });
  await expect(primaryCta).toBeVisible();
  const ctaBox = await primaryCta.boundingBox();
  expect(ctaBox && ctaBox.y + ctaBox.height).toBeLessThanOrEqual(1000);
  await expect(page.locator("h1")).toHaveCount(1);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);

  await scrollThroughPage(page);
  await page.screenshot({
    path: "artifacts/screenshots/mai-tan-thanh-desktop.png",
    fullPage: true,
    animations: "disabled",
  });
  expect(errors).toEqual([]);
});

test("mobile navigation, language and full-page visual", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(route);

  const menuButton = page.getByRole("button", { name: "Menu" });
  await menuButton.click();
  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  await page.locator('#mobile-navigation a[href="#docmind"]').click();
  await expect(page).toHaveURL(/#docmind$/);

  await page.getByRole("button", { name: "VI" }).click();
  await expect(page).toHaveURL(/lang=vi/);
  await expect(page.getByText("Tech Lead AI & Kiến trúc sư Giải pháp", { exact: true })).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("lang", "vi");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);

  await scrollThroughPage(page);
  await page.screenshot({
    path: "artifacts/screenshots/mai-tan-thanh-mobile.png",
    fullPage: true,
    animations: "disabled",
  });
});

test("links and public contact channels stay within the approved set", async ({ page }) => {
  await page.setViewportSize({ width: 1024, height: 900 });
  await page.goto(route);

  const githubLinks = await page.locator('a[href^="https://github.com/"]').evaluateAll((links) =>
    Array.from(new Set(links.map((link) => (link as HTMLAnchorElement).href))),
  );
  expect(githubLinks.sort()).toEqual(allowedGitHub.sort());
  await expect(page.getByRole("link", { name: /Email Mai/ })).toHaveCount(1);
  await expect(page.locator('a[href="mailto:maitanthanh1998@gmail.com"]')).toHaveCount(2);
});

test("metadata, structured data and security headers are present", async ({ page }) => {
  const response = await page.goto(route);
  expect(response?.headers()["x-content-type-options"]).toBe("nosniff");
  expect(response?.headers()["x-frame-options"]).toBe("DENY");
  await expect(page).toHaveTitle("Mai Tấn Thành | AI Technology Lead");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    /\/mai-tan-thanh$/,
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /opengraph-image/);

  const personData = await page.locator('script[type="application/ld+json"]').textContent();
  const person = JSON.parse(personData ?? "{}");
  expect(person["@type"]).toBe("Person");
  expect(person.email).toBe("maitanthanh1998@gmail.com");
  expect(person.sameAs).toEqual(["https://github.com/xandrosworld"]);
  expect(person.memberOf.name).toBe("The Banking Five");
  expect(person.telephone).toBeUndefined();
  expect(person.address).toBeUndefined();
});

test("finance profile presents market expertise without the excluded assignment", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(financeRoute);

  await expect(page.getByRole("heading", { level: 1, name: "Dương Hoàng Anh" })).toBeVisible();
  await expect(page.getByText("Fixed Income Strategist & ALM Advisor", { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "Explore market expertise" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "From market need to a live financial product" })).toBeVisible();
  await expect(page.getByText("Passed Level III of the CFA Program", { exact: true }).first()).toBeVisible();
  await expect(page.getByText(/CFA Charterholder/i)).toHaveCount(0);
  await expect(page.getByText(/State Bank of Vietnam/i)).toHaveCount(0);
  await expect(page.getByText(/\bSBV\b/i)).toHaveCount(0);
  await expect(page.locator('a[href^="https://github.com/"]')).toHaveCount(0);
  await expect(page.locator('a[href="mailto:anhdh1994@gmail.com"]')).toHaveCount(3);
  await expect(page.getByText(/0974128144/)).toHaveCount(0);
  await expect(page.getByText(/03\/04\/1994/)).toHaveCount(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);

  await scrollThroughPage(page);
  await page.screenshot({
    path: "artifacts/screenshots/duong-hoang-anh-desktop.png",
    fullPage: true,
    animations: "disabled",
  });
  expect(errors).toEqual([]);
});

test("finance profile mobile navigation and Vietnamese copy", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(financeRoute);

  const menuButton = page.getByRole("button", { name: "Menu" });
  await menuButton.click();
  await page.locator('#mobile-navigation a[href="#market-case"]').click();
  await expect(page).toHaveURL(/#market-case$/);

  await page.getByRole("button", { name: "VI" }).click();
  await expect(page).toHaveURL(/lang=vi/);
  await expect(page.getByText("Chuyên gia Chiến lược Trái phiếu & Tư vấn ALM", { exact: true })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);

  await scrollThroughPage(page);
  await page.screenshot({
    path: "artifacts/screenshots/duong-hoang-anh-mobile.png",
    fullPage: true,
    animations: "disabled",
  });
});

test("finance profile metadata and structured data are scoped correctly", async ({ page }) => {
  await page.goto(financeRoute);
  await expect(page).toHaveTitle("Dương Hoàng Anh | Fixed Income Strategist");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    /\/duong-hoang-anh$/,
  );

  const personData = await page.locator('script[type="application/ld+json"]').textContent();
  const person = JSON.parse(personData ?? "{}");
  expect(person["@type"]).toBe("Person");
  expect(person.name).toBe("Dương Hoàng Anh");
  expect(personData).not.toMatch(/CFA Charterholder|Dương Hoàng Anh,\s*CFA/i);
  expect(person.email).toBe("anhdh1994@gmail.com");
  expect(person.sameAs).toBeUndefined();
  expect(person.knowsAbout).toContain("Fixed income");
  expect(person.memberOf.name).toBe("The Banking Five");
  expect(person.telephone).toBeUndefined();
  expect(person.address).toBeUndefined();
});

test("BFSI advisory profile presents transformation expertise and public contact", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(advisoryRoute);

  await expect(page.getByRole("heading", { level: 1, name: "Karthikeyan Ramaswamy" })).toBeVisible();
  await expect(page.getByText("Senior BFSI Expert & Solution Architect", { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "Explore BFSI transformation" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "From complex banking needs to executable change" })).toBeVisible();
  await expect(page.getByText("35+ years across banking and BFSI technology", { exact: true })).toBeVisible();
  await expect(page.locator(`a[href="${karthikeyanLinkedIn}"]`)).toHaveCount(3);
  await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);

  await scrollThroughPage(page);
  await page.screenshot({
    path: "artifacts/screenshots/karthikeyan-ramaswamy-desktop.png",
    fullPage: true,
    animations: "disabled",
  });
  expect(errors).toEqual([]);
});

test("BFSI advisory profile mobile navigation and Vietnamese copy", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(advisoryRoute);

  const menuButton = page.getByRole("button", { name: "Menu" });
  await menuButton.click();
  await page.getByRole("link", { name: "Transformation case" }).click();
  await expect(page).toHaveURL(/#market-case$/);

  await page.getByRole("button", { name: "VI" }).click();
  await expect(page).toHaveURL(/lang=vi/);
  await expect(page.getByText("Chuyên gia Cấp cao BFSI & Kiến trúc sư Giải pháp", { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "Case chuyển đổi" })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);

  await scrollThroughPage(page);
  await page.screenshot({
    path: "artifacts/screenshots/karthikeyan-ramaswamy-mobile.png",
    fullPage: true,
    animations: "disabled",
  });
});

test("BFSI advisory metadata, structured data and sitemap are scoped correctly", async ({ page, request }) => {
  await page.goto(advisoryRoute);
  await expect(page).toHaveTitle("Karthikeyan Ramaswamy | Senior BFSI Expert");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    /\/karthikeyan-ramaswamy$/,
  );

  const personData = await page.locator('script[type="application/ld+json"]').textContent();
  const person = JSON.parse(personData ?? "{}");
  expect(person["@type"]).toBe("Person");
  expect(person.name).toBe("Karthikeyan Ramaswamy");
  expect(person.email).toBeUndefined();
  expect(person.sameAs).toEqual([karthikeyanLinkedIn]);
  expect(person.knowsAbout).toContain("BFSI solution architecture");
  expect(person.memberOf.name).toBe("The Banking Five");
  expect(person.telephone).toBeUndefined();
  expect(person.address).toBeUndefined();

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  expect(await sitemap.text()).toContain("/karthikeyan-ramaswamy");
});

test("legacy team routes permanently redirect to the short profile paths", async ({ request }) => {
  for (const legacyRoute of ["/team/mai-tan-thanh", "/the-banking-five/mai-tan-thanh"]) {
    const response = await request.get(legacyRoute, { maxRedirects: 0 });
    expect(response.status()).toBe(308);
    expect(response.headers().location).toBe("/mai-tan-thanh");
  }
});

for (const width of [320, 375, 768, 1024, 1440]) {
  test(`has no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width < 768 ? 812 : 900 });
    await page.goto(route);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
}

for (const width of [320, 375, 768, 1024, 1440]) {
  test(`BFSI advisory profile has no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width < 768 ? 812 : 900 });
    await page.goto(advisoryRoute);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
}

for (const width of [320, 375, 768, 1024, 1440]) {
  test(`finance profile has no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width < 768 ? 812 : 900 });
    await page.goto(financeRoute);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
}
