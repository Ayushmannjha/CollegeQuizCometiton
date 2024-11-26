import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Init } from 'v8';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-check',
  templateUrl: './profile-check.component.html',
  styleUrl: './profile-check.component.css'
})
export class ProfileCheckComponent implements OnInit{
  // Type 'filteredStatusList' as 'any[]'
  filteredStatusList: any[] = [];

  constructor(private service:ServiceService,private router: Router) {}

  student: any = null;
  userData: any = null;
  roll: any = null;
  questions: any = null;

  ngOnInit(): void {
    const storedData = localStorage.getItem('studentData');
    if (storedData) {
      this.userData = JSON.parse(storedData);
     // console.log('Retrieved data in StudentDashboardComponent:', this.userData);
      //console.log(this.userData.student);
      //console.log(this.userData.questionStatusList);
      this.student = this.userData.student;
      this.roll = this.userData.student.roll;
      this.questions = this.userData.question;
      
      // Apply the filter to the status list
      this.filteredStatusList = this.filterStatusList(this.userData.questionStatusList);
      //console.log(this.filteredStatusList);
    } else {
      console.error('No user data found in localStorage');
    }
  }

  filterStatusList(statusList: any[]): any[] {
    const uniqueStatusMap = new Map<string, boolean>();

    return statusList.filter((statusItem) => {
      const uniqueKey = `${statusItem.questionId}-${statusItem.submissionStatus}-${statusItem.approvedStatus}-${statusItem.isCorrect}`;
      if (uniqueStatusMap.has(uniqueKey)) {
        return false;
      } else {
        uniqueStatusMap.set(uniqueKey, true);
        return true;
      }
    });
  }
  logout() {
    // Clear user data from local storage
    localStorage.removeItem('userData');

    // Optionally, you can redirect the user to a login page
    this.router.navigate(['/login']);
  }
  expandedQuestions: Map<number, boolean> = new Map();

  toggleQuestionDetails(questionId: number): void {
    const isExpanded = this.expandedQuestions.get(questionId) || false;
    this.expandedQuestions.set(questionId, !isExpanded);
  }

  isQuestionExpanded(questionId: number): boolean {
    return this.expandedQuestions.get(questionId) || false;
  }
  getAnswerPanel(roll:number,questionId: number,qno: number) {
    const response = {roll: roll, questionId: questionId, qno: qno};
      //console.log(response);
     
      this.service.checkPanel(roll,questionId,qno).subscribe(
        (response)=>{
          localStorage.setItem('check-answer-data', JSON.stringify(response));
          this.router.navigate(['/check-answer']);
        },
        (error)=>{
          console.error('Login failed:', error);
        }
      )
     
    
  }
  getCountOfEveryStatus(questionStatusList:any[]){
    let submittedAnswers = 0;
    let approvedAnswers = 0;
    let correctAnswers = 0;
    let incorrectAnswers = 0;

    questionStatusList.forEach(status => {
      if (status.submissionStatus===1) {
        submittedAnswers++;
      }
      if (status.approvedStatus===1) {
        approvedAnswers++;
      }
      if (status.isCorrect===1) {
        correctAnswers++;
      } else if (status.isCorrect=== 2) {
        incorrectAnswers++;
      }
    });

    return {
      submittedAnswers,
      approvedAnswers,
      correctAnswers,
      incorrectAnswers
    };
  }
}