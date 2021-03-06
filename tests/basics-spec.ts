import { browser, element, by } from "protractor";


describe('angularjs homepage', function() {
    it('should greet the named user', function() {
      browser.get('http://www.angularjs.org');
      browser.manage().window().maximize();
      element(by.model('yourName')).sendKeys('Julie');
      var greeting = element(by.binding('yourName'));
      expect(greeting.getText()).toEqual('Hello Julie!');
    });
  });
  
  