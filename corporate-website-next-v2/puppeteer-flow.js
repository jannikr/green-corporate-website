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

    // Short usage scenario:

    console.log(microtime.now()," Home Page");
    await page.goto("http://server:8080", {
        waitUntil: "networkidle2",
    });
    await new Promise(r => setTimeout(r, 4000));

    console.log(microtime.now()," Closing browser");
    await browser.close();
})();