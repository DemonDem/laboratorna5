const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

const searchConcert = async () => {
    let driver = await new Builder().forBrowser('chrome').build();


    try {
        await driver
            .manage()
            .window()
            .maximize();
        await driver.manage().deleteAllCookies();

        await driver.get('https://concert.ua/');
        if (await driver.findElement(By.xpath("//input[@placeholder='� �����...']"))) {
            await driver.findElement(By.xpath("//input[@placeholder='� �����...']")).click();
            //��������� ������ ������
            await driver.findElement(By.className('header-search__ico js-header-search-btn=" ������ "]')).click();
            //������� �������� ������� � ������ ��������
            await driver.findElement(By.className('event-info__name').slide-index('6')).sendKeys("������� THEKOMAKOMA");
            //������ � �������
            await driver.findElement(By.className('btn btn--white event-info__link')).click();
           //���������� �� ������� �������� THEKOMAKOMA
            await driver.findElement(By.xpath('//a[@href="https://concert.ua/uk/event/thekomakoma/"]')).click();
            //������ ������
            await driver.findElement(By.className('btn btn--green event-buy-info__btn')).click();
        } else {
            console.log("SEARCH NOT FOUND!");
        }

    } catch (err) {
        console.error(err);
    } finally {
        console.log('complete concert.ua search!');
        driver.quit();
    }
};

searchConcert();