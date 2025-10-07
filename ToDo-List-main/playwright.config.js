// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1, // Limita a apenas 1 worker para executar testes em sequência
  reporter: 'html',
  timeout: 300000, // 5 minutos por teste
  expect: {
    timeout: 20000, // 20 segundos para cada expectativa
  },
  use: {
    baseURL: 'http://localhost:5500',
    trace: 'on',
    screenshot: 'on',
    headless: false,
    slowMo: 10000, // 10 segundos entre cada ação
    actionTimeout: 30000, // 30 segundos para cada ação
    navigationTimeout: 30000, // 30 segundos para cada navegação
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npx http-server -p 5500',
    url: 'http://localhost:5500',
    reuseExistingServer: !process.env.CI,
  },
});