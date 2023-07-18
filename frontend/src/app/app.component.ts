import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formData = {
    name: '',
    email: ''
  };

  submitForm() {

    if (this.formData.name && this.formData.email) {

      console.log('Formulaire soumis !');
      console.log('Nom:', this.formData.name);
      console.log('Email:', this.formData.email);

      this.formData.name = '';
      this.formData.email = '';
    } else {
      console.log('Veuillez remplir tous les champs du formulaire.');
    }
  }
}
