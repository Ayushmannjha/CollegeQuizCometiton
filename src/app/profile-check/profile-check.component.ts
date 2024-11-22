import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-profile-check',
  templateUrl: './profile-check.component.html',
  styleUrl: './profile-check.component.css'
})
export class ProfileCheckComponent {
  roll: string = '';
  studentData: any = null;
  errorMessage: string = '';
  questions:any=null;
  questionStatusList:any = null;
  constructor(private service: ServiceService) {}

  searchStudent() {
    if (!this.roll) {
      alert('Please enter a roll number.');
      return;
    }

    this.service.searchStudent(this.roll).subscribe(
      (response) => {
        if (response && response.student) {
          this.studentData = response;
          this.questionStatusList = response.questionStatusList;
          this.questions = response.question;
          console.log('Student Data:', response);
        } else {
          this.errorMessage = response.message || 'Something went wrong.';
          console.error(this.errorMessage);
        }
      },
      (error) => {
        console.error('Error:', error);
        this.errorMessage = 'An error occurred while fetching student data.';
      }
    );
  }
  isQuestionApproved(questionId: number): boolean {
    return this.questionStatusList.some(
      (status:any) => status.questionId === questionId && status.approvedStatus === 1
    );
  }

  toggleQuestionDetails(questionId: number, event: Event): void {
    event.preventDefault();
    alert(`Show details for Question ID: ${questionId}`); // Replace with modal logic if needed
  }
}