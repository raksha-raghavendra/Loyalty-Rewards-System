import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/user';
import { Reward } from '../model/reward.model';
import { RewardService } from '../services/reward.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {
  currentUser: User | undefined;

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

//   purchaseReward(reward: Reward): void {

//     const userId = localStorage.getItem('userId');
//     if (userId) {
//       this.rewardService.createPurchase(reward.id, parseInt(userId)).subscribe(
//         (data) => {
//           console.log(userId);
//           console.log('Purchase successful', data);
//           alert('Reward purchased successfully!');
//           localStorage.setItem('points', user.currentPoints+'');
//           // Optionally, you might want to refresh the user points or reward list
//         },
//         (error) => {
//           //console.error('Error purchasing reward', error);
//           alert('Failed to purchase reward as User doesnot have enough Points!');
//         }
//       );
//     } else {
//       console.error('User ID not found in localStorage');
//       alert('User ID not found. Please log in again.');
//     }

//     const userId1 = this.userService.getCurrentUserId();
//     this.userService.getUserDetails(userId1).subscribe({
//       next: (user: User) => {
//         this.currentUser = user;  // Store user details for display
//         //this.currentPoints = this.currentUser.currentPoints;
//     localStorage.setItem('points', user.currentPoints+'');
//     }
// });
//   }
// }

purchaseReward(reward: Reward): void {
  const userId = localStorage.getItem('userId');
  if (userId) {
    this.rewardService.createPurchase(reward.id, parseInt(userId)).subscribe(
      (data) => {
        console.log(userId);
        console.log('Purchase successful', data);
        alert('Reward purchased successfully!');
        
        // Fetch the updated user details after the purchase
        this.userService.getUserDetails(parseInt(userId)).subscribe({
          next: (user: User) => {
            this.currentUser = user;
            localStorage.setItem('points', user.currentPoints + '');
          },
          error: (error) => {
            console.error('Error fetching user details', error);
          }
        });
      },
      (error) => {
        console.error('Error purchasing reward', error);
        alert('Failed to purchase reward as User does not have enough Points!');
      }
    );
  } else {
    console.error('User ID not found in localStorage');
    alert('User ID not found. Please log in again.');
  }
}
}