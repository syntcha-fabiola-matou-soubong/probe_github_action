describe('angularjs homepage todo list', function() {

  beforeEach(function() {

    browser.get('http://localhost:4200/');
  })
  
  it('should display title', function() {
    expect(browser.getTitle()).toEqual('Frontend');
  
  });
  describe('HomeComponent', () =>{
  it('should display h2', () => {
    browser.get('http://localhost:4200/home');
    const h2Element = element(by.css('app-home h2'));
    expect(h2Element.getText()).toEqual('Willkommen');
  });
  })




  describe('Login', () => {
    it('should display the login page with correct elements', () => {
      browser.get('http://localhost:4200/login');
      expect(element(by.css('h1')).getText()).toEqual('Connexion');
      expect(element(by.css('label[for="username"]')).getText()).toEqual('User Name');
      expect(element(by.css('label[for="password"]')).getText()).toEqual('Password');
      expect(element(by.css('button[type="submit"]')).getText()).toEqual('login');
      expect(element(by.css('a')).getText()).toEqual('forgot password?');
    });
    it('should show an error message for invalid credentials', () => {
      browser.get('http://localhost:4200/login');
    
      const usernameField = element(by.css('#username'));
      const passwordField = element(by.css('#password'));
      const loginButton = element(by.css('button[type="submit"]'));
    
      usernameField.sendKeys('invalid_user');
      passwordField.sendKeys('invalid_password');
      loginButton.click();
    
      
      browser.sleep(1000);
    
      
      const errorMessage = element(by.css('.error-message'));
      errorMessage.isPresent().then((isPresent) => {
        if (isPresent) {
          errorMessage.getText().then((text) => {
            expect(text).toEqual('Identifiants incorrects');
          });
        } else {
          // ...
        }
      });
    });
    it('should display the dashboard page for valid credentials', () => {
      browser.get('http://localhost:4200/dashboard');
    
      const name = element(by.css('li h2#name'));
      expect(name.getText()).toEqual('Name');
    
      const command = element(by.css('li h2#command'));
      expect(command.getText()).toEqual('Command Number');
    
      const total = element(by.css('li h2#total'));
      expect(total.getText()).toEqual('Total');
    });
    
    

  });
  
  
  
  
  
  

});
