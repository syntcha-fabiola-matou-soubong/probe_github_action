import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onLoginSubmit() {

    console.log('User Name:', this.username);
    console.log('Password :', this.password);

  
    this.username = '';
    this.password = '';
  }

}
