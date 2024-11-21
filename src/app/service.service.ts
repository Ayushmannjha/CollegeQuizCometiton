import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = 'https://localhost:8082';  // Replace with your backend URL

  constructor(private http: HttpClient) {}
  login(email: string, password: string): Observable<any> {
    const loginUrl = `${this.baseUrl}/login`; // Backend login endpoint
    const body = { email, password };

    return this.http.post<any>(loginUrl, body);
  }
}
