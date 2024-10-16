import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch({
    headless: false,
  });

  const page = await browser.newPage({ ignoreHTTPSErrors: true });

  await page.goto('https://www.google.com');

  await page.waitForTimeout(5000);

  await browser.close();
}

const command = process.argv[2]

switch (command) {
  case 'run':
    main().catch(e => console.error(e))
    break;
  default:
    console.error(`unknown command ${command}`)
    process.exit(1)
}
