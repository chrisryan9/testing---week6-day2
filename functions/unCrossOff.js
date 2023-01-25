const { By } = require('selenium-webdriver');

const unCrossOff = async(driver) => {
    const movieTitle = 'Jaws';

    await driver.findElement(By.xpath('//input')).sendKeys(movieTitle);

    await driver.findElement(By.xpath('//button')).click();

    await driver.findElement(By.xpath('//li/span')).click();

    await driver.findElement(By.xpath('//li/span')).click();

    expect('//li/span').not.toBe('checked');
}

module.exports = { unCrossOff };