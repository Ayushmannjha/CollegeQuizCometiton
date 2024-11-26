import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  //private baseUrl = 'https://collage.astropoints.in';  // Replace with your backend URL
   private baseUrl = 'http://localhost:8082';
  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://ayushmannjha.github.io'
    });
    return this.http.post<any>(`${this.baseUrl}/login`, credentials, { headers });
  }

  getAnswerPanel(roll: number, questionId: number, qno: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://ayushmannjha.github.io',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    });
    const params = new HttpParams()
      .set('roll', roll.toString())
      .set('questionId', questionId.toString())
      .set('qno', qno);

    return this.http.get(`${this.baseUrl}/answer-panel`, { params, headers });
  }

  submitAnswer(requestData: { roll: number; questionId: number; answer: string }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://ayushmannjha.github.io'
    });
    return this.http.post<any>(`${this.baseUrl}/submit-answer`, requestData, { headers });
  }

  uploadQuestion(description: string, topic: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://ayushmannjha.github.io'
    });
    const params = new HttpParams()
      .set('description', description)
      .set('topic', topic);

    return this.http.post(`${this.baseUrl}/uploadQuestion`, {}, { params, headers });
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

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://ayushmannjha.github.io'
    });
    return this.http.post<any>(`${this.baseUrl}/register-student`, {}, { params, headers });
  }

  adminLogin(credentials: { email: string; password: string }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://ayushmannjha.github.io',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    });
    return this.http.post<any>(`${this.baseUrl}/admin-login`, credentials, { headers });
  }

  searchStudent(roll: string): Observable<any> {
    const params = new HttpParams().set('roll', roll);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://ayushmannjha.github.io'
    });
    return this.http.get(`${this.baseUrl}/searchStudent`, { params, headers });
  }

  updateQuestionStatus(request: { questionId: number, roll: number, status: string }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://ayushmannjha.github.io'
    });
    return this.http.post(`${this.baseUrl}/updateQuestionStatus`, request, { headers });
  }

  checkPanel(roll: number, questionId: number, qno: number): Observable<any> {
    const params = new HttpParams()
      .set('roll', roll.toString())
      .set('questionId', questionId.toString())
      .set('qno', qno);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://ayushmannjha.github.io'
    });

    return this.http.get(`${this.baseUrl}/check-panel`, { params, headers });
  }
}
