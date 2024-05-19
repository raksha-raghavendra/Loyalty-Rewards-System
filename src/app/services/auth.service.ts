import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8081/user';

  constructor(private http: HttpClient) {}

  signup(name: string, contactNumber: string, email: string, password: string): Observable<any> {
    const signupData = { name, contactNumber, email, password };
    return this.http.post(`${this.baseUrl}/signup`, signupData);
  }

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post(`${this.baseUrl}/login`, loginData);
  }
}
