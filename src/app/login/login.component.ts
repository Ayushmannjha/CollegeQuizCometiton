import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';  // Bind email input
  password: string = '';  // Bind password input
  errorMessage: string | null = null;  // Store error message

  constructor(private service: ServiceService) {}

  onSubmit(): void {
    const credentials = { email: this.email, password: this.password };

    this.service.login(credentials).subscribe(
      (response) => {
        console.log('Login successful:', response);
        localStorage.setItem('userData', JSON.stringify(response));
        window.location.href='/student-dashboard'
        this.errorMessage = null; // Clear any previous error message on success
        // Redirect or handle successful login here
      },
      (error) => {
        console.error('Login failed:', error);

        // If backend sends an error message, display it on the form
        if (error.status === 401 && error.error && error.error.errorMessage) {
          this.errorMessage = error.error.errorMessage;  // Set error message
        } else {
          this.errorMessage = 'An error occurred. Please try again later.';  // Default error message
        }
      }
    );
  }
}
