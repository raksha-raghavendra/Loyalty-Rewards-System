
import { Component, OnInit } from '@angular/core';
import { User } from 'src/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User | undefined;
  userProfilePicUrl = 'https://example.com/path-to-your-image.jpg'; // Update with a real URL or local asset path
  userName = 'John Doe';
  currentPoints = 1250;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUserDetails();
  }

  fetchUserDetails(): void {
    const userId = this.userService.getCurrentUserId();  // Get the current user ID from UserService
    this.userService.getUserDetails(userId).subscribe({
      next: (user: User) => {
        this.currentUser = user;  // Store user details for display
        console.log('User details fetched successfully:', user);
      },
      error: (error) => {
        console.error('Error fetching user details:', error);
      }
    });
  }
}
