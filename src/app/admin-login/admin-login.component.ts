import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  email:string= '';
  password:string='';
  errorMessage:string = '';
constructor(private service:ServiceService,private router: Router){}


async onSubmit() {
  if (!this.email || !this.password) {
    this.errorMessage = 'Email and Password are required.';
    return;
  }

  const credentials = { email: this.email, password: this.password };

  try {
    const response = await this.service.adminLogin(credentials); // Call the Axios method
    console.log('Login successful:', response.data);
    // Store admin data in local storage
    localStorage.setItem('admin-data', JSON.stringify(response.data));
    // Navigate to admin dashboard
    this.router.navigate(['/admin-dashboard']);
  } catch (error: any) {
    console.error('Login failed:', error);
    // Handle error based on Axios error response
    if (error.response && error.response.status === 401 && error.response.data && error.response.data.errorMessage) {
      this.errorMessage = error.response.data.errorMessage; // Display error message from backend
    } else if (error.response && error.response.status === 0) {
      this.errorMessage = 'Unable to connect to the server. Please check your internet connection.';
    } else {
      this.errorMessage = 'An unexpected error occurred. Please try again later.';
    }
  }
}


}
