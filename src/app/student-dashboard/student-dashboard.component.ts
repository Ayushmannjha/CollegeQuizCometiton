import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  // Type 'filteredStatusList' as 'any[]'
  filteredStatusList: any[] = [];

  constructor(private router: Router) {}

  student: any = null;
  userData: any = null;
  roll: any = null;
  questions: any = null;

  ngOnInit(): void {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      this.userData = JSON.parse(storedData);
      console.log('Retrieved data in StudentDashboardComponent:', this.userData);
      console.log(this.userData.student);
      console.log(this.userData.questionStatusList);
      this.student = this.userData.student;
      this.roll = this.userData.student.roll;
      this.questions = this.userData.questions;

      // Apply the filter to the status list
      this.filteredStatusList = this.filterStatusList(this.userData.questionStatusList);
      console.log(this.filteredStatusList);
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
}
