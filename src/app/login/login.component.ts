import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';  // Bind email input
  password: string = '';  // Bind password input

  constructor() {}

  // Method to handle form submission
  onSubmit(): void {
    if (this.email && this.password) {
      console.log('Form Submitted!', { email: this.email, password: this.password });
      // Logic to handle login request goes here, like sending data to an API.
    } else {
      console.log('Please fill out both email and password fields');
    }
  }
}
