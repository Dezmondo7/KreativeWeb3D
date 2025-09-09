const puppeteer = require('puppeteer');

async function captureFullPage(url) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  await page.goto(url, { waitUntil: 'networkidle2' });

  // Pause background animations
  await page.evaluate(() => {
    const elements = document.querySelectorAll('.background-animation');
    elements.forEach(el => {
      el.style.animationPlayState = 'paused';
      el.style.transition = 'none';
    });
  });

  // Wait for typewriter animation (~7 seconds)
  await page.waitForTimeout(9000);

  // Optional: scroll to main CTA
  // const cta = await page.$('.main-cta');
  // if (cta) await cta.scrollIntoView();

  const buffer = await page.screenshot({ fullPage: true });
  await browser.close();
  return buffer;
}

module.exports = { captureFullPage };