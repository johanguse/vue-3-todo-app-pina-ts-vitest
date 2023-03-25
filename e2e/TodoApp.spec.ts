import { test, expect } from '@playwright/test'

test('visits the app root url and check if has the elements', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toHaveText('To-Do App')
  await expect(page.locator('form label')).toHaveText('To-Do name')
  await expect(page.locator('form button')).toHaveText('Add To-Do')
  await expect(page.locator('h2')).toHaveText('No To-Do found')
})
