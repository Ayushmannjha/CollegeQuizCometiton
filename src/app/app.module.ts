import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AnswerPanelComponent } from './answer-panel/answer-panel.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProfileCheckComponent } from './profile-check/profile-check.component';
import { CheckAnswerComponent } from './check-answer/check-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentDashboardComponent,
    AnswerPanelComponent,
    RegistrationComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    ProfileCheckComponent,
    CheckAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
