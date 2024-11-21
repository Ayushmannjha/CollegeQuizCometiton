import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  student = {
    name: '',
    email: '',
    phone: '',
    password: '',
    roll: ''
  };
  
  isSubmitting = false;
  
  errorMessage: string | null = null;

  constructor(private router:Router,private service: ServiceService) {}

  registerStudent() {
    if (this.isSubmitting) return; // Prevent multiple submissions
    
    this.isSubmitting = true;
    this.service.registerStudent(this.student).subscribe(
      (response) => {
        this.isSubmitting = false;
        this.errorMessage = null; 

        console.log('Registration successful:', response);
        localStorage.setItem('userData', JSON.stringify(response));
        this.router.navigate(['/student-dashboard']);
        // You can redirect to another page or display a success message
      },
      (error) => {
        this.isSubmitting = false;
        console.error('Error during registration:', error);
        this.errorMessage = error.error?.errorMessage || 'An unexpected error occurred. Please try again.';
      }
    );
  }
}
