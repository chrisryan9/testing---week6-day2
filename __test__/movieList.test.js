const { Builder, Capabilities } = require('selenium-webdriver');
require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const { crossOff } = require('../functions/crossOff');
const { deleteMovie } = require('../functions/deleteMovie');
const { unCrossOff } = require('../functions/unCrossOff');


beforeEach(async () => {
    await driver.get('http://localhost:5501/movieList/index.html')
});

afterAll(async () => {
    await driver.quit()
});

describe ('Cross off movie and delete button functionality', () => {

    test('Cross off movie title', async () => {
        await driver.sleep(3000);
        await crossOff(driver);
    });

    test('Delete Movie', async () => {
        await driver.sleep(3000);
        await deleteMovie(driver);
        await driver.sleep(3000);
    });
});

test('Uncross off movie title', async () => {
    await unCrossOff(driver);
    await driver.sleep(5000);
})

