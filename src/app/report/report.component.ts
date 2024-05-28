import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  currentPoints: number | undefined;
  totalPointsRedeemed: number | undefined;

  constructor(private userService: UserService,private router: Router) {}

  ngOnInit(): void {
    this.fetchReport();
  }

  fetchReport(): void {
    const userId = this.userService.getCurrentUserId();
    this.userService.getUserReport(userId).subscribe({
      next: (data) => {
        this.currentPoints = data.currentPoints;
        this.totalPointsRedeemed = data.totalPointsRedeemed;
        localStorage.setItem('points', this.currentPoints+'');
      },
      error: (error) => {
        console.error('Error fetching report:', error);
      }
    });
  }

  redirectToCatalog(): void {
    this.router.navigate(['/rewards']);
  }
}
