import { test, expect } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toHaveText('To-Do App')
  await expect(page.locator('form label')).toHaveText('To-Do name')
  await expect(page.locator('form button')).toHaveText('Add To-Do')
  await expect(page.locator('h2')).toHaveText('No To-Do found')
})
