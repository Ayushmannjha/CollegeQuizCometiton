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



onSubmit(){
  const credentials = { email: this.email, password: this.password };
  this.service.adminLogin(credentials).subscribe(
    (response)=>{
      console.log('Login successful:', response);
        localStorage.setItem('admin-data', JSON.stringify(response));
        this.router.navigate(['/admin-dashboard']);
        
    },
    (error)=>{
      console.log(error);
      if (error.status === 401 && error.error && error.error.errorMessage) {
        this.errorMessage = error.error.errorMessage;  // Set error message
      } else {
        this.errorMessage = 'An error occurred. Please try again later.';  // Default error message
      }
    }
  );
}

}
