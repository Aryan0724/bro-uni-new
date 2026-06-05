const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1600 } });
  
  await page.goto('https://blockacadeemy.framer.website/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'ref_screenshot.png' });
  
  await page.goto('http://localhost:3002', { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollBy(0, 800));
  await page.waitForTimeout(1000);

  await page.screenshot({ path: 'local_screenshot.png' });
  
  await browser.close();
})();
