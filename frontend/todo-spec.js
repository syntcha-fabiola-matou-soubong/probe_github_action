describe('angularjs homepage todo list', function() {
  it('should display title and button', function() {
    browser.waitForAngularEnabled(false); // Désactiver l'attente d'Angular

    browser.get('http://localhost:4200/');

   
  var nameInput = element(by.id('name'));
  var emailInput = element(by.id('email'));
  var submitButton = element(by.css('button[type="submit"]'));

  
  nameInput.sendKeys('John Doe');
  emailInput.sendKeys('john@example.com');


  submitButton.click();

  expect(nameInput.getAttribute('value')).toEqual('');
  expect(emailInput.getAttribute('value')).toEqual('');
});
});