import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  outputDir: "./artifacts/test-results",
  fullyParallel: true,
  reporter: "line",
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3100",
    browserName: "chromium",
    channel: "msedge",
    headless: true,
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  webServer: {
    command: "pnpm start",
    url: "http://localhost:3100/mai-tan-thanh",
    env: {
      PORT: "3100",
      HOSTNAME: "127.0.0.1",
    },
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
