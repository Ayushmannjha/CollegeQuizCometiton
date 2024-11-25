import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Adjust the path as per your project structure
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AnswerPanelComponent } from './answer-panel/answer-panel.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProfileCheckComponent } from './profile-check/profile-check.component';
import { CheckAnswerComponent } from './check-answer/check-answer.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent}, // Root path route
  { path: 'student-dashboard', component: StudentDashboardComponent },
  {path: 'answer-panel/:roll/:questionId/:index', component:AnswerPanelComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'profile-check',component:ProfileCheckComponent},
  {path:'check-answer',component:CheckAnswerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
