describe('angularjs homepage todo list', function() {

  beforeEach(function() {

    browser.get('http://localhost:4200/');
  })
  
  it('should display title', function() {
    expect(browser.getTitle()).toEqual('Frontend');
  
  });
  it('should display name', function() {
    element(by.id('name')).sendKeys('test');
    element(by.id('email')).sendKeys('test');
    element(by.id('gender')).sendKeys('test');
    element(by.id('submit')).click();

  
  });
});
