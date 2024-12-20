import { Component, numberAttribute } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {
  admin: { name: string } | null = { name: 'Admin' }; // Replace with real data
  question = { description: '', topic: '' };
  rollNo: string = '';
  successMessage: string | null = null;

  constructor(private router:Router,private service: ServiceService) {}

  uploadQuestion() {
    if (!this.question.description || !this.question.topic) {
      alert('Please fill in both the description and topic fields.');
      return;
    }
    this.service.uploadQuestion(this.question.description,this.question.topic).subscribe(
      (response)=>{
        
        this.successMessage = 'Question uploaded successfully!';
      },
      (error)=>{
        console.log(error);
      }
    );
    
  }

  searchStudent() {
    if (!this.rollNo) {
      alert('Please enter a roll number.');
      return;
    }
    this.service.searchStudent(this.rollNo).subscribe(
      (response)=>{
        console.log(response);
        localStorage.setItem('studentData',JSON.stringify(response));
        this.router.navigate(['/profile-check']);
      }
    )
   
  }
}
