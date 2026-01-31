
import { chromium } from 'playwright';

export async function scrapeBravo() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: 'auth/bravo.json' });
  const page = await context.newPage();
  await page.goto('https://www.bravopokerlive.com');

  // PLACEHOLDER SELECTORS – adjust after inspecting DOM
  const venues = await page.$$eval('.venue', els => els.map(e => ({
    name: e.innerText,
    source: 'Bravo',
    verified: 1
  })));

  await browser.close();
  return venues;
}
