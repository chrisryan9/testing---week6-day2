const { By } = require('selenium-webdriver');

const deleteMovie = async (driver) => {
    const movieTitle = 'test';

    await driver.findElement(By.xpath('//input')).sendKeys(movieTitle);

    await driver.findElement(By.xpath('//button')).click();

    await driver.findElement(By.xpath('//li/span')).click();

    await driver.findElement(By.id(`${movieTitle}`)).click();
}

module.exports = { deleteMovie };