import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { Reward as RewardModel } from '../model/reward.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8081';
  private isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  signup(name: string, contactNumber: string, email: string, password: string): Observable<any> {
    const signupData = { name, contactNumber, email, password };
    return this.http.post(`${this.baseUrl}/user/signup`, signupData);
  }

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    this.isLoggedIn.next(true);
    return this.http.post(`${this.baseUrl}/user/login`, loginData);
  }

  logout(): void {
    localStorage.removeItem('userId');
    localStorage.removeItem('phone'); 
    localStorage.removeItem('username'); 
    localStorage.removeItem('email'); 
    localStorage.removeItem('points'); 
    //localStorage.removeItem('userId'); 
  }

  getRewards(): Observable<Reward[]> {
    return this.http.get<Reward[]>(`${this.baseUrl}/reward`);
  }

  isLoggedIn$(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }
}
// Define LoginResponse interface
export interface LoginResponse {
  message: string;
  rewards: Reward[];
}

// Define Reward interface
export interface Reward {
  category: string;
  name: string;
  description: string;
  points: number;
}