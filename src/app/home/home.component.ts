import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User | undefined;
  
  //userName = 'John Doe';
  currentPoints = 0
 

  constructor(private userService: UserService,private router: Router) {}

  ngOnInit(): void {
    this.fetchUserDetails();
  }

  fetchUserDetails(): void {
    const userId = this.userService.getCurrentUserId();  // Get the current user ID from UserService
    this.userService.getUserDetails(userId).subscribe({
      next: (user: User) => {
        this.currentUser = user;  // Store user details for display
        this.currentPoints = this.currentUser.currentPoints;
        localStorage.setItem('username', this.currentUser.name);
        localStorage.setItem('email', this.currentUser.email);
        localStorage.setItem('phone', this.currentUser.contactNumber);
        localStorage.setItem('points', this.currentPoints+'');
        console.log('User details fetched successfully:', user);
      },
      error: (error) => {
        this.currentUser = new User();
        this.currentUser.contactNumber = localStorage.getItem('phone');
        this.currentUser.name = localStorage.getItem('username'); 
        this.currentUser.email = localStorage.getItem('email'); 
        this.currentUser.currentPoints = parseInt(localStorage.getItem('points')); 
        this.currentPoints = this.currentUser.currentPoints;
        console.error('Error fetching user details:', error);
      }
    });
  }
  
  redirectToCatalog(): void {
    this.router.navigate(['/rewards']);
  }
 
  
}
