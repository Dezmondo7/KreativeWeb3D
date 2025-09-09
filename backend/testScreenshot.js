const puppeteer = require('puppeteer');

async function captureFullPage(url) {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage'
    ]
  });

  const page = await browser.newPage();

  await page.setViewport({ width: 1280, height: 800 });
  await page.goto(url, { waitUntil: 'networkidle2' });
  await page.waitForTimeout(1000); // give time for lazy assets

  const buffer = await page.screenshot({ fullPage: true });

  await browser.close();

  return buffer;
}

module.exports = { captureFullPage };