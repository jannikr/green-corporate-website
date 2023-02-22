const puppeteer = require("puppeteer");
const microtime = require("microtime");

(async () => {
    console.log(microtime.now()," Launching browser");
    const browser = await puppeteer.launch({
        defaultViewport: {
            width: 1920,
            height: 1080,
        },
        headless: true,
        executablePath: "/usr/bin/chromium-browser",
        args: ["--no-sandbox", "--disable-setuid-sandbox"], // Otherwise it won't run on Docker
    });

    const page = await browser.newPage();
    const dimensions = await page.evaluate(() => {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            deviceScaleFactor: window.devicePixelRatio,
        };
    });

    // Usage scenario:

    console.log(microtime.now()," Home Page");
    await page.goto("http://server", {
        waitUntil: "networkidle2",
    });

    // Todo: Scrollen...

    console.log(microtime.now()," About Page");
    await page.click('[id="about-navbar-link"]');
    await page.waitForSelector("#about-title");

    console.log(microtime.now()," Team Page");
    await page.click('[id="team-footer-link"]');
    await page.waitForSelector("#team-title");

    console.log(microtime.now()," Blog Page");
    await page.click('[id="blog-navbar-link"]');
    await page.waitForXPath('//h1[contains(text(), "React Blog")]')

    // Todo: Scrollen...

    console.log(microtime.now()," Article 3");
    await page.click('[id="blog-id-3"]');
    await page.waitForXPath('//h3[contains(text(), "At vero eos")]')

    console.log(microtime.now()," Closing browser");
    await browser.close();
})();