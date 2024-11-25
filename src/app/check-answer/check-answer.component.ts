import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { response } from 'express';

@Component({
  selector: 'app-check-answer',
  templateUrl: './check-answer.component.html',
  styleUrls: ['./check-answer.component.css']
})
export class CheckAnswerComponent implements OnInit {
  isSubmitted:boolean = false;
  successMessage: string = '';
  errorMessage: string = '';
  status: string = ''; // This will store the selected status ("correct" or "incorrect")
  answerStatus: string = ''; // This is the new property for answer status
  qno: number = 0;
  student: any = null;
  check_answerData: any = null;
  question: any = null;
  questionStatus: any = null;
  isReadonly: boolean = true; // To make the textarea readonly by default
  isAnswerLocked: boolean = false; // To control whether the status dropdown is disabled
  questionId:number = 0;
  roll:number = 0;
  studentData:any = null
  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    const check_answer = localStorage.getItem('check-answer-data');
    if (check_answer) {
      this.check_answerData = JSON.parse(check_answer);
      this.qno = this.check_answerData.qno;
      this.student = this.check_answerData.student;
      this.question = this.check_answerData.question;
      this.questionStatus = this.check_answerData.questionStatus;
      this.student = this.check_answerData.student;
      this.questionId = this.question.questionId;
      this.roll = this.student.roll;
    }
  }

  // This function is triggered when the answer status is changed
  onStatusChange() {
    if (this.answerStatus) {
      this.isAnswerLocked = true; // Lock the form after selecting an answer status
    }
  }

  // Handle the form submission
  submitAnswer() {
    if (this.answerStatus) {
      this.successMessage = 'Answer submitted successfully!';
      this.errorMessage = '';
      const body = {questionId: this.question.id, roll: this.roll, status: this.answerStatus};
      console.log(body)
      this.service.updateQuestionStatus(body).subscribe(
        (response)=>{
          
          const storedData = localStorage.getItem('studentData');  // Ensure the key is 'userData' here
          if (storedData) {
            
            this.studentData = JSON.parse(storedData);
            this.isSubmitted = true;
            if (response && response.questionStatusList) {
              this.studentData.questionStatusList = response.questionStatusList;
              this.successMessage = 'Answer checked successfully!';
          this.errorMessage = ''; 
           // Clear any previous success message
         
      
              // Save the updated userdata back to localStorage using the same key 'userData'
              localStorage.setItem('studentData', JSON.stringify(this.studentData));  // Use 'userData' here as well
            }
          }
        }
      )
      // Simulate an API call to submit the answer (replace with your actual logic)
      console.log('Submitting answer...', this.questionStatus, this.answerStatus);
    } else {
      this.errorMessage = 'Please select an answer status.';
      this.successMessage = '';
    }
  }
}
