describe('angularjs homepage todo list', function() {
  it('should display title and button', function() {
    browser.waitForAngularEnabled(false);

    browser.get('http://localhost:4200/');

    var nameInput = element(by.id('name'));
    var emailInput = element(by.id('email'));
    var genderInput = element(by.id('gender'));
    var submitButton = element(by.css('button[type="submit"]'));

    nameInput.sendKeys('John Doe');
    emailInput.sendKeys('john@example.com');
    genderInput.sendKeys('male');

    submitButton.click();

    expect(nameInput.getAttribute('value')).toEqual('');
    expect(emailInput.getAttribute('value')).toEqual('');
    expect(genderInput.getAttribute('value')).toEqual('');
  });
});
