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

async function addOperations(url: string, operations: string[]) {
  console.log(url)
  console.log(operations)

}


const command = process.argv[2]

switch (command) {
  case 'run':
    main().catch(e => console.error(e))
    break;

  case 'add-ops':
    const url = process.argv[3]
    const operations = process.argv[4].split(',')
    addOperations(url, operations).catch(e => console.error(e))
    break;

  default:
    console.error(`unknown command ${command}`)
    process.exit(1)
}
