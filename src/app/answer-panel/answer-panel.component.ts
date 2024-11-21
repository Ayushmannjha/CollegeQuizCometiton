import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-answer-panel',
  templateUrl: './answer-panel.component.html',
  styleUrls: ['./answer-panel.component.css'],
})
export class AnswerPanelComponent implements OnInit {
  student:any = null;
  question:any = null;
  answer: string = ''; // Answer input by the student
  isSubmitting: boolean = false; // Flag to track submission status
  answerPanelData:any = null;
  qno:any=null;
  userData: any = null;
  constructor(private service: ServiceService,private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const storedData = localStorage.getItem('answer-panel-data');
    if(storedData){
      this.answerPanelData = JSON.parse(storedData);
    this.student = this.answerPanelData.student;
    this.question = this.answerPanelData.question ;
      this.qno = this.answerPanelData.qno;
  }else {
    console.error('no answer-panel-data found in localStorage');
  }
}


disableCopyPaste(event: ClipboardEvent): void {
  event.preventDefault();
}

  submitAnswer(): void {
    if (!this.answer) {
      alert('Answer cannot be empty!');
      return;
    }

    const formData = {
      roll: this.student.roll,
      questionId: this.question.id,
      answer: this.answer,
    };

    this.service.submitAnswer(formData).subscribe(
      (response) => {
        // Get the userdata from localStorage (parse it to object)
        const storedData = localStorage.getItem('userData');  // Ensure the key is 'userData' here
        if (storedData) {
          this.userData = JSON.parse(storedData);
    
          if (response && response.questionStatusList) {
            this.userData.questionStatusList = response.questionStatusList;
            console.log(this.userData);
    
            // Save the updated userdata back to localStorage using the same key 'userData'
            localStorage.setItem('userData', JSON.stringify(this.userData));  // Use 'userData' here as well
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
    

  }
}
