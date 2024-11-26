import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = 'https://collage.astropoints.in';  // Replace with your backend URL

  constructor(private http: HttpClient) {}
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials);
  }
  getAnswerPanel(roll: number, questionId: number, qno: number): Observable<any> {
    // Set up the query parameters
    const params = new HttpParams()
      .set('roll', roll.toString())
      .set('questionId', questionId.toString())
      .set('qno', qno);

    // Use the correct endpoint URL for the GET request
    return this.http.get(`${this.baseUrl}/answer-panel`, { params });
  }
  submitAnswer(requestData: { roll: number; questionId: number; answer: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/submit-answer`, requestData);
  }
  uploadQuestion(description: string, topic: string): Observable<any> {
    const params = new HttpParams()
    .set('description',description)
    .set('topic', topic);
    
    return this.http.post(`${this.baseUrl}/uploadQuestion`, {}, { params });
  }
  registerStudent(studentData: {
    name: string;
    email: string;
    phone: string;
    password: string;
    roll: string;
  }): Observable<any> {
    const params = new HttpParams()
      .set('name', studentData.name)
      .set('email', studentData.email)
      .set('phone', studentData.phone)
      .set('password', studentData.password)
      .set('roll', studentData.roll);

    return this.http.post<any>(`${this.baseUrl}/register-student`, {}, { params });
  }
  adminLogin(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/admin-login`, credentials);
  }
   searchStudent(roll: string): Observable<any> {
    const params = new HttpParams().set('roll', roll);
    return this.http.get(`${this.baseUrl}/searchStudent`, { params });
  }

  updateQuestionStatus(request: { questionId: number, roll: number, status: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/updateQuestionStatus`, request);
  }

  checkPanel(roll: number, questionId: number, qno: number): Observable<any> {
    // Set up the query parameters
    const params = new HttpParams()
      .set('roll', roll.toString())
      .set('questionId', questionId.toString())
      .set('qno', qno);

    // Use the correct endpoint URL for the GET request
    return this.http.get(`${this.baseUrl}/check-panel`, { params });
  }
}
