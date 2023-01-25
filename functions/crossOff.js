const { By } = require('selenium-webdriver');

const crossOff = async (driver) => {
    const movieTitle = 'test';

    await driver.findElement(By.xpath('//input')).sendKeys(movieTitle);

    await driver.findElement(By.xpath('//button')).click();

    await driver.findElement(By.xpath('//li/span')).click();

    const movieCrossOff = await driver.findElement(By.xpath('//li/span'));

    expect(await movieCrossOff.getAttribute('class')).toEqual('checked');
}

module.exports = { crossOff };