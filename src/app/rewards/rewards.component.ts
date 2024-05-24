import { Component, OnInit } from '@angular/core';
import { RewardService } from '../services/reward.service';
import { Reward } from '../model/reward.model';
import { RewardPurchase } from '../model/reward-purchase.model';
import { UserService } from '../user.service';
import { User } from 'src/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {

  id: number;
  user: User;
  rewards: Reward[] = [];

  constructor(private route: ActivatedRoute,
    private rewardService: RewardService,
    private userService : UserService
  ) { }

  ngOnInit(): void {
    this.fetchRewards();
  }
  
  fetchRewards(): void {
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

  purchaseReward(reward: Reward): void {
    this.id = this.route.snapshot.params['id'];
    
    this.user = new User();
    this.userService.getUserById(this.id).subscribe(data => {
      this.user = data;
      console.log(data);
    });
  }
}


/**
 * const userId = this.userService.getCurrentUserId();
    if (userId) {
      const rewardPurchase: RewardPurchase = {
        rewardId: reward.id,
        userId: userId,
        // Add other necessary fields if required
      };
      
      this.rewardService.createPurchase(rewardPurchase).subscribe(
        (response) => {
          console.log('Purchase successful:', response);
        },
        (error) => {
          console.error('Error making purchase', error);
        }
      );
    } else {
      console.error('User ID not found');
    }
 */