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

    /*
    console.log(microtime.now()," Team Page");
    await page.click("a[href='http://server/team']");
    await page.waitForSelector(".wpcf7 form input");

    console.log(microtime.now()," Blog Page");
    await page.click("a[href='http://server/blog']");
    await page.waitForSelector(".wpcf7 form input");

    Todo: Scrollen...

    console.log(microtime.now()," Article 3 Page");
    await page.click("a[href='http://server/team']");
    await page.waitForSelector(".wpcf7 form input");

    console.log(microtime.now()," Closing browser");
    await browser.close();
     */
})();