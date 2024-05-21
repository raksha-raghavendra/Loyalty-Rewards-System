import { Component, OnInit } from '@angular/core';
import { RewardService } from '../services/reward.service';
import { Reward } from '../model/reward.model';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {

  rewards: Reward[] = [];

  constructor(private rewardService: RewardService) { }

  ngOnInit(): void {
    this.rewardService.getRewards().subscribe(
      (data) => {
        console.log('Rewards data received:', data);
        this.rewards = data;
      },
      (error) => {
        console.error('Error fetching rewards', error);
      }
    );
  }
  getRamdomNumber(): number {
    return Math.floor(Math.random() * (3000 - 50 + 1)) + 50;
  }

}
