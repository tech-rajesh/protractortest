let homepage = require('../pages/homepage');
describe('demo calulator test', function () {


    it('addition test', function () {
        // browser.get('https://juliemr.github.io/protractor-demo/');
        homepage.getAppURL('https://juliemr.github.io/protractor-demo/')
        expect(browser.getCurrentUrl()).toBe('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('8')
        homepage.enterSecondNumber('9')
        browser.sleep(2000)
        homepage.clickGo();

        
        browser.sleep(2000)

    });


it('addition test', function () {
        // browser.get('https://juliemr.github.io/protractor-demo/');
        homepage.getAppURL('https://juliemr.github.io/protractor-demo/')
        expect(browser.getCurrentUrl()).toBe('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('8')
        homepage.enterSecondNumber('19')
        browser.sleep(2000)
        homepage.clickGo();

        
        browser.sleep(5000)

    });


});