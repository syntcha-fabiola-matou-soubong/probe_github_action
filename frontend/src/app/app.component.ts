import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  formData = {
    name: '',
    email: '',
    gender: '',
  };

  submitForm() {

    if (this.formData.name && this.formData.email) {

      console.log('Form send !');
      console.log('Name:', this.formData.name);
      console.log('Email:', this.formData.email);
      console.log('Gender:', this.formData.gender);

      this.formData.name = '';
      this.formData.email = '';
      this.formData.gender = '';
    } else {
      console.log('Please fill in all the fields of the form.');
    }
  }
}
