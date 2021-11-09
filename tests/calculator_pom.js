let homepage = require('../pages/homepage');
describe('demo calulator test', function () {


    it('addition test 2 digit number - 81 & 91', function () {
        // browser.get('https://juliemr.github.io/protractor-demo/');
        homepage.getAppURL('https://juliemr.github.io/protractor-demo/')
        expect(browser.getCurrentUrl()).toBe('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('81')
        homepage.enterSecondNumber('91')
        browser.sleep(2000)
        homepage.clickGo();
		browser.sleep(4000)

    });
	
	it('addition test 1 digit number - 9 & 8', function () {
        // browser.get('https://juliemr.github.io/protractor-demo/');
        homepage.getAppURL('https://juliemr.github.io/protractor-demo/')
        expect(browser.getCurrentUrl()).toBe('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('9')
        homepage.enterSecondNumber('8')
        browser.sleep(2000)
        homepage.clickGo();
		browser.sleep(4000)

    });
	
	it('addition test 1 digit number - 8 & 9', function () {
        // browser.get('https://juliemr.github.io/protractor-demo/');
        homepage.getAppURL('https://juliemr.github.io/protractor-demo/')
        expect(browser.getCurrentUrl()).toBe('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('8')
        homepage.enterSecondNumber('9')
        browser.sleep(2000)
        homepage.clickGo();
		browser.sleep(4000)

    });


it('addition test 2 digit number - 18 & 19', function () {
        // browser.get('https://juliemr.github.io/protractor-demo/');
        homepage.getAppURL('https://juliemr.github.io/protractor-demo/')
        expect(browser.getCurrentUrl()).toBe('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('18')
        homepage.enterSecondNumber('19')
        browser.sleep(2000)
        homepage.clickGo();
		browser.sleep(5000)

    });

it('addition test 3 digit number - 819 & 919', function () {
        // browser.get('https://juliemr.github.io/protractor-demo/');
        homepage.getAppURL('https://juliemr.github.io/protractor-demo/')
        expect(browser.getCurrentUrl()).toBe('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('819')
        homepage.enterSecondNumber('919')
        browser.sleep(2000)
        homepage.clickGo();
		browser.sleep(5000)

    });

it('addition test 4 digit number - 18191 & 19191', function () {
        // browser.get('https://juliemr.github.io/protractor-demo/');
        homepage.getAppURL('https://juliemr.github.io/protractor-demo/')
        expect(browser.getCurrentUrl()).toBe('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('18191')
        homepage.enterSecondNumber('19191')
        browser.sleep(2000)
        homepage.clickGo();
		browser.sleep(5000)

    });


});