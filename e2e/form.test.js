import puppeteer from "puppeteer";
jest.setTimeout(60000)
describe("Page start", () => {
    let browser;
    let page;

    beforeEach(async () => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
            devtools: true,
        });
        page = await browser.newPage();
    });

    test('Отображение формы', async () => {
        await page.goto('http://localhost:9000');
        await page.waitForSelector('.innogrn-form-widget');
    });

    test('Если в input корректно, то будет класс valid', async () => {
        await page.goto('http://localhost:9000');
        await page.waitForSelector('.innogrn-form-widget', { timeout: 10000000 });

        const form = await page.$(".innogrn-form-widget");
        const input = await form.$('.input');
        const submit = await form.$('.submit');

        await input.type('371449635398431');
        await submit.click();

        await page.waitForSelector('.innogrn-form-widget .input');
        await page.waitForSelector('.submit-reset');

        // Нажать на кнопку обновления страницы
        await page.click('.submit-reset');

        // Подождать загрузки страницы после обновления
        await page.waitForSelector('.innogrn-form-widget .input');

    });
    test('Если в input корректно, то будет класс valid', async () => {
        await page.goto('http://localhost:9000');
        await page.waitForSelector('.innogrn-form-widget', { timeout: 10000000 });
        const form = await page.$(".innogrn-form-widget");
        const input = await form.$('.input');
        const submit = await form.$('.submit');

        await input.type('5555555555554444');
        await submit.click();

        await page.waitForSelector('.innogrn-form-widget .input');

    });
    afterEach(async () => {
        await browser.close();
    });
});
