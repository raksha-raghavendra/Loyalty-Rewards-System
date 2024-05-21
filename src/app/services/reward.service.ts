import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reward } from '../model/reward.model';

@Injectable({
  providedIn: 'root'
})
export class RewardService {
  private apiUrl = 'http://localhost:8081/reward';

  constructor(private http: HttpClient) { }

  getRewards(): Observable<Reward[]> {
    return this.http.get<Reward[]>(this.apiUrl);
  }
}